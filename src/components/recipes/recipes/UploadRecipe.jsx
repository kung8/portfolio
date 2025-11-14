import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export const UploadRecipe = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [websiteUrl, setWebsiteUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [extractedData, setExtractedData] = useState(null);
    const [uploadMethod, setUploadMethod] = useState('image'); // 'image' or 'website'

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            if (file.type.startsWith('image/')) {
                setSelectedFile(file);
            } else {
                toast.error('Please select an image file');
                event.target.value = '';
            }
        }
    };

    const handleImageUpload = async () => {
        if (!selectedFile) {
            toast.error('Please select an image file');
            return;
        }

        setLoading(true);
        const formData = new FormData();
        formData.append('recipeImage', selectedFile);

        try {
            const response = await axios.post('/api/upload-recipe-image', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            setExtractedData(response.data);
            toast.success('Recipe extracted from image successfully!');
        } catch (error) {
            console.error('Error uploading image:', error);
            toast.error(error.response?.data?.message || 'Failed to process recipe image');
        } finally {
            setLoading(false);
        }
    };

    const handleWebsiteScrape = async () => {
        if (!websiteUrl) {
            toast.error('Please enter a website URL');
            return;
        }

        if (!isValidUrl(websiteUrl)) {
            toast.error('Please enter a valid URL');
            return;
        }

        setLoading(true);

        try {
            const response = await axios.post('/api/scrape-recipe-url', {
                url: websiteUrl
            });

            setExtractedData(response.data);
            toast.success('Recipe scraped from website successfully!');
        } catch (error) {
            console.error('Error scraping website:', error);
            toast.error(error.response?.data?.message || 'Failed to scrape recipe from website');
        } finally {
            setLoading(false);
        }
    };

    const handleGenerateRecipeFile = async () => {
        if (!extractedData) {
            toast.error('No recipe data to generate file');
            return;
        }

        setLoading(true);

        try {
            const response = await axios.post('/api/generate-recipe-file', {
                recipeData: extractedData
            });

            toast.success(`Recipe file created: ${response.data.filename}`);
                        
            // Reset form
            setExtractedData(null);
            setSelectedFile(null);
            setWebsiteUrl('');
            document.getElementById('url-input').value = '';
        } catch (error) {
            console.error('Error generating recipe file:', error);
            toast.error(error.response?.data?.message || 'Failed to generate recipe file');
        } finally {
            setLoading(false);
        }
    };

    const isValidUrl = (string) => {
        try {
            new URL(string);
            return true;
        } catch (_) {
            return false;
        }
    };

    return (
        <div className="upload-recipe">
            <h2>Upload Recipe</h2>

            {/* Method Selection */}
            <div className="method-selection">
                <h3>Choose Upload Method:</h3>
                <div className="method-options">
                    <label>
                        <input
                            type="radio"
                            value="image"
                            checked={uploadMethod === 'image'}
                            onChange={(e) => setUploadMethod(e.target.value)}
                        />
                        Upload Recipe Image
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="website"
                            checked={uploadMethod === 'website'}
                            onChange={(e) => setUploadMethod(e.target.value)}
                        />
                        Scrape from Website
                    </label>
                </div>
            </div>

            {/* Image Upload Section */}
            {uploadMethod === 'image' && (
                <div className="image-upload-section">
                    <h3>Upload Recipe Image</h3>
                    <p>Upload a photo of a recipe (ingredients list, instructions, etc.)</p>

                    <div className="file-upload">
                        <input
                            id="file-input"
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            disabled={loading}
                        />
                        {selectedFile && (
                            <div className="file-preview">
                                <p>Selected: {selectedFile.name}</p>
                                <img
                                    src={URL.createObjectURL(selectedFile)}
                                    alt="Recipe preview"
                                    style={{ maxWidth: '300px', maxHeight: '300px' }}
                                />
                            </div>
                        )}
                    </div>

                    <button
                        onClick={handleImageUpload}
                        disabled={!selectedFile || loading}
                        className="upload-btn"
                    >
                        {loading ? 'Processing...' : 'Extract Recipe from Image'}
                    </button>
                </div>
            )}

            {/* Website Scraping Section */}
            {uploadMethod === 'website' && (
                <div className="website-scrape-section">
                    <h3>Scrape Recipe from Website</h3>
                    <p>Enter a URL to a recipe website (e.g., AllRecipes, Food Network, etc.)</p>

                    <div className="url-input">
                        <input
                            id="url-input"
                            type="url"
                            value={websiteUrl}
                            onChange={(e) => setWebsiteUrl(e.target.value)}
                            placeholder="https://www.example.com/recipe"
                            disabled={loading}
                        />
                    </div>

                    <button
                        onClick={handleWebsiteScrape}
                        disabled={!websiteUrl || loading}
                        className="scrape-btn"
                    >
                        {loading ? 'Scraping...' : 'Scrape Recipe from Website'}
                    </button>
                </div>
            )}

            {/* Loading Indicator */}
            {loading && (
                <div className="loading">
                    <p>Processing... This may take a few moments.</p>
                </div>
            )}

            {/* Extracted Recipe Data Preview */}
            {extractedData && (
                <div className="extracted-data">
                    <h3>Extracted Recipe Data</h3>
                    <div className="recipe-preview">
                        <div className="recipe-header">
                            <h4>{extractedData.name || 'Untitled Recipe'}</h4>
                            <p><strong>Category:</strong> {extractedData.category}</p>
                            <p><strong>Cuisine:</strong> {extractedData.genre}</p>
                            <p><strong>Prep Time:</strong> {extractedData.prepTime?.amount} {extractedData.prepTime?.unit}</p>
                            <p><strong>Cook Time:</strong> {extractedData.cookTime?.amount} {extractedData.cookTime?.unit}</p>
                            <p><strong>Serves:</strong> {extractedData.yields?.amount} {extractedData.yields?.unit}</p>
                        </div>

                        <div className="ingredients-preview">
                            <h5>Ingredients:</h5>
                            <ul>
                                {extractedData.ingredients?.map((ingredient, index) => (
                                    <li key={index}>
                                        {ingredient.amount} {ingredient.unit} {ingredient.name}
                                        {ingredient.additionalDetails && ` (${ingredient.additionalDetails})`}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="directions-preview">
                            <h5>Instructions:</h5>
                            <ol>
                                {extractedData.directions?.map((direction, index) => (
                                    <li key={index}>{direction.step}</li>
                                ))}
                            </ol>
                        </div>

                        {extractedData.appliances?.length > 0 && (
                            <div className="appliances-preview">
                                <h5>Appliances:</h5>
                                <ul>
                                    {extractedData.appliances.map((appliance, index) => (
                                        <li key={index}>{appliance.name}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {extractedData.supplies?.length > 0 && (
                            <div className="supplies-preview">
                                <h5>Supplies:</h5>
                                <ul>
                                    {extractedData.supplies.map((supply, index) => (
                                        <li key={index}>{supply.name}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className="action-buttons">
                        <button
                            onClick={handleGenerateRecipeFile}
                            disabled={loading}
                            className="generate-btn"
                        >
                            Generate Recipe File
                        </button>
                        <button
                            onClick={() => setExtractedData(null)}
                            disabled={loading}
                            className="cancel-btn"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

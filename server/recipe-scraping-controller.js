module.exports = {
    uploadRecipeImage: async (req, res) => {
        try {
            if (!req.file) {
                return res.status(400).json({ message: 'No image file uploaded' });
            }

            const RecipeImageParser = require('./services/RecipeImageParser');
            const parser = new RecipeImageParser();

            // Extract text from image using OCR
            const extractedText = await parser.extractTextFromImage(req.file.path);
            
            // Parse the extracted text into recipe data
            const recipeData = parser.parseRecipeText(extractedText);
            
            // Clean up uploaded file
            const fs = require('fs');
            fs.unlinkSync(req.file.path);
            
            res.json(recipeData);
        } catch (error) {
            console.error('Error processing recipe image:', error);
            res.status(500).json({ message: error.message || 'Failed to process recipe image' });
        }
    },

    scrapeRecipeUrl: async (req, res) => {
        try {
            const { url } = req.body;
            
            if (!url) {
                return res.status(400).json({ message: 'URL is required' });
            }

            const RecipeWebScraper = require('./services/RecipeWebScraper');
            const scraper = new RecipeWebScraper();

            // Scrape recipe data from the URL
            const recipeData = await scraper.scrapeRecipe(url);
            
            res.json(recipeData);
        } catch (error) {
            console.error('Error scraping recipe:', error);
            res.status(500).json({ message: error.message || 'Failed to scrape recipe from URL' });
        }
    },

    generateRecipeFile: async (req, res) => {
        try {
            const { recipeData } = req.body;
            
            if (!recipeData) {
                return res.status(400).json({ message: 'Recipe data is required' });
            }

            const RecipeFileGenerator = require('./services/RecipeFileGenerator');
            const generator = new RecipeFileGenerator();

            // Validate recipe data
            generator.validateRecipeData(recipeData);
            
            // Generate the recipe file
            const result = await generator.generateRecipeFile(recipeData);
            
            res.json(result);
        } catch (error) {
            console.error('Error generating recipe file:', error);
            res.status(500).json({ message: error.message || 'Failed to generate recipe file' });
        }
    }
}
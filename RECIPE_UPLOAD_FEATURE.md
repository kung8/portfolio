# Recipe Upload and Scraping Feature

This feature allows users to extract recipe information from images or scrape recipes from websites, automatically generating properly formatted recipe files that match the template structure.

## Features

### 1. Image Upload with OCR
- Upload photos of recipes (ingredient lists, instructions, etc.)
- Uses Tesseract.js for optical character recognition (OCR)
- Automatically extracts ingredients, instructions, cooking times, and more
- Intelligent parsing to identify recipe components

### 2. Website Scraping
- Enter a URL from popular recipe websites
- Supports JSON-LD structured data (most reliable)
- Fallback HTML parsing for websites without structured data
- Works with sites like AllRecipes, Food Network, etc.

### 3. Automatic File Generation
- Creates properly formatted recipe files matching template.js structure
- Generates appropriate imports from ingredients.js
- Includes all recipe metadata (category, genre, cooking times, etc.)
- Follows existing project conventions

## Installation

The required dependencies are already added to package.json:

```bash
npm install
```

Dependencies added:
- `tesseract.js` - OCR for image text extraction
- `cheerio` - HTML parsing for web scraping
- `puppeteer` - Browser automation for dynamic content
- `multer` - File upload handling

## Usage

### Frontend Component

The `UploadRecipe` component provides a user interface with two modes:

1. **Image Upload Mode**:
   - Select an image file containing recipe information
   - Click "Extract Recipe from Image" to process
   - Review extracted data and generate file

2. **Website Scraping Mode**:
   - Enter a recipe URL
   - Click "Scrape Recipe from Website" to extract
   - Review scraped data and generate file

### API Endpoints

#### POST `/api/upload-recipe-image`
- **Purpose**: Process uploaded recipe image with OCR
- **Body**: FormData with 'recipeImage' file
- **Response**: Extracted recipe data object

#### POST `/api/scrape-recipe-url`
- **Purpose**: Scrape recipe from website URL
- **Body**: `{ url: "https://example.com/recipe" }`
- **Response**: Scraped recipe data object

#### POST `/api/generate-recipe-file`
- **Purpose**: Generate recipe file from extracted data
- **Body**: `{ recipeData: {...} }`
- **Response**: `{ filename: "recipe-name.js", filepath: "..." }`

## File Structure

```
server/
├── services/
│   ├── RecipeImageParser.js    # OCR and text parsing
│   ├── RecipeWebScraper.js     # Website scraping
│   └── RecipeFileGenerator.js  # File generation
├── uploads/                    # Temporary image storage
├── controller.js              # Added new endpoints
└── index.js                  # Added routes and multer config

src/
├── components/recipes/recipes/
│   └── UploadRecipe.jsx      # Main upload component
└── scss/
    └── UploadRecipe.scss     # Component styles
```

## Recipe Data Structure

The system generates recipe objects matching the template.js structure:

```javascript
{
    name: "Recipe Name",
    category: "DINNER",
    genre: "AMERICAN", 
    method: "BAKE",
    protein: "CHICKEN",
    type: "MAIN_DISH",
    yields: { amount: 4, unit: "SERVING" },
    prepTime: { amount: 15, unit: "MINUTE" },
    cookTime: { amount: 30, unit: "MINUTE" },
    ingredients: [
        { name: "...", amount: 2, unit: "CUP", additionalDetails: "...", section: "MAIN" }
    ],
    appliances: [{ name: "oven" }],
    supplies: [{ name: "mixing bowl" }],
    directions: [
        { step: "...", section: "MAIN" }
    ],
    websites: [
        { label: "...", link: "...", authors: ["..."], finder: "Web Scraper" }
    ]
}
```

## Supported Formats

### Image OCR
- **File types**: JPG, PNG, GIF, WebP
- **Content**: Ingredient lists, typed/printed recipes, recipe cards
- **Languages**: English (can be extended)
- **Quality**: Higher resolution images work better

### Website Scraping
- **Structured data**: JSON-LD (Recipe schema.org)
- **HTML fallback**: Common selectors for ingredients/instructions
- **Popular sites**: AllRecipes, Food Network, Bon Appétit, etc.
- **Dynamic content**: Uses Puppeteer when needed

## Error Handling

- **Invalid files**: Only image files accepted for upload
- **OCR failures**: Graceful fallback with manual review prompts
- **Scraping errors**: Handles network issues and parsing failures
- **File conflicts**: Prevents overwriting existing recipe files
- **Validation**: Ensures minimum required data before file generation

## Limitations

1. **OCR Accuracy**: Handwritten text may not be accurately recognized
2. **Website Compatibility**: Some sites block scraping or have complex layouts
3. **Ingredient Mapping**: May not perfectly match existing ingredient constants
4. **Manual Review**: Generated recipes should be reviewed and refined
5. **Rate Limiting**: Web scraping may be rate-limited by target sites

## Future Enhancements

- **Ingredient Matching**: Intelligent mapping to existing ingredient constants
- **Image Recognition**: AI-powered recipe component detection
- **Bulk Processing**: Multiple images/URLs at once
- **Recipe Validation**: Enhanced parsing accuracy
- **Custom Mappings**: Site-specific scraping rules
- **Nutrition Data**: Automatic nutritional information extraction

## Development Notes

### Adding New Ingredients/Supplies
If the system encounters unknown ingredients or supplies, add them to `ingredients.js`:

```javascript
// In ingredients.js COOKING_SUPPLIES section
NEW_TOOL: { name: 'new tool', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES }
```

### Customizing Parsing Rules
Modify parsing logic in the service classes:
- `RecipeImageParser.js` - OCR text processing rules
- `RecipeWebScraper.js` - Website-specific selectors
- `RecipeFileGenerator.js` - File generation templates

### Testing
- Test with various image qualities and formats
- Verify scraping with different recipe websites
- Check generated files for proper formatting
- Validate imports and constants usage
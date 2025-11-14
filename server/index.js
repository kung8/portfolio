require('dotenv').config();
const { SERVER_PORT } = process.env;
const ctrl = require('./controller');
const scrapingCtrl = require('./recipe-scraping-controller');
const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, 'uploads/'));
    },
    filename: (req, file, cb) => {
        cb(null, `recipe-${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else {
            cb(new Error('Only image files are allowed'), false);
        }
    },
    limits: {
        fileSize: 10 * 1024 * 1024 // 10MB limit
    }
});

// Ensure uploads directory exists
const fs = require('fs');
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
}

app.use(express.json());
app.use(express.static(`${__dirname}/../public/assets`));
app.use(express.static(`${__dirname}/../build`));
app.post('/api/message', ctrl.message);
app.get('/api/recipe/category', ctrl.getRecipeCategories);
app.get('/api/recipe/featured', ctrl.getFeaturedRecipes);
app.get('/api/recipe/name', ctrl.getRecipeByName);
app.get('/api/ingredient/category', ctrl.getIngredientCategories);
app.get('/api/ingredient', ctrl.getIngredients);
app.get('/api/hero', ctrl.getHeroData);
app.get('/api/data', ctrl.getData);

// New recipe upload and scraping endpoints
app.post('/api/upload-recipe-image', upload.single('recipeImage'), scrapingCtrl.uploadRecipeImage);
app.post('/api/scrape-recipe-url', scrapingCtrl.scrapeRecipeUrl);
app.post('/api/generate-recipe-file', scrapingCtrl.generateRecipeFile);
app.listen(SERVER_PORT, () => console.log(`Portfolio running on ${SERVER_PORT}`));
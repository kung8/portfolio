import { RECIPE_FONT_SIZE_LOCAL_STORAGE_KEY } from '../constants.js';

export const fontSizeOptions = [
    'Small',
    'Medium',
    'Large',
];

export const getRecipeFontSize = () => {
    const storedFontSize = localStorage.getItem(RECIPE_FONT_SIZE_LOCAL_STORAGE_KEY);
    if (storedFontSize) return storedFontSize;
    return fontSizeOptions[2] // Default to 'Large';
}
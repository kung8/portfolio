import { RECIPE_FONT_SIZE_LOCAL_STORAGE_KEY } from '../constants.js';

export const fontSizeOptions = [
    'Extra Small',
    'Small',
    'Medium',
    'Large',
    'Extra Large',
];

export const getRecipeFontSize = () => {
    const storedFontSize = localStorage.getItem(RECIPE_FONT_SIZE_LOCAL_STORAGE_KEY);
    if (storedFontSize) return storedFontSize;
    return fontSizeOptions[3] // Default to 'Large';
}
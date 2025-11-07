import { getRecipeFontSize } from './get-recipe-font-size.js';


export const getRecipeFontSizeClass = () => {
    const recipeFontSize = getRecipeFontSize();
    const recipeFontSizeClass = `font-size-${recipeFontSize.toLowerCase().split(' ').join('-')}`;
    return recipeFontSizeClass;
}
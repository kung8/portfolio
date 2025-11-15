import { getRecipeFontSize } from './get-recipe-local-storage';

export const getRecipeFontSizeClass = () => {
    const recipeFontSize = getRecipeFontSize();
    const recipeFontSizeClass = `font-size-${recipeFontSize.toLowerCase().split(' ').join('-')}`;
    return recipeFontSizeClass;
}
import { getRecipeFontSizeLocalStorageKey } from './get-recipe-local-storage';

export const getRecipeFontSizeClass = () => {
    const recipeFontSize = getRecipeFontSizeLocalStorageKey();
    const recipeFontSizeClass = `font-size-${recipeFontSize.toLowerCase().split(' ').join('-')}`;
    return recipeFontSizeClass;
}
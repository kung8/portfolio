import { createContext, useContext } from 'react';

const initialContext = {}

const RecipeContext = createContext(initialContext);

const useRecipeContext = () => {
    const context = useContext(RecipeContext);

    if (!context) {
        throw new Error('useRecipeContext must be used within a RecipeContext.Provider');
    }

    return context;
}

export { RecipeContext, useRecipeContext };
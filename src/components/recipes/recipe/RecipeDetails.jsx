import {
    getRecipePageLayout,
    getShowRecipeFiguresLocalStorageKey,
    getShowRecipeNotes,
    getShowRecipeReheatOptions,
    getShowRecipeStorageOptions,
    getShowRecipeWebsiteReferences
} from '../utils';
import { Appliances } from './Appliances';
import { CookMode } from './CookMode';
import { CookTime } from './CookTime';
import { Directions } from './Directions';
import { Figures } from './Figures';
import { Ingredients } from './Ingredients';
import { IngredientsHeader } from './IngredientsHeader';
import { Notes } from './Notes';
import { PrepTime } from './PrepTime';
import { RecipeImage } from './RecipeImage';
import { Reheat } from './Reheat';
import { Storage } from './Storage';
import { Supplies } from './Supplies';
import { WaitTime } from './WaitTime';
import { Websites } from './Websites';
import { Yield } from './Yield';

export const RecipeDetails = () => {
    const recipePageLayout = getRecipePageLayout();
    const showRecipeFigures = getShowRecipeFiguresLocalStorageKey();
    const showRecipeNotes = getShowRecipeNotes();
    const showRecipeReheatOptions = getShowRecipeReheatOptions();
    const showRecipeStorageOptions = getShowRecipeStorageOptions();
    const showRecipeWebsiteReferences = getShowRecipeWebsiteReferences();

    return (
        <div className="recipe-details">
            <CookMode />
            <RecipeImage />
            <PrepTime />
            <CookTime />
            <WaitTime />
            <Yield />

            {recipePageLayout === 'standard' && (
                <div className={`recipe-layout-standard`}>
                    <div className="recipe-ingredients-supplies-and-appliances-container">
                        <div>
                            <IngredientsHeader />
                            <Ingredients />
                        </div>
                        <div>
                            <Supplies />
                        </div>
                        <div>
                            <Appliances />
                        </div>
                    </div>
                    <div>
                        <Directions />
                    </div>
                </div>
            )}

            {recipePageLayout === 'stacked' && (
                <>
                    <Appliances />
                    <Supplies />
                    <IngredientsHeader />
                    <Ingredients />
                    <Directions />
                </>
            )}

            {showRecipeStorageOptions && <Storage />}
            {showRecipeReheatOptions && <Reheat />}
            {showRecipeWebsiteReferences && <Websites />}
            {showRecipeNotes && <Notes />}
            {showRecipeFigures && <Figures />}
        </div>
    )
};
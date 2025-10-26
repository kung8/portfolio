import {
    getShowRecipeFigures,
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
    const showRecipeFigures = getShowRecipeFigures();
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
            <Appliances />
            <Supplies />
            <IngredientsHeader />
            <Ingredients />
            <Directions />
            {showRecipeStorageOptions && <Storage />}
            {showRecipeReheatOptions && <Reheat />}
            {showRecipeWebsiteReferences && <Websites />}
            {showRecipeNotes && <Notes />}
            {showRecipeFigures && <Figures />}
        </div>
    )
};
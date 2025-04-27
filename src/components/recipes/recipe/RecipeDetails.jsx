import { Appliances } from './Appliances';
import { CookTime } from './CookTime';
import { Directions } from './Directions';
import { Figures } from './Figures';
import { Ingredients } from './Ingredients';
import { IngredientsHeader } from './IngredientsHeader';
import { Notes } from './Notes';
import { PrepTime } from './PrepTime';
import { RecipeImage } from './RecipeImage';
import { Supplies } from './Supplies';
import { WaitTime } from './WaitTime';
import { Websites } from './Websites';
import { Yield } from './Yield';

export const RecipeDetails = () => (
    <div className="recipe-details">
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
        <Websites />
        <Notes />
        <Figures />
    </div>
);
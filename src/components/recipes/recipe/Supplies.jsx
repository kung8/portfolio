import { getRecipeFontSizeClass } from '../utils';
import { useRecipeContext } from './RecipeContext';

const SupplyItem = ({ supply }) => {
    const { selectedSupplies, setSelectedSupplies } = useRecipeContext();
    const checked = !!selectedSupplies.find(s => s.id === supply.id);

    const handleCheckboxChange = () => {
        const included = selectedSupplies.find(i => i.id === supply.id);
        if (included) {
            // removes the supply if it's already included
            const newSelectedSupplies = selectedSupplies.filter(s => s.id !== supply.id);
            setSelectedSupplies(newSelectedSupplies);
        } else {
            // adds the supply if it's not included
            setSelectedSupplies([...selectedSupplies, supply]);
        }
    }

    return (
        <li className="checkbox-supply-container">
            <input
                type="checkbox"
                id={supply.id}
                checked={checked}
                className={`checkbox-supply ${getRecipeFontSizeClass()}`}
                onChange={handleCheckboxChange}
            />
            <label htmlFor={supply.id} className={`checkbox-supply-label ${getRecipeFontSizeClass()}`}>{supply.name}</label>
        </li>
    )
}

export const Supplies = () => {
    const { handleAddSuppliesToGroceryListModalOpen, selectedSupplies, setSelectedSupplies, supplies } = useRecipeContext();
    if (!supplies || !supplies.length) return null;
    return (
        <>
            <div className="recipe-ingredients-label-container">
                <h4 className={`recipe-detail-label ${getRecipeFontSizeClass()}`}>Supplies:</h4>
                <div className="grocery-list-button-container">
                    <span
                        className={`select-all-button ${getRecipeFontSizeClass()}`}
                        onClick={() => {
                            if (selectedSupplies.length === supplies.length) {
                                setSelectedSupplies([]);
                            } else {
                                const newSelectedSupplies = supplies.map((supply) => supply);
                                setSelectedSupplies(newSelectedSupplies);
                            }
                        }}
                    >
                        {supplies.length > 0 && selectedSupplies.length === supplies.length ? 'Deselect All' : 'Select All'}
                    </span>
                    <span
                        className={`add-to-list-button ${selectedSupplies.length > 0 ? 'active' : ''} ${getRecipeFontSizeClass()}`}
                        onClick={async () => {
                            // update the selectedSupplies
                            const newSelectedSupplies = selectedSupplies.map((supply) => supply);
                            setSelectedSupplies(newSelectedSupplies);

                            // Open Add Supplies to Grocery List Modal
                            handleAddSuppliesToGroceryListModalOpen();
                        }}
                    >
                        Add to List
                    </span>
                </div>
            </div>
            <ul className="recipe-detail-list">
                {supplies.map((supply, index) => (
                    <SupplyItem key={supply.name + '-' + index} supply={supply} />
                ))}
            </ul>
        </>
    );
};
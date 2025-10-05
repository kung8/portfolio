import { useMemo } from 'react';
import dayjs from 'dayjs';
import { EmptyGroceryListItem } from './EmptyGroceryListItem';
import { GroceryListItem } from './GroceryListItem';
import { SortBy } from './SortBy';
import { READABLE_SHORT_DATE } from '../constants';

export const GroceryListModalContent = ({
    generateUUID,
    groceryList,
    setGroceryList,
    setSortBy,
    sortBy,
    setIsDeleteIngredientModalOpen,
    setIsEditIngredientModalOpen,
    setOriginalItemToEdit,
    setItemToEdit,
    setDeleteType,
    updateItem,
    updateLocalStorage,
}) => {
    const displayedList = useMemo(() => {
        // Group ingredients by category
        const displayedIngredientsListByCategory = () => Object.entries((groceryList || [])
            ?.reduce((group, ingredient) => {
                if (!group[ingredient.category]) group[ingredient.category] = [];
                group[ingredient.category].push(ingredient);
                return group;
            }, {}))
            .sort((a, b) => {
                if (a[0] === 'Other') return 1;
                if (a[0] < b[0]) return -1;
                if (a[0] > b[0]) return 1;
                return 0;
            });
        if (sortBy === 'category') return displayedIngredientsListByCategory();

        // Group ingredients by date
        const displayedIngredientsListByDate = () => {
            return Object.entries(groceryList
                .sort((a, b) => {
                    if (!a.date) return -1;
                    if (!b.date) return 1;
                    if (dayjs(a.date) < dayjs(b.date)) return -1;
                    if (dayjs(a.date) > dayjs(b.date)) return 1;
                    return 0;
                })
                .reduce((group, ingredient) => {
                    if (!ingredient.date) {
                        if (!group['No Specified Date']) group['No Specified Date'] = [];
                        group['No Specified Date'].push(ingredient);
                    } else {
                        if (!group[ingredient.date]) group[ingredient.date] = [];
                        group[ingredient.date].push(ingredient);
                    }
                    return group;
                }, {})).map(([date, ingredients]) => {
                    if (date === 'No Specified Date') return ['No Specified Date', ingredients];
                    return [dayjs(date).format(READABLE_SHORT_DATE), ingredients];
                });
        }
        if (sortBy === 'date') return displayedIngredientsListByDate();

        // Group ingredients by vendor
        const displayedIngredientsListByVendor = () => {
            return Object.entries((groceryList || [])
                .reduce((group, ingredient) => {
                    const vendor = ingredient.vendor || 'No Specified Vendor';
                    if (!group[vendor]) group[vendor] = [];
                    group[vendor].push(ingredient);
                    return group;
                }, {}))
                .sort((a, b) => {
                    if (a[0] === 'No Specified Vendor') return 1;
                    if (a[0] < b[0]) return -1;
                    if (a[0] > b[0]) return 1;
                    return 0;
                });
        }
        if (sortBy === 'vendor') return displayedIngredientsListByVendor();

        // default to category
        return displayedIngredientsListByCategory();
        // eslint-disable-next-line
    }, [groceryList.map(item => item.date + item.mealPlanningDateRange + item.category + item.checked + item.vendor).join(','), sortBy]);

    const removeItem = (id) => {
        const newGroceryList = [...groceryList].filter(ingredient => ingredient.id !== id);
        setGroceryList(newGroceryList);
        updateLocalStorage({ groceryList: newGroceryList });
    }

    const openDeleteModal = (type) => {
        setIsDeleteIngredientModalOpen(true);
        setDeleteType(type);
    }

    const openEditModal = (item) => {
        setIsEditIngredientModalOpen(true);
        setOriginalItemToEdit(item);
        setItemToEdit(item);
    }

    return (
        <>
            <div className="grocery-list">
                <EmptyGroceryListItem generateUUID={generateUUID} setGroceryList={setGroceryList} updateLocalStorage={updateLocalStorage} />
                {displayedList.map(([category, ingredients], index) => (
                    <div key={category + '-' + index} className="category-ingredient-container">
                        <h6 className={`${sortBy === 'date' ? 'ingredient-date' : 'ingredient-category'}`}>{category}</h6>
                        {ingredients.map((ingredient, index) => (
                            <GroceryListItem
                                key={ingredient.id + '-' + index + '-' + ingredient.name + '-' + ingredient.checked + '-' + ingredient.mealPlanningDateRange + '-' + ingredient.category + '-' + ingredient.date}
                                {...ingredient}
                                onInputChange={(value) => updateItem(ingredient, { name: value })}
                                onCheckboxChange={() => updateItem(ingredient, { checked: !ingredient.checked })}
                                onCategoryChange={(value) => updateItem(ingredient, { category: value })}
                                openEditModal={() => openEditModal(ingredient)}
                                onEmptyInputChange={() => removeItem(ingredient.id)}
                                sortBy={sortBy}
                            />
                        ))}
                    </div>
                ))}
            </div>
            <div className="modal-footer">
                <div className="delete-buttons-container">
                    <span onClick={groceryList.filter(item => item.checked).length > 0 ? () => openDeleteModal('checked') : undefined} className={groceryList.filter(item => item.checked).length > 0 ? 'has-values' : ''}>Delete Checked</span>
                    <span onClick={groceryList.length > 0 ? () => openDeleteModal('all') : undefined} className={groceryList.length > 0 ? 'has-values' : ''}>Delete All</span>
                </div>
                <SortBy
                    options={[
                        { id: 'category', label: 'Category' },
                        { id: 'date', label: 'Date' },
                        { id: 'vendor', label: 'Vendor' },
                    ]}
                    setSortBy={setSortBy}
                    sortBy={sortBy}
                />
            </div>
        </>
    )
};

import { useEffect, useState } from 'react';

import dayjs from 'dayjs';

import { useGetIngredientCategories } from '../../../hooks';
import { ModalBody, ModalContent, ModalFooter, ModalHeader } from '../../modal/ModalContent';
import { DATE_FORMAT, READABLE_SHORT_DATE } from '../constants';
import { useRecipeType } from '../hooks/use-recipe-type';
import { getVendorOptions } from '../utils';
import { getValidDateRangeError } from './getValidDateRangeError';
import { RecipeDateInput } from './RecipeDateInput';
import { RecipeDropdownInput } from './RecipeDropdownInput';

export const EditGroceryListItemModal = ({
    generateUUID,
    itemToEdit,
    setItemToEdit,
    originalItemToEdit,
    updateItem,
    closeEditIngredientModal,
    addMealPlan,
    updateSharedIngredients,
    updateMealPlan,
}) => {
    const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);

    const [date, setDate] = useState(originalItemToEdit.date);
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const today = dayjs();

    const [isStartMealPlanningCalendarOpen, setIsStartMealPlanningCalendarOpen] = useState(false);
    const [isEndMealPlanningCalendarOpen, setIsEndMealPlanningCalendarOpen] = useState(false);
    const [mealPlanningDateRange, setMealPlanningDateRange] = useState(originalItemToEdit?.mealPlanningDateRange ?? []);

    const [vendor, setVendor] = useState(itemToEdit?.vendor || '');
    const [isVendorDropdownOpen, setIsVendorDropdownOpen] = useState(false);
    const vendorOptions = getVendorOptions();

    useEffect(() => {
        setDate(itemToEdit.date);
        setVendor(itemToEdit.vendor || '');
    }, [itemToEdit]);

    const { data: categories = [] } = useGetIngredientCategories();

    const getDateRange = (startDate = null, endDate = null) => {
        const formattedStartDate = startDate ? dayjs(startDate).format(DATE_FORMAT) : startDate;
        const formattedEndDate = endDate ? dayjs(endDate).format(DATE_FORMAT) : endDate;
        const formattedDates = [formattedStartDate, formattedEndDate];
        const invalid = getValidDateRangeError(formattedDates);

        if (formattedDates[0] && formattedDates[1] && invalid) {
            // reverse the dates if the range is invalid
            formattedDates.reverse();
        }

        return formattedDates;
    }

    const { getRecipe } = useRecipeType();

    return (
        <div className="edit-ingredient-modal">
            <ModalContent>
                <div className="top-container">
                    <ModalHeader
                        handleClose={closeEditIngredientModal}
                        title="Update Ingredient"
                    />
                    <ModalBody>
                        <input className="edit-ingredient-input" placeholder="Ingredient Name" value={itemToEdit?.name} onChange={(e) => setItemToEdit({ ...itemToEdit, name: e.target.value })} />
                        <RecipeDropdownInput
                            isDropdownOpen={isCategoryDropdownOpen}
                            handleDropdownToggle={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
                            handleDropdownSelection={(option, event) => {
                                event.stopPropagation();
                                setItemToEdit(prev => ({ ...prev, category: option }));
                                setIsCategoryDropdownOpen(false);
                            }}
                            label={itemToEdit.category}
                            options={categories}
                        />
                        <input className="edit-recipe-name-input" placeholder="(Optional) Add what this is needed for..." value={itemToEdit?.recipeName} onChange={(e) => setItemToEdit({ ...itemToEdit, recipeName: e.target.value })} />
                        <RecipeDateInput
                            date={date}
                            handleChange={(value) => {
                                const formattedDate = dayjs(value).format(DATE_FORMAT);
                                setDate(formattedDate);
                                setItemToEdit(prev => ({ ...prev, date: formattedDate }));
                                setIsCalendarOpen(false);
                            }}
                            handleClick={() => {
                                setIsStartMealPlanningCalendarOpen(false);
                                setIsEndMealPlanningCalendarOpen(false);
                                setIsCalendarOpen(!isCalendarOpen)
                            }}
                            handleDelete={() => {
                                setDate('');
                                setItemToEdit(prev => ({ ...prev, date: '' }));
                            }}
                            hasDate={!!date}
                            initialDate={new Date(mealPlanningDateRange?.[0] || mealPlanningDateRange?.[1] || date || today)}
                            isCalendarOpen={isCalendarOpen}
                            label={date ? dayjs(date).format(READABLE_SHORT_DATE) : '(Optional) Need by date...'}
                        />
                        <div className="edit-recipe-date-range-container">
                            <RecipeDateInput
                                date={mealPlanningDateRange?.[0]}
                                handleChange={(value) => {
                                    setMealPlanningDateRange(prev => getDateRange(value, prev?.[1]));
                                    setItemToEdit(prev => ({
                                        ...prev,
                                        mealPlanningDateRange: getDateRange(value, prev?.mealPlanningDateRange?.[1])
                                    }));
                                    setIsStartMealPlanningCalendarOpen(false);
                                }}
                                handleClick={() => {
                                    setIsCalendarOpen(false);
                                    setIsEndMealPlanningCalendarOpen(false);
                                    setIsStartMealPlanningCalendarOpen(!isStartMealPlanningCalendarOpen);
                                }}
                                handleDelete={() => {
                                    setMealPlanningDateRange(prev => getDateRange(null, prev?.[1]));
                                    setItemToEdit(prev => ({
                                        ...prev,
                                        mealPlanningDateRange: getDateRange(null, prev?.mealPlanningDateRange?.[1])
                                    }));
                                }}
                                hasDate={!!mealPlanningDateRange?.[0]}
                                initialDate={new Date(mealPlanningDateRange?.[0] || mealPlanningDateRange?.[1] || date || today)}
                                isCalendarOpen={isStartMealPlanningCalendarOpen}
                                label={mealPlanningDateRange?.[0] ?
                                    dayjs(mealPlanningDateRange[0]).format(READABLE_SHORT_DATE) :
                                    'Starting range...'}
                            />
                            <RecipeDateInput
                                date={mealPlanningDateRange?.[1]}
                                handleChange={(value) => {
                                    setMealPlanningDateRange(prev => getDateRange(prev?.[0], value));
                                    setItemToEdit(prev => ({ ...prev, mealPlanningDateRange: getDateRange(prev?.mealPlanningDateRange?.[0], value) }));
                                    setIsEndMealPlanningCalendarOpen(false);
                                }}
                                handleClick={() => {
                                    setIsCalendarOpen(false);
                                    setIsStartMealPlanningCalendarOpen(false);
                                    setIsEndMealPlanningCalendarOpen(!isEndMealPlanningCalendarOpen);
                                }}
                                handleDelete={() => {
                                    setMealPlanningDateRange(prev => getDateRange(prev?.[0], null));
                                    setItemToEdit(prev => ({
                                        ...prev,
                                        mealPlanningDateRange: getDateRange(prev?.mealPlanningDateRange?.[0], null)
                                    }));
                                }}
                                hasDate={!!mealPlanningDateRange?.[1]}
                                initialDate={new Date(mealPlanningDateRange?.[1] || mealPlanningDateRange?.[0] || date || today)}
                                isCalendarOpen={isEndMealPlanningCalendarOpen}
                                label={mealPlanningDateRange?.[1] ?
                                    dayjs(mealPlanningDateRange[1]).format(READABLE_SHORT_DATE) :
                                    'Ending range...'}
                            />
                        </div>
                        <RecipeDropdownInput
                            isDropdownOpen={isVendorDropdownOpen}
                            handleDropdownToggle={() => setIsVendorDropdownOpen(!isVendorDropdownOpen)}
                            handleDropdownSelection={(option, e) => {
                                e.stopPropagation();
                                setItemToEdit(prev => ({ ...prev, vendor: option }));
                                setIsVendorDropdownOpen(false);
                            }}
                            label={vendor || 'Vendor (Optional)'}
                            options={vendorOptions}
                        />
                    </ModalBody>
                </div>
                <ModalFooter
                    actionLabel={'Save'}
                    handleAction={async () => {
                        const finalItemToEdit = { ...itemToEdit };
                        if (finalItemToEdit?.mealPlanningDateRange?.[0] && !finalItemToEdit?.mealPlanningDateRange?.[1]) {
                            finalItemToEdit.mealPlanningDateRange = [finalItemToEdit.mealPlanningDateRange[0], finalItemToEdit.mealPlanningDateRange[0]];
                        } else if (!finalItemToEdit?.mealPlanningDateRange?.[0] && finalItemToEdit?.mealPlanningDateRange?.[1]) {
                            finalItemToEdit.mealPlanningDateRange = [finalItemToEdit.mealPlanningDateRange[1], finalItemToEdit.mealPlanningDateRange[1]];
                        }

                        updateItem(originalItemToEdit, finalItemToEdit);

                        // update the meal plan date range if it already exists
                        const originalStartMealPlanningDate = originalItemToEdit?.mealPlanningDateRange?.[0];
                        const originalEndMealPlanningDate = originalItemToEdit?.mealPlanningDateRange?.[1];
                        const newStartMealPlanningDate = finalItemToEdit?.mealPlanningDateRange?.[0];
                        const newEndMealPlanningDate = finalItemToEdit?.mealPlanningDateRange?.[1];
                        const originalDate = originalItemToEdit.date;
                        const newDate = finalItemToEdit.date;
                        const originalRecipeName = originalItemToEdit.recipeName;
                        const newRecipeName = finalItemToEdit.recipeName;
                        const originalCategory = originalItemToEdit.category;
                        const newCategory = finalItemToEdit.category;

                        if (
                            originalStartMealPlanningDate !== newStartMealPlanningDate ||
                            originalEndMealPlanningDate !== newEndMealPlanningDate ||
                            originalDate !== newDate ||
                            originalRecipeName !== newRecipeName ||
                            originalCategory !== newCategory
                        ) {
                            const updatedMealPlan = {
                                ...originalItemToEdit,
                                name: finalItemToEdit.name,
                                category: finalItemToEdit.category,
                                mealPlanningDateRange: finalItemToEdit.mealPlanningDateRange,
                                date: finalItemToEdit.date,
                                recipeName: finalItemToEdit.recipeName,
                            };
                            // update the mealPlanningDateRange, recipeName, and date
                            updateMealPlan(originalItemToEdit, updatedMealPlan);
                        }

                        const recipe = await getRecipe(finalItemToEdit.recipeName);

                        // add the mealPlanningDateRange if it doesn't exist
                        addMealPlan({
                            id: generateUUID(),
                            check: false,
                            date: finalItemToEdit.date,
                            mealPlanningDateRange: finalItemToEdit.mealPlanningDateRange,
                            recipeName: finalItemToEdit.recipeName,
                            type: recipe?.category?.[0] ?? 'Dinner' // TODO: should look up the type based on the recipeName?
                        }, originalItemToEdit);

                        const onlyItemNameChanged = originalItemToEdit.name !== finalItemToEdit.name &&
                            originalItemToEdit.category === finalItemToEdit.category &&
                            originalItemToEdit.recipeName === finalItemToEdit.recipeName &&
                            originalItemToEdit.date === finalItemToEdit.date &&
                            originalItemToEdit?.mealPlanningDateRange?.[0] === finalItemToEdit?.mealPlanningDateRange?.[0] &&
                            originalItemToEdit?.mealPlanningDateRange?.[1] === finalItemToEdit?.mealPlanningDateRange?.[1];

                        // update the shared ingredients if other details other than name changed
                        if (!onlyItemNameChanged) {
                            // update the shared ingredients mealPlanningDateRange, recipeName, and date
                            updateSharedIngredients(originalItemToEdit, finalItemToEdit);
                        }

                        closeEditIngredientModal();
                    }}
                    handleCancel={closeEditIngredientModal}
                    disabled={(
                        originalItemToEdit.vendor === itemToEdit.vendor &&
                        originalItemToEdit.name === itemToEdit.name &&
                        originalItemToEdit.category === itemToEdit.category &&
                        originalItemToEdit.recipeName === itemToEdit.recipeName &&
                        originalItemToEdit.date === itemToEdit.date &&
                        originalItemToEdit?.mealPlanningDateRange?.[0] === itemToEdit?.mealPlanningDateRange?.[0] &&
                        originalItemToEdit?.mealPlanningDateRange?.[1] === itemToEdit?.mealPlanningDateRange?.[1]
                    ) || !itemToEdit.name}
                />
            </ModalContent>
        </div>
    )
}
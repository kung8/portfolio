import { useMemo } from 'react';

import dayjs from 'dayjs';

import { DATE_FORMAT, MEAL_PLAN_MEAL_TYPES, READABLE_SHORT_DATE, READABLE_SHORT_DATE_WITH_DAY_OF_WEEK, READABLE_SHORT_DATE_WITH_YEAR } from '../constants';
import { MealItem } from './MealItem';
import { SortBy } from './SortBy';
import { MEAL_PLAN_SORT_BY_DAILY, MEAL_PLAN_SORT_BY_WEEKLY, mealPlanSortByOptions } from '../utils';

export const MealPlanningModalContent = ({
    generateUUID,
    mealPlan,
    setMealPlan,
    setSortBy,
    sortBy,
    setIsDeleteMealPlanModalOpen,
    setIsEditMealPlanModalOpen,
    setOriginalMealToEdit,
    setMealToEdit,
    setDeleteType,
    startingDay,
    updateMeal,
    updateLocalStorage,
}) => {
    const getDays = () => {
        // get only a month out
        const days = [];
        for (let i = 0; i < 30; i++) {
            days.push(dayjs().add(i, 'day').format(DATE_FORMAT));
        }
        return days;
    }

    const dayMap = {
        sunday: 0,
        monday: 1,
        tuesday: 2,
        wednesday: 3,
        thursday: 4,
        friday: 5,
        saturday: 6,
    }

    const getWeeks = () => {
        // gets 12 weeks out
        const weeks = [];
        const closestDay = dayjs().startOf('week').add(dayMap[startingDay], 'day').format(DATE_FORMAT);

        // check to see if we are missing any weeks (i.e. today until the upcoming week's starting day).
        const today = dayjs().startOf('day');
        const startDate = dayjs().startOf('week').add(dayMap[startingDay], 'day');
        const excludesToday = today.isBefore(startDate);
        const actualStartDay = excludesToday ? dayjs(closestDay).subtract(1, 'week') : dayjs(closestDay);

        for (let i = 0; i < 13; i++) {
            weeks.push([
                dayjs(actualStartDay).add(i, 'week').format(DATE_FORMAT),
                dayjs(actualStartDay).add(i, 'week').add(6, 'day').format(DATE_FORMAT)
            ]);
        }
        return weeks;
    }

    const getMonths = () => {
        // get 6 months out
        const months = [];
        const closestFirstOfMonth = dayjs().startOf('month').format(DATE_FORMAT);
        for (let i = 0; i < 7; i++) {
            months.push([
                dayjs(closestFirstOfMonth).add(i, 'month').format(DATE_FORMAT),
                dayjs(closestFirstOfMonth).add(i, 'month').endOf('month').format(DATE_FORMAT)
            ]);
        }
        return months;
    }

    const dates = sortBy === MEAL_PLAN_SORT_BY_DAILY ? getDays() : sortBy === MEAL_PLAN_SORT_BY_WEEKLY ? getWeeks() : getMonths();

    const createRange = (start, end) => {
        let range = [];
        for (let i = start; i <= end; i.add(1, 'day')) {
            range.push(i);
            i = i.add(1, 'day');
        }
        return range;
    }

    const data = useMemo(() => {
        return sortBy === MEAL_PLAN_SORT_BY_DAILY ? mealPlan.reduce((acc, item) => {
            const mealPlanningDateRange = item.mealPlanningDateRange ?? [];

            if (mealPlanningDateRange.length > 0) {
                let startingDate = dayjs(mealPlanningDateRange[0]);
                let endingDate = dayjs(mealPlanningDateRange[1]);
                const datesWithinRange = createRange(startingDate, endingDate);

                datesWithinRange.forEach(d => {
                    const formattedKey = d.format(DATE_FORMAT);
                    if (!acc[formattedKey]) {
                        acc[formattedKey] = [];
                    }
                    acc[formattedKey].push(item);
                });
            }

            if (mealPlanningDateRange.length === 0) {
                if (!acc[item.date]) {
                    acc[item.date] = [];
                }
                acc[item.date].push(item);
            }
            return acc;
        }, {}) : undefined;
        // eslint-disable-next-line
    }, [mealPlan.map(item => item.recipeName + item.date + item.mealPlanningDateRange + item.type + item.checked).join(','), sortBy, startingDay]);

    const groupedData = useMemo(() => {
        return sortBy !== MEAL_PLAN_SORT_BY_DAILY ? mealPlan.reduce((acc, item) => {
            const foundRange = dates.filter(date => {
                const mealPlanningDateRange = item.mealPlanningDateRange ?? [];

                if (mealPlanningDateRange.length > 0) {
                    let startingDate = dayjs(mealPlanningDateRange[0]);
                    let endingDate = dayjs(mealPlanningDateRange[1]);
                    const includedDateRange = createRange(startingDate, endingDate);

                    return includedDateRange.find(d => {
                        const isBefore = dayjs(d).isAfter(date[0]) || dayjs(d).isSame(date[0]);
                        const isAfter = dayjs(date[1]).isAfter(dayjs(d)) || dayjs(date[1]).isSame(dayjs(d));
                        return isBefore && isAfter;
                    });
                }

                if (mealPlanningDateRange.length === 0) {
                    const isBefore = dayjs(item.date).isAfter(date[0]) || dayjs(item.date).isSame(date[0]);
                    const isAfter = dayjs(date[1]).isAfter(dayjs(item.date)) || dayjs(date[1]).isSame(dayjs(item.date));
                    return isBefore && isAfter;
                }
                return false;
            });

            if (foundRange.length > 0) {
                foundRange.forEach(d => {
                    const formattedRange = d.join(' - ');
                    acc[formattedRange] = [...(acc[formattedRange] ?? []), item];
                })
                return acc;
            }
            return acc;
        }, {}) : undefined;
        // eslint-disable-next-line
    }, [mealPlan.map(item => item.recipeName + item.date + item.mealPlanningDateRange + item.type + item.checked).join(','), sortBy, startingDay])

    const displayedData = data ?? groupedData;

    const removeMenuItem = (id) => {
        const newMealPlan = mealPlan.filter(item => item.id !== id);
        setMealPlan(newMealPlan);
        updateLocalStorage({ mealPlan: newMealPlan });
    }

    const openDeleteModal = (type) => {
        setIsDeleteMealPlanModalOpen(true);
        setDeleteType(type);
    }

    const getDateByRelativity = (date) => {
        const today = dayjs().format(DATE_FORMAT);
        const tomorrow = dayjs(today).add(1, 'day').format(DATE_FORMAT);
        const withinWeek = dayjs(today).isBefore(date) && dayjs(today).add(1, 'week').isAfter(date);
        const exactlyOneWeek = dayjs(today).add(1, 'week').isSame(date);

        if (date === today) return 'Today (' + dayjs(date).format(READABLE_SHORT_DATE) + ')';
        if (date === tomorrow) return 'Tomorrow (' + dayjs(date).format(READABLE_SHORT_DATE) + ')';
        if (withinWeek) return 'This ' + dayjs(date).format(READABLE_SHORT_DATE_WITH_DAY_OF_WEEK);
        if (exactlyOneWeek) return 'Next ' + dayjs(date).format(READABLE_SHORT_DATE_WITH_DAY_OF_WEEK);
        return dayjs(date).format(READABLE_SHORT_DATE_WITH_DAY_OF_WEEK);
    }

    return (
        <>
            <div className="meal-planning">
                {dates.map((date, dateIndex) => Array.isArray(date) ? (
                    <div key={dateIndex} className="meal-plan-container">
                        <div className="meal-plan-header">
                            <span className="meal-plan-date">{dayjs(date[0]).format(READABLE_SHORT_DATE_WITH_YEAR)} - {dayjs(date[1]).format(READABLE_SHORT_DATE_WITH_YEAR)}</span>
                        </div>
                        {!!displayedData[date.join(' - ')]?.length && (<ul className="meals-container">
                            {displayedData[date.join(' - ')].sort((a, b) => {
                                const order = ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Snack'];
                                const startingDateRangeA = a?.mealPlanningDateRange?.[0] ?? a.date;
                                const startingDateRangeB = b?.mealPlanningDateRange?.[0] ?? b.date;

                                if (startingDateRangeA < startingDateRangeB) return -1;
                                if (startingDateRangeA > startingDateRangeB) return 1;

                                // this is the same date, so sort by types
                                if (order.indexOf(a.type) < order.indexOf(b.type)) return -1;
                                if (order.indexOf(a.type) > order.indexOf(b.type)) return 1;
                                return 0;
                            })?.map((item) => {
                                const id = item.id ?? generateUUID();
                                return (
                                    <MealItem
                                        key={id}
                                        item={{ ...item, id }}
                                        onCheckboxChange={() => updateMeal(item, { checked: !item.checked })}
                                        onEditClick={() => {
                                            setIsEditMealPlanModalOpen(true);
                                            setOriginalMealToEdit(item);
                                            setMealToEdit(item);
                                        }}
                                        onEmptyInputChange={() => removeMenuItem(id)}
                                        onInputChange={(value) => updateMeal({ ...item, id }, { recipeName: value })}
                                        showDate
                                        showType
                                    />
                                )
                            })}
                        </ul>)}
                        <span
                            className="add-meal-item-btn"
                            onClick={() => {
                                setIsEditMealPlanModalOpen(true);
                                setOriginalMealToEdit(null);
                                setMealToEdit({ id: generateUUID(), date: date[1], type: 'Breakfast' });
                            }}
                        >
                            Add
                        </span>
                    </div>
                ) : (
                    <div key={dateIndex} className="meal-plan-container">
                        <div className="meal-plan-header">
                            <span className="meal-plan-date">
                                {getDateByRelativity(date)}
                            </span>
                        </div>
                        <div className="meals-for-day-container">
                            {MEAL_PLAN_MEAL_TYPES.map((type) =>
                                <div key={type} className="meal-type-container">
                                    <h6 className="meal-type-header">{type}</h6>
                                    {!!displayedData[date]?.filter(item => item.type === type)?.length && (
                                        <ul className="meals-container">
                                            {(displayedData[date].filter(item => item.type === type) ?? [])?.map((item) =>
                                                <MealItem
                                                    key={item.id}
                                                    item={item}
                                                    onCheckboxChange={() => updateMeal(item, { checked: !item.checked })}
                                                    onEditClick={() => {
                                                        setIsEditMealPlanModalOpen(true);
                                                        setOriginalMealToEdit(item);
                                                        setMealToEdit(item);
                                                    }}
                                                    onEmptyInputChange={() => removeMenuItem(item.id)}
                                                    onInputChange={(value) => updateMeal(item, { recipeName: value })}
                                                />
                                            )}
                                        </ul>
                                    )}
                                    <span
                                        className="add-meal-item-btn"
                                        onClick={() => {
                                            setIsEditMealPlanModalOpen(true);
                                            setOriginalMealToEdit(null);
                                            setMealToEdit({ date, type });
                                        }}
                                    >
                                        Add
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <div className="modal-footer">
                <div className="delete-buttons-container">
                    <span onClick={mealPlan.filter(item => item.checked).length > 0 ? () => openDeleteModal('checked') : undefined} className={mealPlan.filter(item => item.checked).length > 0 ? 'has-values' : ''}>Delete Checked</span>
                    <span onClick={mealPlan.length > 0 ? () => openDeleteModal('all') : undefined} className={mealPlan.length > 0 ? 'has-values' : ''}>Delete All</span>
                </div>
                <SortBy
                    options={mealPlanSortByOptions}
                    setSortBy={setSortBy}
                    sortBy={sortBy}
                />
            </div>
        </>
    )
}
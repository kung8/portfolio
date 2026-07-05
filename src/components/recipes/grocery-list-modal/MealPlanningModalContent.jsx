import { useMemo } from 'react';

import dayjs from 'dayjs';

import { DATE_FORMAT, MEAL_PLAN_MEAL_TYPES, READABLE_SHORT_DATE, READABLE_SHORT_DATE_WITH_DAY_OF_WEEK, READABLE_SHORT_DATE_WITH_YEAR } from '../constants';
import { MealItem } from './MealItem';
import { SortBy } from './SortBy';
import { MEAL_PLAN_SORT_BY_DAILY, MEAL_PLAN_SORT_BY_WEEKLY, mealPlanSortByOptions } from '../utils';

export const MealPlanningModalContent = ({
    generateUUID,
    handleClose,
    mealPlan,
    setMealPlan,
    setSortBy,
    sortBy,
    setIsDeleteMealPlanModalOpen,
    setIsEditMealPlanModalOpen,
    setOriginalMealToEdit,
    setMealToEdit,
    setDeleteType,
    showAllPlanningDateRanges,
    startingDay,
    updateMeal,
    updateLocalStorage,
}) => {
    const dayMap = {
        sunday: 0,
        monday: 1,
        tuesday: 2,
        wednesday: 3,
        thursday: 4,
        friday: 5,
        saturday: 6,
    }

    const getWeekStart = (date) => {
        const candidateStart = dayjs(date).startOf('week').add(dayMap[startingDay], 'day');
        return dayjs(date).isBefore(candidateStart) ? candidateStart.subtract(1, 'week') : candidateStart;
    }

    const getDateBounds = () => {
        const relevantDates = mealPlan.reduce((dates, item) => {
            if (item?.mealPlanningDateRange?.[0]) {
                dates.push(dayjs(item.mealPlanningDateRange[0]));
            }
            if (item?.mealPlanningDateRange?.[1]) {
                dates.push(dayjs(item.mealPlanningDateRange[1]));
            }
            if (item?.date) {
                dates.push(dayjs(item.date));
            }
            return dates;
        }, []).filter(date => date.isValid());

        if (relevantDates.length === 0) {
            return null;
        }

        return relevantDates.reduce((acc, date) => ({
            earliest: date.isBefore(acc.earliest) ? date.startOf('day') : acc.earliest,
            latest: date.isAfter(acc.latest) ? date.startOf('day') : acc.latest,
        }), {
            earliest: relevantDates[0].startOf('day'),
            latest: relevantDates[0].startOf('day'),
        });
    }

    const getDays = () => {
        const defaultStart = dayjs().startOf('day');
        const defaultEnd = defaultStart.add(29, 'day');
        const dateBounds = showAllPlanningDateRanges ? getDateBounds() : null;
        const startDate = dateBounds?.earliest?.isBefore(defaultStart) ? dateBounds.earliest : defaultStart;
        const endDate = dateBounds?.latest?.isAfter(defaultEnd) ? dateBounds.latest : defaultEnd;
        const days = [];

        for (let date = startDate; date.isBefore(endDate) || date.isSame(endDate, 'day'); date = date.add(1, 'day')) {
            days.push(date.format(DATE_FORMAT));
        }

        return days;
    }

    const getWeeks = () => {
        const weeks = [];
        const defaultStart = getWeekStart(dayjs().startOf('day'));
        const defaultEnd = defaultStart.add(12, 'week').add(6, 'day');
        const dateBounds = showAllPlanningDateRanges ? getDateBounds() : null;
        const startDate = dateBounds?.earliest?.isBefore(defaultStart) ? getWeekStart(dateBounds.earliest) : defaultStart;
        const endDate = dateBounds?.latest?.isAfter(defaultEnd) ? dateBounds.latest : defaultEnd;

        for (let date = startDate; date.isBefore(endDate) || date.isSame(endDate, 'day'); date = date.add(1, 'week')) {
            weeks.push([
                date.format(DATE_FORMAT),
                date.add(6, 'day').format(DATE_FORMAT)
            ]);
        }

        return weeks;
    }

    const getMonths = () => {
        const months = [];
        const defaultStart = dayjs().startOf('month');
        const defaultEnd = defaultStart.add(6, 'month').endOf('month');
        const dateBounds = showAllPlanningDateRanges ? getDateBounds() : null;
        const startDate = dateBounds?.earliest?.isBefore(defaultStart) ? dateBounds.earliest.startOf('month') : defaultStart;
        const endDate = dateBounds?.latest?.isAfter(defaultEnd) ? dateBounds.latest.endOf('month') : defaultEnd;

        for (let date = startDate; date.isBefore(endDate) || date.isSame(endDate, 'month'); date = date.add(1, 'month')) {
            months.push([
                date.format(DATE_FORMAT),
                date.endOf('month').format(DATE_FORMAT)
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
                                        handleClose={handleClose}
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
                                                    handleClose={handleClose}
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
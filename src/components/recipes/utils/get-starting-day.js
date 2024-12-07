import { STARTING_DAY_OF_WEEK_LOCAL_STORAGE_KEY } from "../constants";

export const getStartingDay = () => {
    const startingDay = localStorage.getItem(STARTING_DAY_OF_WEEK_LOCAL_STORAGE_KEY);
    if (startingDay) return startingDay;
    return 'sunday';
}
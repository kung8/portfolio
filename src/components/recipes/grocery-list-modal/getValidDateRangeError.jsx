import dayjs from 'dayjs';

export const getValidDateRangeError = (dateRange) => {
    const startDate = dayjs(dateRange[0]);
    const endDate = dayjs(dateRange[1]);
    if (!startDate || !endDate) {
        return '';
    }

    if (startDate && endDate && startDate.isAfter(endDate)) {
        return 'Start date must be before end date';
    }

    return '';
}
import { getRecipeFontSizeClass } from '../utils';
import { useRecipeContext } from './RecipeContext';

const parseRecipeDate = (dateString) => {
    if (!dateString || typeof dateString !== 'string') {
        return null;
    }

    // Canonical recipe timestamp format: YYYY-MM-DD HH:MM:SS
    const fullYearMatch = dateString.match(/^(\d{4})-(\d{2})-(\d{2})\s(\d{2}):(\d{2}):(\d{2})$/);
    if (fullYearMatch) {
        const [, year, month, day, hour, minute, second] = fullYearMatch;
        const date = new Date(Number(year), Number(month) - 1, Number(day), Number(hour), Number(minute), Number(second));
        return Number.isNaN(date.getTime()) ? null : date;
    }

    return null;
};

const formatDate = (dateString) => {
    const date = parseRecipeDate(dateString);
    if (!date) {
        return null;
    }

    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    }).format(date);
};

const getDatePart = (dateString) => {
    const date = parseRecipeDate(dateString);
    if (!date) {
        return null;
    }

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

export const ModifiedAtOrCreatedAtDate = () => {
    const { item } = useRecipeContext();
    const createdDatePart = getDatePart(item?.createdAt);
    const modifiedDatePart = getDatePart(item?.modifiedAt);
    const isSameDay = !!createdDatePart && createdDatePart === modifiedDatePart;

    const labelAndDate = item?.createdAt && (isSameDay || !item?.modifiedAt)
        ? { label: 'Created', value: item.createdAt }
        : item?.modifiedAt
            ? { label: 'Last Updated', value: item.modifiedAt }
            : null;

    const formattedDate = labelAndDate?.value ? formatDate(labelAndDate.value) : null;

    if (!formattedDate) return null;

    return (
        <div className="recipe-modified-at-container">
            <span className={`recipe-modified-at-label ${getRecipeFontSizeClass()}`}>
                {labelAndDate?.label} <time dateTime={labelAndDate?.value}>{formattedDate}</time>
            </span>
        </div>
    )
}
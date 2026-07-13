import { getRecipeFontSizeClass } from '../utils';
import { useRecipeContext } from './RecipeContext';

const formatDate = (dateString) => {
	const date = new Date(dateString);
	if (Number.isNaN(date.getTime())) {
		return null;
	}

	return new Intl.DateTimeFormat('en-US', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	}).format(date);
};

const getDatePart = (dateString) => {
	if (!dateString || typeof dateString !== 'string') {
		return null;
	}

	const isoMatch = dateString.match(/^\d{4}-\d{2}-\d{2}/);
	return isoMatch ? isoMatch[0] : null;
};

export const UpdatedAtOrCreatedAtDate = () => {
	const { item } = useRecipeContext();
	const createdDatePart = getDatePart(item?.createdAt);
	const updatedDatePart = getDatePart(item?.updatedAt);
	const isSameDay = !!createdDatePart && createdDatePart === updatedDatePart;

	const labelAndDate = item?.createdAt && (isSameDay || !item?.updatedAt)
		? { label: 'Created:', value: item.createdAt }
		: item?.updatedAt
			? { label: 'Last Updated:', value: item.updatedAt }
			: null;

	const formattedDate = labelAndDate?.value ? formatDate(labelAndDate.value) : null;

	if (!formattedDate) return null;

	return (
		<div className="recipe-updated-at-container">
			<span className={`recipe-updated-at-label ${getRecipeFontSizeClass()}`}>
				{labelAndDate?.label} <time dateTime={labelAndDate?.value}>{formattedDate}</time>
			</span>
		</div>
	)
}

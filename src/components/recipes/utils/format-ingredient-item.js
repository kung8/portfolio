import { convertDecimalToFraction } from "./convert-decimal-to-fraction";
import { checkIsPlural, formatYieldUnit } from "./format-yield";

const formatUnitlessPluralIngredientName = ({ name, plural: pluralName }) => {
    const nameNotEndWithS = name[name.length - 1] !== 's';
    return pluralName ? pluralName : (nameNotEndWithS ? name + 's' : name);
}

export const formatIngredientItem = (item, includeDetails) => {
    const amount = item.amount ? convertDecimalToFraction(item.amount) + ' ' : '';
    const isPlural = checkIsPlural(amount);
    const unit = item.unit ? formatYieldUnit(amount, item.unit) + ' ' : '';

    // if the unit doesn't exist and is a plural, determine which name to use
    // else use the name from the item
    const unitlessPlural = !unit && isPlural;
    const name = unitlessPlural ? formatUnitlessPluralIngredientName(item) : item.name;

    const additionalDetails = includeDetails ? (item.additionalDetails ? ', ' + item.additionalDetails : '') : '';

    // if the unit is "small", "medium", or "large", we need to check if it is plural and then pluralize the name
    if (unit.trim() === 'small' || unit.trim() === 'medium' || unit.trim() === 'large') {
        return amount + unit + name + additionalDetails;
    }

    return amount + unit + name + additionalDetails;
}
import { convertDecimalToFraction } from "./convert-decimal-to-fraction";

export const formatIngredientItem = (item) => {
    const amount = item.amount ? convertDecimalToFraction(item.amount) + ' ' : '';
    const isPlural = item.amount > 1;
    const referencedUnit = isPlural ? item.unit?.p + ' ' : item.unit?.s + ' ';
    const unit = item.unit ? referencedUnit : '';
    const name = !unit && isPlural && item.name[item.name.length - 1] !== 's' ? item.name + 's' : item.name;
    return amount + unit + name;
}
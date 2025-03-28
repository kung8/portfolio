import { convertDecimalToFraction } from "./convert-decimal-to-fraction";

export const formatIngredientItem = (item) => {
    const amount = item.amount ? convertDecimalToFraction(item.amount) + ' ' : '';
    const isPlural = item.amount > 1;
    const referencedUnit = isPlural ? item.unit?.p + ' ' : item.unit?.s + ' ';
    const unit = item.unit ? referencedUnit : '';
    
    // if the unit doesn't exist, we need to check if the is plural and determine which name to use
    const unitlessPlural = !unit && isPlural;
    const pluralName = item.plural;
    const nameNotEndWithS = item.name[item.name.length - 1] !== 's';
    const name = unitlessPlural ? (
        pluralName ? pluralName : (nameNotEndWithS ? item.name + 's' : item.name)
    ) : item.name;
    return amount + unit + name;
}
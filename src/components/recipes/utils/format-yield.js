import { convertDecimalToFraction } from "./convert-decimal-to-fraction";

export const checkIsPlural = (amount) => amount > 1;
export const formatYieldAmount = (amount) => convertDecimalToFraction(amount);
export const formatYieldUnit = (amount, unit) => {
    // use pluralize unit if amount is greater than 1
    return checkIsPlural(amount) ? unit.p : unit.s;
}
export const formatYield = ({ amount, unit }) =>
    formatYieldAmount(amount) + ' ' + formatYieldUnit(amount, unit);

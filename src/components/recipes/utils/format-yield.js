import { convertDecimalToFraction } from "./convert-decimal-to-fraction";

export const formatYieldAmount = (amount) => convertDecimalToFraction(amount);
export const formatYieldUnit = (amount, unit) => {
    // use pluralize unit if amount is greater than 1
    if (amount > 1) return unit.p;
    return unit.s;
}
export const formatYield = ({ amount, unit }) =>
    formatYieldAmount(amount) + ' ' + formatYieldUnit(amount, unit);

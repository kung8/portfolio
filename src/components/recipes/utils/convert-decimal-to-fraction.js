export const convertDecimalToFraction = (value, donly = true) => {
    const originalValue = value;
    var tolerance = 1.0E-6; // from how many decimals the number is rounded
    var numerator = 1;
    var h2 = 0;
    var denominator = 0;
    var k2 = 1;
    var negative = false;
    var wholeInteger;

    if (parseInt(value) === value) { // if value is an integer, stop the script
        return value;
    } else if (value < 0) {
        negative = true;
        value = -value;
    }

    if (donly) {
        wholeInteger = parseInt(value);
        value -= wholeInteger;
    }

    var b = value;

    do {
        var a = Math.floor(b);
        var aux = numerator;
        numerator = a * numerator + h2;
        h2 = aux;
        aux = denominator;
        denominator = a * denominator + k2;
        k2 = aux;
        b = 1 / (b - a);
    } while (Math.abs(value - numerator / denominator) > value * tolerance);

    // if the denominator larger than 16, just return the decimal value fixed to 2 decimal places
    if (denominator > 16) return originalValue.toFixed(2);
    return (negative ? "-" : '') + ((donly & (wholeInteger !== 0)) ? wholeInteger + ' ' : '') + (numerator === 0 ? '' : numerator + "/" + denominator);
}
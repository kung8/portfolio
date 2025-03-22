export const convertDecimalToFraction = (value, donly = true) => {
    var tolerance = 1.0E-6; // from how many decimals the number is rounded
    var h1 = 1;
    var h2 = 0;
    var k1 = 0;
    var k2 = 1;
    var negative = false;
    var i;

    if (parseInt(value) === value) { // if value is an integer, stop the script
        return value;
    } else if (value < 0) {
        negative = true;
        value = -value;
    }

    if (donly) {
        i = parseInt(value);
        value -= i;
    }

    var b = value;

    do {
        var a = Math.floor(b);
        var aux = h1;
        h1 = a * h1 + h2;
        h2 = aux;
        aux = k1;
        k1 = a * k1 + k2;
        k2 = aux;
        b = 1 / (b - a);
    } while (Math.abs(value - h1 / k1) > value * tolerance);

    return (negative ? "-" : '') + ((donly & (i !== 0)) ? i + ' ' : '') + (h1 === 0 ? '' : h1 + "/" + k1);
}
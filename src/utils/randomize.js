export const randomize = (arr, returnedNum = arr.length) => {
    for (var i = 0; i < arr.length; i++) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    return arr.slice(0, returnedNum);
}
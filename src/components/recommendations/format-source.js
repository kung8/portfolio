export const formatSource = (source) => {
    if (Array.isArray(source)) {
        return source.reduce((acc, item, index, arr) => {
            // if there's only one source
            if (index === 0 && arr.length - 1 === index) return item;
            // if it's the last source: "and"
            if (arr.length - 1 === index) return `${acc} and ${item}`;
            // if it's the first source
            if (index === 0) return item;
            // if it's not the first or last source
            return `${acc}, ${item}`;
        }, '');
    }
}
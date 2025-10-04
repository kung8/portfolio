export const getMenuFilterItems = (obj) => Object.entries(obj).map(([key, { img, name }]) => ({ img, itemType: key, name }));

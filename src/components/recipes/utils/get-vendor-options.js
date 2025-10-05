const defaultVendorOptions = [
    'Walmart',
    'Costco',
    'Smith\'s',
    'WinCo',
    'Macey\'s',
    'Whole Foods',
    'Trader Joe\'s',
    'Target',
    'Ocean Mart',
    'H-Mart',
    'Giant',
    'Safeway',
    'Kroger',
    'Aldi',
    'Sam\'s Club',
    'Amazon',
];

export const getVendorOptions = () => {
    const storedVendors = localStorage.getItem('vendorOptions');
    if (storedVendors) return JSON.parse(storedVendors);
    return defaultVendorOptions;
}
const defaultVendorOptions = [
    'Walmart',
    'Costco',
    'Smith\'s',
    'WinCo',
    'Macey\'s',
    'Trader Joe\'s',
    'Target',
    'Ocean Mart',
    'Amazon',
    // 'Whole Foods',
    // 'H-Mart',
    // 'Giant',
    // 'Safeway',
    // 'Kroger',
    // 'Aldi',
    // 'Sam\'s Club',
];

export const getVendorOptions = () => {
    const storedVendors = localStorage.getItem('vendorOptions');
    if (storedVendors) return JSON.parse(storedVendors);
    return defaultVendorOptions;
}
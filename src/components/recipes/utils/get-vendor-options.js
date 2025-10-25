import { VENDOR_OPTIONS_LOCAL_STORAGE_KEY } from "../constants";

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
    const storedVendors = localStorage.getItem(VENDOR_OPTIONS_LOCAL_STORAGE_KEY);
    if (storedVendors) return JSON.parse(storedVendors);
    return defaultVendorOptions;
}
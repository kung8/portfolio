import { DEFAULT_VENDOR_LOCAL_STORAGE_KEY } from "../constants";

export const getDefaultVendor = () => {
    const storedDefaultVendor = localStorage.getItem(DEFAULT_VENDOR_LOCAL_STORAGE_KEY);
    if (storedDefaultVendor) return storedDefaultVendor;
    return '';
}
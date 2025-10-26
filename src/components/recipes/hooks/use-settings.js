import { useCallback, useState } from "react";
import { getDefaultVendor, getRecipeFontSize, getRecipePageLayout, getShowRecipeFigures, getShowRecipeNotes, getShowRecipeReheatOptions, getShowRecipeStorageOptions, getShowRecipeWebsiteReferences, getStartingDay, getVendorOptions } from "../utils";
import { DEFAULT_VENDOR_LOCAL_STORAGE_KEY, RECIPE_FONT_SIZE_LOCAL_STORAGE_KEY, SHOW_RECIPE_FIGURES_LOCAL_STORAGE_KEY, SHOW_RECIPE_NOTES_LOCAL_STORAGE_KEY, SHOW_RECIPE_PAGE_LAYOUT_LOCAL_STORAGE_KEY, SHOW_RECIPE_REHEAT_OPTIONS_LOCAL_STORAGE_KEY, SHOW_RECIPE_STORAGE_OPTIONS_LOCAL_STORAGE_KEY, SHOW_RECIPE_WEBSITE_REFERENCES_LOCAL_STORAGE_KEY, STARTING_DAY_OF_WEEK_LOCAL_STORAGE_KEY, VENDOR_OPTIONS_LOCAL_STORAGE_KEY } from "../constants";

export const useSettings = () => {
    const [defaultVendor, setDefaultVendor] = useState(getDefaultVendor());
    const [recipeFontSize, setRecipeFontSize] = useState(getRecipeFontSize());
    const [recipePageLayout, setRecipePageLayout] = useState(getRecipePageLayout());
    const [showRecipeFigures, setShowRecipeFigures] = useState(getShowRecipeFigures());
    const [showRecipeNotes, setShowRecipeNotes] = useState(getShowRecipeNotes());
    const [showRecipeReheatOptions, setShowRecipeReheatOptions] = useState(getShowRecipeReheatOptions());
    const [showRecipeStorageOptions, setShowRecipeStorageOptions] = useState(getShowRecipeStorageOptions());
    const [showRecipeWebsiteReferences, setShowRecipeWebsiteReferences] = useState(getShowRecipeWebsiteReferences());
    const [startingDay, setStartingDay] = useState(getStartingDay());
    const [vendorOptions, setVendorOptions] = useState(getVendorOptions());

    const updateDefaultVendor = useCallback((vendor) => {
        setDefaultVendor(vendor);
        localStorage.setItem(DEFAULT_VENDOR_LOCAL_STORAGE_KEY, vendor);
    }, []);
    const updateRecipeFontSize = useCallback((size) => {
        setRecipeFontSize(size);
        localStorage.setItem(RECIPE_FONT_SIZE_LOCAL_STORAGE_KEY, size);
    }, []);
    const updateRecipePageLayout = useCallback((layout) => {
        setRecipePageLayout(layout);
        localStorage.setItem(SHOW_RECIPE_PAGE_LAYOUT_LOCAL_STORAGE_KEY, layout);
    }, []);
    const updateShowRecipeFigures = useCallback((showImages) => {
        setShowRecipeFigures(showImages);
        localStorage.setItem(SHOW_RECIPE_FIGURES_LOCAL_STORAGE_KEY, showImages);
    }, []);
    const updateShowRecipeNotes = useCallback((showNotes) => {
        setShowRecipeNotes(showNotes);
        localStorage.setItem(SHOW_RECIPE_NOTES_LOCAL_STORAGE_KEY, showNotes);
    }, []);
    const updateShowRecipeReheatOptions = useCallback((showOptions) => {
        setShowRecipeReheatOptions(showOptions);
        localStorage.setItem(SHOW_RECIPE_REHEAT_OPTIONS_LOCAL_STORAGE_KEY, showOptions);
    }, []);
    const updateShowRecipeStorageOptions = useCallback((showOptions) => {
        setShowRecipeStorageOptions(showOptions);
        localStorage.setItem(SHOW_RECIPE_STORAGE_OPTIONS_LOCAL_STORAGE_KEY, showOptions);
    }, []);
    const updateShowRecipeWebsiteReferences = useCallback((showReferences) => {
        setShowRecipeWebsiteReferences(showReferences);
        localStorage.setItem(SHOW_RECIPE_WEBSITE_REFERENCES_LOCAL_STORAGE_KEY, showReferences);
    }, []);
    const updateStartingDay = useCallback((day) => {
        setStartingDay(day);
        localStorage.setItem(STARTING_DAY_OF_WEEK_LOCAL_STORAGE_KEY, day);
    }, []);
    const updateVendorOptions = useCallback((newVendorOptions) => {
        setVendorOptions(newVendorOptions);
        localStorage.setItem(VENDOR_OPTIONS_LOCAL_STORAGE_KEY, JSON.stringify(newVendorOptions));
    }, []);

    return {
        defaultVendor,
        recipeFontSize,
        recipePageLayout,
        showRecipeFigures,
        showRecipeNotes,
        showRecipeReheatOptions,
        showRecipeStorageOptions,
        showRecipeWebsiteReferences,
        startingDay,
        updateDefaultVendor,
        updateRecipeFontSize,
        updateRecipePageLayout,
        updateShowRecipeFigures,
        updateShowRecipeNotes,
        updateShowRecipeReheatOptions,
        updateShowRecipeStorageOptions,
        updateShowRecipeWebsiteReferences,
        updateStartingDay,
        updateVendorOptions,
        vendorOptions,
    };
}
import { useCallback, useState } from "react";
import { getDefaultVendorLocalStorageKey, getRecipeFontSizeLocalStorageKey, getRecipePageLayoutLocalStorageKey, getShowAllPlanningDateRangesLocalStorageKey, getShowRecipeFiguresLocalStorageKey, getShowRecipeNotesLocalStorageKey, getShowRecipeReheatOptionsLocalStorageKey, getShowRecipeStorageOptionsLocalStorageKey, getShowRecipeWebsiteReferencesLocalStorageKey, getStartingDayLocalStorageKey, getVendorOptionsLocalStorageKey, setDefaultVendorLocalStorageKey, setRecipeFontSizeLocalStorageKey, setRecipePageLayoutLocalStorageKey, setShowAllPlanningDateRangesLocalStorageKey, setShowRecipeFiguresLocalStorageKey, setShowRecipeNotesLocalStorageKey, setShowRecipeReheatOptionsLocalStorageKey, setShowRecipeStorageOptionsLocalStorageKey, setShowRecipeWebsiteReferencesLocalStorageKey, setStartingDayLocalStorageKey, setVendorOptionsLocalStorageKey } from "../utils";

export const useSettings = () => {
    const [defaultVendor, setDefaultVendor] = useState(getDefaultVendorLocalStorageKey());
    const [recipeFontSize, setRecipeFontSize] = useState(getRecipeFontSizeLocalStorageKey());
    const [recipePageLayout, setRecipePageLayout] = useState(getRecipePageLayoutLocalStorageKey());
    const [showRecipeFigures, setShowRecipeFigures] = useState(getShowRecipeFiguresLocalStorageKey());
    const [showRecipeNotes, setShowRecipeNotes] = useState(getShowRecipeNotesLocalStorageKey());
    const [showRecipeReheatOptions, setShowRecipeReheatOptions] = useState(getShowRecipeReheatOptionsLocalStorageKey());
    const [showRecipeStorageOptions, setShowRecipeStorageOptions] = useState(getShowRecipeStorageOptionsLocalStorageKey());
    const [showRecipeWebsiteReferences, setShowRecipeWebsiteReferences] = useState(getShowRecipeWebsiteReferencesLocalStorageKey());
    const [showAllPlanningDateRanges, setShowAllPlanningDateRanges] = useState(getShowAllPlanningDateRangesLocalStorageKey());
    const [startingDay, setStartingDay] = useState(getStartingDayLocalStorageKey());
    const [vendorOptions, setVendorOptions] = useState(getVendorOptionsLocalStorageKey());

    const updateDefaultVendor = useCallback((vendor) => {
        setDefaultVendor(vendor);
        setDefaultVendorLocalStorageKey(vendor);
    }, []);
    const updateRecipeFontSize = useCallback((size) => {
        setRecipeFontSize(size);
        setRecipeFontSizeLocalStorageKey(size);
    }, []);
    const updateRecipePageLayout = useCallback((layout) => {
        setRecipePageLayout(layout);
        setRecipePageLayoutLocalStorageKey(layout);
    }, []);
    const updateShowRecipeFigures = useCallback((showImages) => {
        setShowRecipeFigures(showImages);
        setShowRecipeFiguresLocalStorageKey(showImages);
    }, []);
    const updateShowRecipeNotes = useCallback((showNotes) => {
        setShowRecipeNotes(showNotes);
        setShowRecipeNotesLocalStorageKey(showNotes);
    }, []);
    const updateShowRecipeReheatOptions = useCallback((showOptions) => {
        setShowRecipeReheatOptions(showOptions);
        setShowRecipeReheatOptionsLocalStorageKey(showOptions);
    }, []);
    const updateShowRecipeStorageOptions = useCallback((showOptions) => {
        setShowRecipeStorageOptions(showOptions);
        setShowRecipeStorageOptionsLocalStorageKey(showOptions);
    }, []);
    const updateShowRecipeWebsiteReferences = useCallback((showReferences) => {
        setShowRecipeWebsiteReferences(showReferences);
        setShowRecipeWebsiteReferencesLocalStorageKey(showReferences);
    }, []);
    const updateShowAllPlanningDateRanges = useCallback((showRanges) => {
        setShowAllPlanningDateRanges(showRanges);
        setShowAllPlanningDateRangesLocalStorageKey(showRanges);
    }, []);
    const updateStartingDay = useCallback((day) => {
        setStartingDay(day);
        setStartingDayLocalStorageKey(day);
    }, []);
    const updateVendorOptions = useCallback((newVendorOptions) => {
        setVendorOptions(newVendorOptions);
        setVendorOptionsLocalStorageKey(newVendorOptions);
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
        showAllPlanningDateRanges,
        startingDay,
        updateDefaultVendor,
        updateRecipeFontSize,
        updateRecipePageLayout,
        updateShowAllPlanningDateRanges,
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
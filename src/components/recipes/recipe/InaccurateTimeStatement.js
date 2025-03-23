import React from "react";
import { useRecipeContext } from "./RecipeContext";

export const InaccurateTimeStatement = () => {
    const { conversionRate } = useRecipeContext();
    if (conversionRate === 1) return null;
    return (
        <span className="inaccurate-badge">
            <sup>*</sup>Times will vary if cooking in batches and prepping more ingredients.
        </span>
    );
}
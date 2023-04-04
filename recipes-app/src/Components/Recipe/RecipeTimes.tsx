import React from 'react';
import { isTimeZero, renderTimings } from "../../utils/RecipeTimeUtils.js";
import { RecipeTimings } from '../../Types/RecipeTimings.ts';

interface RecipeTimesProps {
    data: {
        recipeTimings: RecipeTimings,
        isThumbnail: boolean
    }
}

const RecipeTimes: React.FC<RecipeTimesProps> = ({ data }) => {
    const { recipeTimings, isThumbnail } = data;
    const cssClass = isThumbnail ? "" : "timings-section"

    return (
        <div className={`row ${cssClass}`}>
            {!isTimeZero(recipeTimings.prepTime) && renderTimings(recipeTimings.prepTime, "Prep")}
            {!isTimeZero(recipeTimings.cookTime) && renderTimings(recipeTimings.cookTime, "Cook")}
        </div>
    )
}
export default RecipeTimes;
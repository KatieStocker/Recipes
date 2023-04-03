import React from 'react';
import { isTimeZero, renderTimings } from "../../utils/RecipeTimeUtils.js";
import { Timings } from '../../Types/Timings.ts';

interface RecipeTimesProps {
    data: {
        recipeTimings: {
            prepTime: Timings,
            cookTime: Timings
        },
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
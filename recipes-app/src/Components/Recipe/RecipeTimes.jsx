import { isTimeZero, renderTimings } from "../../utils/RecipeTimeUtils.js";

const RecipeTimes = ({ data }) => {
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
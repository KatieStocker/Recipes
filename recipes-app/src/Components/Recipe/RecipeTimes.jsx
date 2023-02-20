import { RecipeUtils } from "../../utils";

const { isTimeZero, renderTimings } = RecipeUtils

const RecipeTimes = ({ data }) => {
    const { recipeTimings, isThumbnail } = data;
    const cssClass = isThumbnail ? "row" : "timings-section row"

    return (
        <div className={cssClass}>
            {!isTimeZero(recipeTimings.prepTime) && renderTimings(recipeTimings.prepTime, "Prep")}
            {!isTimeZero(recipeTimings.cookTime) && renderTimings(recipeTimings.cookTime, "Cook")}
        </div>
    )
}
export default RecipeTimes;
import { RecipeUtils } from "../../utils";

const { getTimeString, isTimeZero } = RecipeUtils

const RecipeTimes = ({ data }) => {

    const { recipeTimings } = data;

    const renderTime = (timeValueObject, type) => {
        return (
            <p>{type} time: {getTimeString(timeValueObject)}</p>
        )
    }

    return (
        <div className="timings-section">
            {!isTimeZero(recipeTimings.prepTime) && renderTime(recipeTimings.prepTime, "Prep")}
            {!isTimeZero(recipeTimings.cookTime) && renderTime(recipeTimings.cookTime, "Cook")}
        </div>
    )
}
export default RecipeTimes;
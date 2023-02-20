import { useNavigate } from "react-router-dom";
import { RecipeUtils } from "../../utils";

const { getTimeString, isTimeZero } = RecipeUtils

const RecipeThumbnail = ({ data }) => {
    const { recipe } = data;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/recipe/${recipe.id}`, { state: { recipe } })
    }

    const renderTimings = (timeValueObject, type) => {
        return (
            <div className="col-6">
                <p className="col-12 timing">{type} time:</p>
                <p className="col-12 timing">{getTimeString(timeValueObject)}</p>
            </div>
        )
    }

    return (
        <div className="col-4 recipe-thumbnail" onClick={handleClick}>
            <img src={recipe.image_url} alt="recipe-url" className="thumbnail-image" />
            <h4>{recipe.title}</h4>
            <div className="row">
                {!isTimeZero(recipe.extraInformation.prepTime) && renderTimings(recipe.extraInformation.prepTime, "Prep")}
                {!isTimeZero(recipe.extraInformation.cookTime) && renderTimings(recipe.extraInformation.cookTime, "Cook")}
            </div>
        </div>
    )
}
export default RecipeThumbnail;

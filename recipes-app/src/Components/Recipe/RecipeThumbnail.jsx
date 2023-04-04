import { useNavigate } from "react-router-dom";
import RecipeTimes from "./RecipeTimes.jsx";

const RecipeThumbnail = ({ data }) => {
    const { recipe } = data;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/recipe/${recipe.id}`, { state: { recipe } })
    }

    return (
        <div className="col-4 recipe-thumbnail" onClick={handleClick}>
            <img src={recipe.image_url} alt="recipe-url" className="thumbnail-image" />
            <h5>{recipe.title}</h5>
            <RecipeTimes data={{ recipeTimings: recipe.extraInformation, isThumbnail: true }} />
        </div>
    )
}
export default RecipeThumbnail;

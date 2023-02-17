import { useNavigate } from "react-router-dom";

const RecipeThumbnail = ({ data }) => {
    const { recipe } = data;
    const navigate = useNavigate();

    const handleClick = () => {
        // ToDo: Implement functionality to display the RecipePage when the recipe thumbnail is clicked
        console.log(`handleClick function recipe data value: ${JSON.stringify(recipe)}`)
        navigate(`/recipe/${recipe.id}`, { state: { recipe } })
    }

    return (
        <div className="col-4 recipe-thumbnail" onClick={handleClick}>
            <img src={recipe.image_url} alt="recipe-url" className="thumbnail-image" />
            <h4>{recipe.title}</h4>
            <div className="row">
                <div className="col-6">
                    <p className="col-12 timing">Prep time:</p>
                    <p className="col-12 timing">{recipe.extraInformation.prepTime.hours}hr {recipe.extraInformation.prepTime.minutes}mins</p>
                </div>
                <div className="col-6">
                    <p className="col-12 timing">Cook time:</p>
                    <p className="col-12 timing">{recipe.extraInformation.createTime.hours}hr {recipe.extraInformation.createTime.minutes}mins</p>
                </div>
            </div>
        </div>
    )
}
export default RecipeThumbnail;

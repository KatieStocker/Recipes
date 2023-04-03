import RecipeTimes from './RecipeTimes.jsx'

const RecipePageRecipe = ({ data }) => {

    const { recipeData } = data;

    return (
        <div className="main-section">
            <h1 className="m-3">{recipeData.title}</h1>
            <img src={recipeData.image_url} alt="recipe-url" className="mb-3" />
            <h5 className="mb-3">{recipeData.description}</h5>
            <h6 className="mb-3">{recipeData.author}</h6>
            <div className="timings-section-div">
                <RecipeTimes data={{ recipeTimings: recipeData.extraInformation, isThumbnail: false }} />
            </div>
        </div>
    )
}
export default RecipePageRecipe;
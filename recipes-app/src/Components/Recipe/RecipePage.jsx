import { useLocation } from 'react-router-dom';
import '../../CSS/RecipePage.css'
import RecipePageIngredients from './RecipePageIngredients'
import RecipePageInstructions from './RecipePageInstructions'
import RecipeTimes from './RecipeTimes'

import ingredients from '../../Tests/TestData/RecipeIngredientsExample.json'
import instructions from '../../Tests/TestData/RecipeInstructionsExample.json'

const RecipePage = ({ data }) => {

    const { state } = useLocation();
    const { selectedRecipe } = data;
    let recipeData = selectedRecipe;

    if (state !== null && state.length !== 0) {
        const { recipe } = state;
        recipeData = recipe;
    }

    const renderRecipe = () => {
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

    return (
        <div className="recipe-page">
            <div>
                {renderRecipe()}
            </div>
            <div>
                <RecipePageIngredients data={{ ingredients, recipeId: recipeData.id }} />
                <RecipePageInstructions data={{ instructions, recipeId: recipeData.id }} />
            </div>
        </div>
    )
}
export default RecipePage;
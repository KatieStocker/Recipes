import { useLocation } from 'react-router-dom';
import '../../CSS/RecipePage.css'

import BackButton from '../Navigation/BackButton';
import RecipePageIngredients from './RecipePageIngredients'
import RecipePageInstructions from './RecipePageInstructions'
import RecipePageRecipe from './RecipePageRecipe';

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

    return (
        <div className="recipe-page">
            <BackButton />
            <div>
                <RecipePageRecipe data={{ recipeData }} />
                <RecipePageIngredients data={{ ingredients, recipeId: recipeData.id }} />
                <RecipePageInstructions data={{ instructions, recipeId: recipeData.id }} />
            </div>
        </div>
    )
}
export default RecipePage;
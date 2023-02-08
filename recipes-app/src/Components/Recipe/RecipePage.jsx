import React from 'react'
import '../../CSS/RecipePage.css'
import RecipePageIngredients from './RecipePageIngredients'
import RecipePageInstructions from './RecipePageInstructions'
import RecipeTimes from './RecipeTimes'

import ingredients from '../../Tests/TestData/RecipeIngredientsExample.json'
import instructions from '../../Tests/TestData/RecipeInstructionsExample.json'

const RecipePage = ({ data }) => {

    const { selectedRecipe } = data;

    const renderRecipe = () => {
        const recipeData = selectedRecipe;

        return (
            <div>
                <h1>{recipeData.title}</h1>
                <img src={recipeData.image_url} alt="recipe-url" />
                <h5>{recipeData.description}</h5>
                <h6>{recipeData.author}</h6>
                <div className="timings-section-div">
                    <RecipeTimes data={{ recipeTimings: recipeData.extraInformation }} />
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
                <RecipePageIngredients data={{ ingredients, recipeId: selectedRecipe.id }} />
                <RecipePageInstructions data={{ instructions, recipeId: selectedRecipe.id }} />
            </div>
        </div>
    )
}
export default RecipePage;
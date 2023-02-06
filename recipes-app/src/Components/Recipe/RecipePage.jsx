import React from 'react'
import '../../CSS/RecipePage.css'
import RecipePageIngredients from './RecipePageIngredients'
import RecipePageInstructions from './RecipePageInstructions'

import ingredients from '../../Tests/TestData/RecipeIngredientsExample.json'
import instructions from '../../Tests/TestData/RecipeInstructionsExample.json'

const RecipePage = ({ data }) => {

    // temporary assignment, recipe id will be passed through the props based on which is selected.
    let recipeId = data.RecipeData[0].id

    const renderRecipe = () => {
        const recipeData = data.RecipeData[0];

        return (
            <div>
                <h1>{recipeData.title}</h1>
                <img src={recipeData.image_url} alt="recipe-url" />
                <h5>{recipeData.description}</h5>
                <h6>{recipeData.author}</h6>
                <p>- - - - - - - - - - - - - - - - - - - - - - - - -</p>
                <div>
                    {/* ToDo - add some logic to render hours and minutes for both times below */}
                </div>
                <p>- - - - - - - - - - - - - - - - - - - - - - - - -</p>
            </div>
        )
    }

    return (
        <div className="recipe-page">
            <div>
                {renderRecipe()}
            </div>
            <div>
                <RecipePageIngredients data={{ ingredients, recipeId }} />
                <RecipePageInstructions data={{ instructions, recipeId }} />
            </div>
        </div>
    )
}
export default RecipePage;
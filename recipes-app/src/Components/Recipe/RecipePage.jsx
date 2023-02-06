import React from 'react'
import '../../CSS/RecipePage.css'
import RecipePageIngredients from './RecipePageIngredients'
import RecipePageInstructions from './RecipePageInstructions'
// Below data will be used here -> select the right recipe id based on the recipe data passed through the props
import ingredients from '../../Tests/TestData/RecipeIngredientsExample.json'
import instructions from '../../Tests/TestData/RecipeInstructionsExample.json'

const RecipePage = ({ data }) => {

    let recipeId = data.RecipeData[0].id

    const renderRecipe = () => {
        const recipeData = data.RecipeData[0];

        return (
            <div>
                <h1>{recipeData.title}</h1>
                <img src={recipeData.image_url} alt="recipe-url" />
                <h5>{recipeData.description}</h5>
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
import React from 'react'
// Below data will be used here -> select the right recipe id based on the recipe data passed through the props
import RecipeIngredientsData from '../../Tests/TestData/RecipeIngredientsExample.json'
import RecipeInstructionsData from '../../Tests/TestData/RecipeInstructionsExample.json'

const RecipePage = ({ data }) => {

    let recipeIdValue = data.RecipeData[0].id

    // ToDo: make this it's own separate component (same goes for instruction data)
    // Note: for the unit, can use an enum, or similar, to render the initialised measurement OR store the unit as that value
    const renderIngredients = () => {
        return RecipeIngredientsData.map((i) => (
            <>
                {i.recipeId === recipeIdValue ? <p>{i.quantity} {i.unit} {i.ingredient}</p> : <p>Test</p>}
            </>
        ))
    }

    const renderInstructions = () => {
        return RecipeInstructionsData.map((i) => (
            <>
                {i.recipeId === recipeIdValue ? <p>{i.step}. {i.instruction}</p> : <p>Test</p>}
            </>
        ))
    }

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
        <>
            <div>
                {renderRecipe()}
            </div>
            <div>
                <h3>Ingredients</h3>
                {renderIngredients()}
            </div>
            <div>
                <h3>Instructions</h3>
                {renderInstructions()}
            </div>
        </>
    )
}
export default RecipePage;
import React from 'react'

const RecipePageIngredients = ({ data }) => {

    const { ingredients, recipeId } = data

    const renderIngredients = () => {
        return ingredients.map((i) => (
            <>
                {i.recipeId === recipeId ? <p>{i.quantity} {i.unit} {i.ingredient}</p> : <p>Test</p>}
            </>
        ))
    }

    return (
        <>
            <h3>Ingredients</h3>
            {renderIngredients()}
        </>
    )
}
export default RecipePageIngredients;
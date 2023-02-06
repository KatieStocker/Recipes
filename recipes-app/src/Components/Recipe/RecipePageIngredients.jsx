import React from 'react'

const RecipePageIngredients = ({ data }) => {

    const { ingredients, recipeId } = data

    const renderIngredients = () => {
        return ingredients.map((i) => (
            <div key={i.id}>
                {i.recipeId === recipeId ? <p key={i.id}>{i.quantity} {i.unit} {i.ingredient}</p> : <></>}
            </div>
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
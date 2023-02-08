import React from 'react'

const RecipePageIngredients = ({ data }) => {

    const { ingredients, recipeId } = data

    const renderIngredients = () => {
        return ingredients.map((i) => (
            <div key={i.id} className="col-6">
                {i.recipeId === recipeId ? <p key={i.id}>{i.quantity} {i.unit} {i.ingredient}</p> : <></>}
            </div>
        ))
    }

    return (
        <>
            <h3>Ingredients</h3>
            <div className="row">
                {renderIngredients()}
            </div>
        </>
    )
}
export default RecipePageIngredients;
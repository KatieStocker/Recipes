// Use to load in all recipes -> possibly render this when a user goes to search for a recipe.

import React from 'react'
import RecipeThumbnail from './RecipeThumbnail'

const AllRecipes = ({ data }) => {
    const { RecipeData } = data;
    console.log("data object: " + JSON.stringify(data))
    console.log("recipes object: " + JSON.stringify(RecipeData))

    const renderRecipes = () => {
        return RecipeData.map((i) => (
            <RecipeThumbnail key={i.id} data={{ recipe: i }} />
        ))
    }

    return (
        <div className="main-section">
            <h1>All Recipes</h1>
            <div className="row">
                {renderRecipes()}
            </div>
        </div>
    )
}
export default AllRecipes;
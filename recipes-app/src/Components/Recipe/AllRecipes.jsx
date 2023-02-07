// Use to load in all recipes -> possibly render this when a user goes to search for a recipe.

import React from 'react'
import RecipeThumbnail from './RecipeThumbnail'

const AllRecipes = (data) => {
    const { Recipes } = data

    const renderRecipes = () => {
        return Recipes.map((i) => (
            <RecipeThumbnail key={i.id} data={{ recipe: i }} />
        ))
    }

    return (
        <div>
            <h1>All Recipes</h1>
            <div>
                {renderRecipes()}
            </div>
        </div>
    )
}
export default AllRecipes;
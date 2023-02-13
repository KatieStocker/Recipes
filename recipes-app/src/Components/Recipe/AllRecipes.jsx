import React from 'react'
import RecipeThumbnail from './RecipeThumbnail'

const AllRecipes = ({ data }) => {
    const { RecipeData } = data;

    const renderRecipes = () => {
        return RecipeData.map((i) => (
            <RecipeThumbnail key={i.id} data={{ recipe: i }} />
        ))
    }

    return (
        <div className="main-section">
            <h1>All Recipes</h1>
            <div className="row all-row">
                {renderRecipes()}
            </div>
        </div>
    )
}
export default AllRecipes;
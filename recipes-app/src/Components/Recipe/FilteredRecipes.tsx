import React from 'react'
import Recipes from './Recipes.tsx'

interface FilteredRecipesProps {
    data: {
        RecipeData: object,
        filter: string
    },
    className: string
}

const FilteredRecipes: React.FC<FilteredRecipesProps> = ({ data }) => {
    const { RecipeData, filter } = data;

    const getTitle = () => {
        return filter === "" ? "All" : filter;
    }

    return (
        <div className="main-section">
            <h1 className="mb-3">{getTitle()} Recipes</h1>
            <Recipes data={{ RecipeData, filter }} />
        </div>
    )
}
export default FilteredRecipes;
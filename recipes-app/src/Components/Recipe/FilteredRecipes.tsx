import React from 'react'
import Recipes from './Recipes.tsx'
import { Recipe } from '../../Types/Recipe.ts'

interface FilteredRecipesProps {
    data: {
        RecipeData: Recipe[],
        filter: string
    },
    className?: string
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
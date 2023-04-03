import React from 'react'
import { renderRecipes } from "../../utils/RecipesUtils.js";

interface RecipesProps {
    data: {
        RecipeData: {
            type: string,
        }[],
        filter: string
    }
}

const Recipes: React.FC<RecipesProps> = ({ data }) => {
    const { RecipeData, filter } = data;

    const renderFilteredRecipes = (filterValue: string) => {
        let recipes = RecipeData.filter((i) => {
            return i.type === filterValue
        })

        return renderRecipes(recipes)
    }

    return (
        <div className="main-section">
            <div className="row all-row">
                {filter === "" ? renderRecipes(RecipeData) : renderFilteredRecipes(filter)}
            </div>
        </div>
    )
}
export default Recipes;
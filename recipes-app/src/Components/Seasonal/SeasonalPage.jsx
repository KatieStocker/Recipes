import { useState } from 'react'

import { renderRecipes } from "../../utils/RecipesUtils";
import { categoriesData } from '../../lib/categoriesData';

const SeasonalPage = ({ data }) => {
    const { RecipeData } = data;
    const seasonalData = RecipeData.filter((i) => { return i.isSeasonal })

    const [recipes, setRecipes] = useState(seasonalData)
    const [selectedCategory, setSelectedCategory] = useState()

    const getFilteredCategories = () => {
        return categoriesData.filter((i) => { return i.isSeason })
    }

    const getFilteredRecipes = (id) => {
        return seasonalData.filter((i) => { return i.seasonIds.includes(id) })
    }

    const handleOptionClick = (selectedCategory) => {
        setSelectedCategory(selectedCategory.name)
        updateSetRecipes(selectedCategory.optionIds)
    }

    const updateSetRecipes = (categoryOptionIds) => {
        let filteredRecipeArray = []
        for (let i = 0; i < categoryOptionIds.length; i++) {
            const filteredRecipe = getFilteredRecipes(categoryOptionIds[i])
            if (filteredRecipe.length > 0 && !filteredRecipeArray.includes(filteredRecipe[0])) {
                filteredRecipeArray.push(filteredRecipe[0])
            }
        }
        setRecipes(filteredRecipeArray)
    }

    const renderCategories = () => {
        let categories = getFilteredCategories().sort((a, b) => a.name.localeCompare(b.name))

        return categories.map((i) => (
            <div key={i.id} className="col-3">
                <p key={i.id} className="category-option" onClick={() => handleOptionClick(i)}>{i.name}</p>
            </div>
        ))
    }

    const renderNoneAvailableMessage = () => {
        return (
            <div>
                <p>No Recipes Yet Available for the Category: {selectedCategory}</p>
            </div>
        )
    }

    const renderRecipesSection = () => {
        return (
            <div>
                {/* {selectedCategory !== "" ? <h3>{selectedCategory} Recipes</h3> : <></>} */}
                <h3>{selectedCategory} Recipes</h3>
                <div className="row mt-5">
                    {renderRecipes(recipes)}
                </div>
            </div>
        )
    }

    return (
        <div>
            <h1 className="mb-3">Seasonal Recipes</h1>
            <h3 className="mb-3">Categories</h3>
            <div className="row">
                {renderCategories()}
            </div>
            <div className="mt-4">
                {recipes.length > 0 ? renderRecipesSection() : renderNoneAvailableMessage()}
            </div>
        </div >
    )
}
export default SeasonalPage;
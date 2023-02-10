import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../../CSS/RecipePage.css'
import RecipePageIngredients from './RecipePageIngredients'
import RecipePageInstructions from './RecipePageInstructions'
import RecipeTimes from './RecipeTimes'

import ingredients from '../../Tests/TestData/RecipeIngredientsExample.json'
import instructions from '../../Tests/TestData/RecipeInstructionsExample.json'

const RecipePage = ({ data }) => {

    const { selectedRecipe } = data;
    const { id } = useParams();

    // ToDo: amend once recipes are selectable on the main/featured/all-recipes pages
    useEffect(() => {
        //console.log(`id value: ${id}`)

    }, [id, data]);

    const renderRecipe = () => {
        const recipeData = selectedRecipe;

        return (
            <div>
                <h1 className="m-3">{recipeData.title}</h1>
                <img src={recipeData.image_url} alt="recipe-url" className="mb-3" />
                <h5 className="mb-3">{recipeData.description}</h5>
                <h6 className="mb-3">{recipeData.author}</h6>
                <div className="timings-section-div">
                    <RecipeTimes data={{ recipeTimings: recipeData.extraInformation }} />
                </div>
            </div>
        )
    }

    return (
        <div className="recipe-page">
            <div>
                {renderRecipe()}
            </div>
            <div>
                <RecipePageIngredients data={{ ingredients, recipeId: selectedRecipe.id }} />
                <RecipePageInstructions data={{ instructions, recipeId: selectedRecipe.id }} />
            </div>
        </div>
    )
}
export default RecipePage;
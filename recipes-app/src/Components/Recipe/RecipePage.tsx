import React from 'react';
import { useLocation } from 'react-router-dom';
import '../../CSS/RecipePage.css';

import BackButton from '../Navigation/BackButton.tsx';
import RecipePageIngredients from './RecipePageIngredients.tsx';
import RecipePageInstructions from './RecipePageInstructions.tsx';
import RecipePageRecipe from './RecipePageRecipe.tsx';

import ingredients from '../../Tests/TestData/RecipeIngredientsExample.json';
import instructions from '../../Tests/TestData/RecipeInstructionsExample.json';
import { Recipe } from '../../Types/Recipe.ts';

interface RecipePageProps {
    data: {
        selectedRecipe: Recipe
    },
    className?: string
}

const RecipePage: React.FC<RecipePageProps> = ({ data }) => {

    const { state } = useLocation();
    const { selectedRecipe } = data;
    let recipeData = selectedRecipe;

    if (state !== null && state.length !== 0) {
        const { recipe } = state;
        recipeData = recipe;
    }

    return (
        <div className="recipe-page">
            <BackButton />
            <div>
                <RecipePageRecipe data={{ recipeData }} />
                <RecipePageIngredients data={{ ingredients, recipeId: recipeData.id }} />
                <RecipePageInstructions data={{ instructions, recipeId: recipeData.id }} />
            </div>
        </div>
    )
}
export default RecipePage;
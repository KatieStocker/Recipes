import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { testSingleRecipe } from '../TestData/sampleRecipes';
import RecipePageRecipe from '../../Components/Recipe/RecipePageRecipe';

describe(`Client tests - RecipePageRecipe test suite`, () => {

    const recipeData = testSingleRecipe[0];

    beforeEach(() => {
        render(<Router><RecipePageRecipe data={{ recipeData }} /></Router>);
    });

    test(`it should render the title of the recipe`, () => {
        expect(screen.getByText(recipeData.title)).toBeInTheDocument();
    });

    test(`it should render the image of the recipe with an alt of "recipe-url"`, () => {
        const recipeImage = screen.getByRole('img');
        expect(recipeImage).toBeInTheDocument();
        expect(recipeImage).toHaveAttribute('alt', 'recipe-url');
        expect(recipeImage).toHaveAttribute('src', recipeData.image_url);
    });

    test(`it should render the description of the recipe`, () => {
        expect(screen.getByText(recipeData.description)).toBeInTheDocument();
    });

    test(`it should render the author of the recipe`, () => {
        expect(screen.getByText(recipeData.author)).toBeInTheDocument();
    });
});
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import RecipeThumbnail from '../../Components/Recipe/RecipeThumbnail';
import { testSingleRecipe } from '../TestData/sampleRecipes';

describe(`Client tests - RecipeThumbnail test suite`, () => {

    beforeEach(() => {
        render(<Router><RecipeThumbnail data={{ recipe: testSingleRecipe[0] }} /></Router>);
    })

    test(`it should render the recipe image`, () => {
        const recipeImage = screen.getByRole('img');
        expect(recipeImage).toBeInTheDocument();
        expect(recipeImage).toHaveAttribute('alt', 'recipe-url');
        expect(recipeImage).toHaveAttribute('src', testSingleRecipe[0].image_url);
    });

    test(`it should render the recipe title`, () => {
        expect(screen.getByText(testSingleRecipe[0].title)).toBeInTheDocument();
    });
});
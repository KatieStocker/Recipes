import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { testSingleIngredient, testMultipleIngredients, testIngredients } from '../TestData/sampleIngredients';
import RecipePageIngredients from '../../Components/Recipe/RecipePageIngredients';

describe(`Client tests - RecipePageIngredients test suite`, () => {

    describe(`Single ingredient tests - single recipe id`, () => {

        beforeEach(() => {
            render(<Router><RecipePageIngredients data={{ ingredients: testSingleIngredient, recipeId: testSingleIngredient[0].recipeId }} /></Router>);
        });

        test(`it should render the quantity, unit and ingredient name`, () => {
            const recipeText = `${testSingleIngredient[0].quantity} ${testSingleIngredient[0].unit} ${testSingleIngredient[0].ingredient}`;
            expect(screen.getByText(recipeText)).toBeInTheDocument();
        });

        test(`it should render the right number of p elements`, () => {
            const { container } = render(<Router><RecipePageIngredients data={{ ingredients: testSingleIngredient, recipeId: testSingleIngredient[0].recipeId }} /></Router>);
            const ingredientComponents = container.querySelectorAll(`.ingredient-div`);
            expect(ingredientComponents.length).toEqual(testSingleIngredient.length);
        });
    });

    describe(`Multiple ingredients tests - single recipe id`, () => {

        test(`it should render the right number of p elements`, () => {
            const { container } = render(<Router><RecipePageIngredients data={{ ingredients: testMultipleIngredients, recipeId: testMultipleIngredients[0].recipeId }} /></Router>);
            const ingredientComponents = container.querySelectorAll(`.ingredient-div`);
            expect(ingredientComponents.length).toEqual(testMultipleIngredients.length);
        });
    });

    describe(`Multiple ingredients tests - multiple recipe ids`, () => {

        test(`it should only render the ingredients for the recipeId passed`, () => {
            const { container } = render(<Router><RecipePageIngredients data={{ ingredients: testIngredients, recipeId: testIngredients[3].recipeId }} /></Router>);
            const ingredientComponents = container.querySelectorAll(`.ingredient-div`);
            expect(ingredientComponents.length).not.toEqual(testIngredients.length);
            expect(ingredientComponents.length).toEqual(2);
        });
    });
});
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Recipes from '../../Components/Recipe/Recipes';
import { testMultipleRecipes } from '../TestData/sampleRecipes';

describe(`Client tests - Recipes test suite`, () => {

    test(`it should render all recipes when the filter prop passed is an empty string`, () => {
        const { container } = render(<Router><Recipes data={{ RecipeData: testMultipleRecipes, filter: "" }} /></Router>);
        const recipeComponents = container.querySelectorAll(`.recipe-thumbnail`);
        expect(recipeComponents.length).toEqual(testMultipleRecipes.length);
    });

    test(`it should render only drinks recipes when the filter prop passed is "Drink"`, () => {
        const drinkRecipes = testMultipleRecipes.filter((i) => i.type === "Drink");
        const { container } = render(<Router><Recipes data={{ RecipeData: testMultipleRecipes, filter: "Drink" }} /></Router>);
        const recipeComponents = container.querySelectorAll(`.recipe-thumbnail`);
        expect(recipeComponents.length).toEqual(drinkRecipes.length);
    });

    test(`it should render only food recipes when the filter prop passed is "Food"`, () => {
        const foodRecipes = testMultipleRecipes.filter((i) => i.type === "Food");
        const { container } = render(<Router><Recipes data={{ RecipeData: testMultipleRecipes, filter: "Food" }} /></Router>);
        const recipeComponents = container.querySelectorAll(`.recipe-thumbnail`);
        expect(recipeComponents.length).toEqual(foodRecipes.length);
    });
});
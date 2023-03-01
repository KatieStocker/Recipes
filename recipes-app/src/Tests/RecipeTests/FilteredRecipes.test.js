import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import FilteredRecipes from '../../Components/Recipe/FilteredRecipes.jsx';
import { testMultipleRecipes } from '../TestData/sampleRecipes.js'

describe(`Client tests - FilteredRecipes test suite`, () => {

    test('it should only render the heading "All Recipes" when an empty string is passed through the filter prop', () => {
        render(<Router><FilteredRecipes data={{ RecipeData: testMultipleRecipes, filter: "" }} /></Router>);
        expect(screen.getByText("All Recipes")).toBeInTheDocument();
        expect(screen.queryByText("Drink Recipes")).not.toBeInTheDocument();
        expect(screen.queryByText("Food Recipes")).not.toBeInTheDocument();
    });

    test('it should only render the heading "Drink Recipes" when "Drink" is passed through the filter prop', () => {
        render(<Router><FilteredRecipes data={{ RecipeData: testMultipleRecipes, filter: "Drink" }} /></Router>);
        expect(screen.getByText("Drink Recipes")).toBeInTheDocument();
        expect(screen.queryByText("All Recipes")).not.toBeInTheDocument();
        expect(screen.queryByText("Food Recipes")).not.toBeInTheDocument();
    });

    test('it should only render the heading "Food Recipes" when "Food" is passed through the filter prop', () => {
        render(<Router><FilteredRecipes data={{ RecipeData: testMultipleRecipes, filter: "Food" }} /></Router>);
        expect(screen.getByText("Food Recipes")).toBeInTheDocument();
        expect(screen.queryByText("All Recipes")).not.toBeInTheDocument();
        expect(screen.queryByText("Drink Recipes")).not.toBeInTheDocument();
    });
});
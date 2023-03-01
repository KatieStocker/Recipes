import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import SeasonalPage from '../../Components/Seasonal/SeasonalPage.jsx';
import { testMultipleRecipes } from '../TestData/sampleRecipes.js'

describe(`Client tests - SeasonalPage test suite`, () => {

    beforeEach(() => {
        render(<Router><SeasonalPage data={{ RecipeData: testMultipleRecipes }} /></Router>);
    });

    test('it should render a heading for "Seasonal Recipes"', () => {
        expect(screen.getByText("Seasonal Recipes")).toBeInTheDocument();
    });

    test('it should render a heading for "Categories"', () => {
        expect(screen.getByText("Categories")).toBeInTheDocument();
    });

    test('it should render all 20 isSeason categories', () => {
        const { container } = render(<Router><SeasonalPage data={{ RecipeData: testMultipleRecipes }} /></Router>);
        expect(container.querySelectorAll('.category-option').length).toBe(20);
    });
});
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Featured from '../../Components/Home/Featured.jsx';
import { testMultipleRecipes } from '../TestData/sampleRecipes';

describe(`Client tests - Featured test suite`, () => {

    beforeEach(() => {
        render(<Router><Featured data={{ RecipeData: testMultipleRecipes }} /></Router>);
    });

    test('it should render the correct heading', () => {
        expect(screen.getByText("Featured Recipes")).toBeInTheDocument();
    });
});
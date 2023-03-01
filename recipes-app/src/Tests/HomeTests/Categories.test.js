import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Categories from '../../Components/Home/Categories.jsx';

describe(`Client tests - Categories test suite`, () => {

    test('it should match the snapshot', () => {
        expect(render(<Router><Categories /></Router>)).toMatchSnapshot();
    });

    test('it should render three links', () => {
        const { container } = render(<Router><Categories /></Router>);
        expect(container.querySelectorAll('.category-button').length).toBe(3);
    });

    test('it should render a link for "All", "Drinks" and "Food"', () => {
        render(<Router><Categories /></Router>);
        expect(screen.getByText("All")).toBeInTheDocument();
        expect(screen.getByText("Drinks")).toBeInTheDocument();
        expect(screen.getByText("Food")).toBeInTheDocument();
    });
});
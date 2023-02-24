import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import NavigationBar from '../Components/Navigation/NavigationBar.jsx';

describe(`Client tests - NavigationBar test suite`, () => {

    const mockToggleOpen = jest.fn();

    beforeEach(() => {
        render(<Router><NavigationBar data={{ open: true, toggleOpen: mockToggleOpen }} /></Router>);
    });

    test(`it should have the className "" when open:true is passed to the component`, () => {
        const { container } = render(<Router><NavigationBar data={{ open: true, toggleOpen: mockToggleOpen }} /></Router>);
        const mainNavDiv = container.querySelector(`.side-nav`);
        expect(mainNavDiv).toBeTruthy();
    });

    test(`it should have the className "" when open:false is passed to the component`, () => {
        const { container } = render(<Router><NavigationBar data={{ open: false, toggleOpen: mockToggleOpen }} /></Router>);
        const mainNavDiv = container.querySelector(`.side-navClosed`);
        expect(mainNavDiv).toBeTruthy();
    });

    test(`it should call mockToggleOpen when the toggle button has been clicked`, () => {
        const toggleButton = screen.getByRole('button')
        userEvent.click(toggleButton);
        expect(mockToggleOpen).toHaveBeenCalledTimes(1);
    });
});
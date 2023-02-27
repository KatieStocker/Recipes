import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import About from '../Components/About.jsx'

describe(`Client tests - About test suite`, () => {

    test('it should match the snapshot', () => {
        expect(render(<Router><About /></Router>)).toMatchSnapshot();
    });
});
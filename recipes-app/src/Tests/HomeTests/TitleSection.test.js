import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import TitleSection from '../../Components/Home/TitleSection.jsx';

describe(`Client tests - TitleSection test suite`, () => {

    test('it should match the snapshot', () => {
        expect(render(<Router><TitleSection /></Router>)).toMatchSnapshot();
    });
});
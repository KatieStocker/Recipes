import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import BackButton from '../../Components/Navigation/BackButton.jsx';

describe(`Client tests - BackButton test suite`, () => {

    test('it should match the snapshot', () => {
        expect(render(<Router><BackButton /></Router>)).toMatchSnapshot();
    });
});
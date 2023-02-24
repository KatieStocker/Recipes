import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { testSingleInstruction, testMultipleInstructions, testInstructions } from '../TestData/sampleInstructions';
import RecipePageInstructions from '../../Components/Recipe/RecipePageInstructions';

describe(`Client tests - RecipePageInstructions test suite`, () => {

    describe(`Single instruction tests - single recipe id`, () => {

        test(`it should render the step number`, () => {
            const { container } = render(<Router><RecipePageInstructions data={{ instructions: testSingleInstruction, recipeId: testSingleInstruction[0].recipeId }} /></Router>);
            expect(container).toHaveTextContent(testSingleInstruction[0].step)
        });

        test(`it should render the instruction`, () => {
            const { container } = render(<Router><RecipePageInstructions data={{ instructions: testSingleInstruction, recipeId: testSingleInstruction[0].recipeId }} /></Router>);
            expect(container).toHaveTextContent(testSingleInstruction[0].instruction)
        });

        test(`it should render the right number of instruction div elements`, () => {
            const { container } = render(<Router><RecipePageInstructions data={{ instructions: testSingleInstruction, recipeId: testSingleInstruction[0].recipeId }} /></Router>);
            const instructionComponents = container.querySelectorAll(`.instruction-div`);
            expect(instructionComponents.length).toEqual(testSingleInstruction.length);
        });
    });

    describe(`Multiple instructions tests - single recipe id`, () => {

        test(`it should render the right number of instruction div elements`, () => {
            const { container } = render(<Router><RecipePageInstructions data={{ instructions: testMultipleInstructions, recipeId: testMultipleInstructions[0].recipeId }} /></Router>);
            const instructionComponents = container.querySelectorAll(`.instruction-div`);
            expect(instructionComponents.length).toEqual(testMultipleInstructions.length);
        });
    });

    describe(`Multiple instructions tests - multiple recipe ids`, () => {

        test(`it should only render the instructions for the recipeId passed`, () => {
            const { container } = render(<Router><RecipePageInstructions data={{ instructions: testInstructions, recipeId: testInstructions[0].recipeId }} /></Router>);
            const instructionComponents = container.querySelectorAll(`.instruction-div`);
            expect(instructionComponents.length).not.toEqual(testInstructions.length);
            expect(instructionComponents.length).toEqual(2);
        });
    });
});
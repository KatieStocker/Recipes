import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import RecipeTimes from '../../Components/Recipe/RecipeTimes';
import { recipeTime, prepZeroHourZeroMin, cookZeroHourZeroMin, onlyMins, onlyHours } from '../TestData/sampleRecipeTimes';


const getTimeString = (timeValue, unit) => {
    return `${timeValue}${unit + getPluralOf(timeValue)}`;
}

const getPluralOf = (timeValue) => {
    return timeValue > 1 ? "s" : "";
}

describe(`Client tests - RecipeTimes test suite`, () => {

    test(`it should render both mins and hours for prep and cook time when all values are populated with non-zero values`, () => {
        render(<Router><RecipeTimes data={{ recipeTimings: recipeTime, isThumbnail: false }} /></Router>);
        expect(screen.getByText("Prep time:")).toBeInTheDocument();
        expect(screen.getByText("Cook time:")).toBeInTheDocument();
    });

    test(`it should render only min values when hour values are zero`, () => {
        render(<Router><RecipeTimes data={{ recipeTimings: onlyMins, isThumbnail: false }} /></Router>);
        expect(screen.queryByText("hr")).not.toBeInTheDocument();
        expect(screen.queryByText("hrs")).not.toBeInTheDocument();

        const prepTimeString = getTimeString(onlyMins.prepTime.minutes, "min");
        const cookTimeString = getTimeString(onlyMins.cookTime.minutes, "min");

        expect(screen.getByText(prepTimeString)).toBeInTheDocument();
        expect(screen.getByText(cookTimeString)).toBeInTheDocument();
    });

    test(`it should render only hour values when min values are zero`, () => {
        render(<Router><RecipeTimes data={{ recipeTimings: onlyHours, isThumbnail: true }} /></Router>);
        expect(screen.queryByText("min")).not.toBeInTheDocument();
        expect(screen.queryByText("mins")).not.toBeInTheDocument();

        const prepTimeString = getTimeString(onlyHours.prepTime.hours, "hr");
        const cookTimeString = getTimeString(onlyHours.cookTime.hours, "hr");

        expect(screen.getByText(prepTimeString)).toBeInTheDocument();
        expect(screen.getByText(cookTimeString)).toBeInTheDocument();
    });

    test(`it should render only time values for prep when cook times are zero`, () => {
        render(<Router><RecipeTimes data={{ recipeTimings: cookZeroHourZeroMin, isThumbnail: true }} /></Router>);
        expect(screen.queryByText("Cook time:")).not.toBeInTheDocument();
    });

    test(`it should render only time values for cook when prep times are zero`, () => {
        render(<Router><RecipeTimes data={{ recipeTimings: prepZeroHourZeroMin, isThumbnail: false }} /></Router>);
        expect(screen.queryByText("Prep time:")).not.toBeInTheDocument();
    });

    test(`it should have the className "timings-section" when isThumbnail is false`, () => {
        const { container } = render(<Router><RecipeTimes data={{ recipeTimings: recipeTime, isThumbnail: false }} /></Router>);
        const timeComponent = container.querySelector(`.timings-section`);
        expect(timeComponent).toBeTruthy();
    });

    test(`it should not have the className "timings-section" when isThumbnail is true`, () => {
        const { container } = render(<Router><RecipeTimes data={{ recipeTimings: recipeTime, isThumbnail: true }} /></Router>);
        const timeComponent = container.querySelector(`.timings-section`);
        expect(timeComponent).toBeFalsy();
    });
});
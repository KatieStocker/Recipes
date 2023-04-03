import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import RecipeData from '../Tests/TestData/RecipeExample.json'

import About from './About.tsx';
import FilteredRecipes from './Recipe/FilteredRecipes.tsx';
import HomePage from './Home/HomePage.tsx'
import NavigationBar from './Navigation/NavigationBar.tsx'
import RecipePage from './Recipe/RecipePage.tsx'
import SeasonalPage from './Seasonal/SeasonalPage.tsx';

const Main: React.FC = () => {

    const [open, setOpen] = useState(true)

    const toggleOpen = () => {
        setOpen(!open)
    }

    let selectedRecipe = RecipeData[1]

    // ToDo: function will be called for when the user selects a recipe from the list/on the website.
    const getRecipeFromId = (selectedId: number) => {
        for (let i = 0; i < RecipeData.length; i++) {
            if (RecipeData[i].id === selectedId) {
                selectedRecipe = RecipeData[i]
            }
        }
    }

    return (
        <>
            <Router>
                <NavigationBar data={{ open, toggleOpen }} />
                <div className={open ? "main" : "main-collapsed-side-bar"}>
                    <Routes>
                        <Route path="/" element={<HomePage data={{ RecipeData }} className="sub-page" />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/all-recipes" element={<FilteredRecipes data={{ RecipeData, filter: "" }} className="sub-page" />} />
                        <Route path="/drinks" element={<FilteredRecipes data={{ RecipeData, filter: "Drink" }} />} />
                        <Route path="/food" element={<FilteredRecipes data={{ RecipeData, filter: "Food" }} />} />
                        <Route path="/recipe/:id" element={<RecipePage data={{ selectedRecipe }} className="sub-page" />} />
                        <Route path="/seasonal" element={<SeasonalPage data={{ RecipeData }} />} />
                    </Routes>
                </div>
            </Router>
        </>
    )
}
export default Main;
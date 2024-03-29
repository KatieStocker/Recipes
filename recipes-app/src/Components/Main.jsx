import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import RecipeData from '../Tests/TestData/RecipeExample.json'

import About from './About.jsx';
import FilteredRecipes from './Recipe/FilteredRecipes.jsx';
import HomePage from './Home/HomePage.jsx'
import NavigationBar from './Navigation/NavigationBar.jsx'
import RecipePage from './Recipe/RecipePage.jsx'
import SeasonalPage from './Seasonal/SeasonalPage.jsx';

const Main = () => {

    const [open, setOpen] = useState(true)

    const toggleOpen = () => {
        setOpen(!open)
    }

    let selectedRecipe = RecipeData[1]

    // ToDo: function will be called for when the user selects a recipe from the list/on the website.
    const getRecipeFromId = (selectedId) => {
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
                        <Route exact path="/" element={<HomePage data={{ RecipeData }} className="sub-page" />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/all-recipes" element={<FilteredRecipes data={{ RecipeData, filter: "" }} className="sub-page" />} />
                        <Route path="/drinks" element={<FilteredRecipes data={{ RecipeData, filter: "Drink" }} />} />
                        <Route path="/food" element={<FilteredRecipes data={{ RecipeData, filter: "Food" }} />} />
                        <Route exact path="/recipe/:id" element={<RecipePage data={{ selectedRecipe }} className="sub-page" />} />
                        <Route path="/seasonal" element={<SeasonalPage data={{ RecipeData }} />} />
                    </Routes>
                </div>
            </Router>
        </>
    )
}
export default Main;
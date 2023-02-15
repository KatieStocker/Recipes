import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import RecipeData from '../Tests/TestData/RecipeExample.json'

import About from './About';
import FilteredRecipes from './Recipe/FilteredRecipes';
import HomePage from './Home/HomePage'
import NavigationBar from './Navigation/NavigationBar'
import RecipePage from './Recipe/RecipePage'

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
                        <Route exact path="/" element={<HomePage data={{ RecipeData }} className="sub-page" />}></Route>
                        <Route path="/about" element={<About />}></Route>
                        <Route path="/all-recipes" element={<FilteredRecipes data={{ RecipeData, filter: "" }} className="sub-page" />}></Route>
                        <Route path="/drinks" element={<FilteredRecipes data={{ RecipeData, filter: "Drink" }} />}></Route>
                        <Route path="/food" element={<FilteredRecipes data={{ RecipeData, filter: "Food" }} />}></Route>
                        <Route exact path="/recipe/:id" element={<RecipePage data={{ selectedRecipe }} className="sub-page" />}></Route>
                    </Routes>
                </div>
            </Router>
        </>
    )
}
export default Main;
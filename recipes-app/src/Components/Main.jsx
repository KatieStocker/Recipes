import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react'
import RecipeData from '../Tests/TestData/RecipeExample.json'

import AllRecipes from './Recipe/AllRecipes';
import HomePage from './Home/HomePage'
import RecipePage from './Recipe/RecipePage'

const Main = () => {

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
                <Routes>
                    <Route exact path="/" element={<HomePage data={{ RecipeData }} />}></Route>
                    <Route exact path="/recipe/:id" element={<RecipePage data={{ selectedRecipe }} />}></Route>
                    <Route path="/all-recipes" element={<AllRecipes data={{ RecipeData }} />}></Route>
                </Routes>
            </Router>
        </>
    )
}
export default Main;
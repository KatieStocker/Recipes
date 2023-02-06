import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react'
import RecipeData from '../Tests/TestData/RecipeExample.json'

import RecipePage from './Recipe/RecipePage'
import TitleSection from './TitleSection'

const Home = () => {

    let selectedRecipe = RecipeData[0]

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
                    {/* ToDo: TitleSection Component to be encapsulated within a separate component which will render "featured" recipes etc. */}
                    <Route exact path="/" element={<TitleSection />}></Route>
                    <Route path="/recipe" element={<RecipePage data={{ selectedRecipe }} />}></Route>
                </Routes>
            </Router>
        </>
    )
}
export default Home;
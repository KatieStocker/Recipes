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
            <TitleSection />
            <RecipePage data={{ selectedRecipe }} />
        </>
    )
}
export default Home;
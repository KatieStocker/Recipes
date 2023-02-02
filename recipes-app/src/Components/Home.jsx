import React from 'react'
import RecipeData from '../Tests/TestData/RecipeExample.json'
//Above data will be passed as props

import RecipePage from './RecipePage'

const Home = () => {
    return (
        <>
            {/* ToDo: encapsulate the h1 and h3 below in a separate heading/header component */}
            <h1>Get To The Recipes</h1>
            <h3>Skipping the life stories</h3>
            <span>- - - - - - - - - - - -</span>
            <div>
                <RecipePage data={{ RecipeData }} />
            </div>
        </>
    )
}
export default Home;
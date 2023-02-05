import React from 'react'
import RecipeData from '../Tests/TestData/RecipeExample.json'

import RecipePage from './Recipe/RecipePage'

const Home = () => {
    return (
        <>
            {/* ToDo: encapsulate the h1 and h3 below in a separate heading/header component */}
            <h1>Straight To The Recipe</h1>
            <h3>Skipping the life stories and getting straight to the point</h3>
            <span>- - - - - - - - - - - -</span>
            <div>
                <RecipePage data={{ RecipeData }} />
            </div>
        </>
    )
}
export default Home;
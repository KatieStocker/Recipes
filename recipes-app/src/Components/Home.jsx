import React from 'react'
import RecipeData from '../Tests/TestData/RecipeExample.json'

import RecipePage from './Recipe/RecipePage'
import TitleSection from './TitleSection'

const Home = () => {
    return (
        <>
            <TitleSection />
            <span>- - - - - - - - - - - -</span>
            <RecipePage data={{ RecipeData }} />
        </>
    )
}
export default Home;
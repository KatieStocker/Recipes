import React from 'react'

import '../../CSS/HomePage.css'

import Categories from './Categories';
import Featured from './Featured';
import TitleSection from './TitleSection';

const HomePage = ({ data }) => {

    const { RecipeData } = data;


    return (
        <>
            <TitleSection />
            <Categories />
            <Featured data={{ RecipeData }} />
        </>
    )
}
export default HomePage;

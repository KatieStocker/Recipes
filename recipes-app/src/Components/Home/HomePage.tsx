import React from 'react';
import '../../CSS/HomePage.css'

import Categories from './Categories.tsx';
import Featured from './Featured.tsx';
import TitleSection from './TitleSection.tsx';

interface HomePageProps {
    data: {
        RecipeData: object
    }
}

const HomePage: React.FC<HomePageProps> = ({ data }) => {

    const { RecipeData } = data;

    return (
        <div>
            <TitleSection />
            <Categories />
            <Featured data={{ RecipeData }} />
        </div>
    )
}
export default HomePage;

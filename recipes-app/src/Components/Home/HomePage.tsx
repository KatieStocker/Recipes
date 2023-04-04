import React from 'react';
import '../../CSS/HomePage.css'

import Categories from './Categories.tsx';
import Featured from './Featured.tsx';
import TitleSection from './TitleSection.tsx';
import { Recipe } from '../../Types/Recipe.ts';

interface HomePageProps {
    data: {
        RecipeData: Recipe[]
    },
    className: string
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

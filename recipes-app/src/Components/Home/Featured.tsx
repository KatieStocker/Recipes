import React from 'react';
import Recipes from '../Recipe/Recipes.tsx';

interface FeaturedProps {
    data: {
        RecipeData: object;
    }
}

const Featured: React.FC<FeaturedProps> = ({ data }) => {

    const { RecipeData } = data;

    let filterString = ""

    // temporary function to change the recipes shown in the Featured section 
    const randomFilter = () => {
        const filterValues = ["", "Food", "Drink"]
        const index = Math.floor(Math.random() * 3)
        filterString = filterValues[index]
    }
    randomFilter()
    //

    return (
        <div className="mt-3">
            <h2 className="mb-4 mt-4">Featured Recipes</h2>
            <Recipes data={{ RecipeData, filter: filterString }} />
        </div>
    )
}
export default Featured;

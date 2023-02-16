import Recipes from '../Recipe/Recipes';

const Featured = ({ data }) => {

    const { RecipeData } = data;


    return (
        <div className="mt-3">
            <h2 className="mb-4 mt-4">Featured Recipes</h2>
            <Recipes data={{ RecipeData, filter: "Drink" }} />
        </div>
    )
}
export default Featured;

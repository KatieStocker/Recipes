import Recipes from './Recipes'

const AllRecipes = ({ data }) => {
    const { RecipeData } = data;

    return (
        <div className="main-section">
            <h1>All Recipes</h1>
            <Recipes data={{ RecipeData, filter: "" }} />
        </div>
    )
}
export default AllRecipes;
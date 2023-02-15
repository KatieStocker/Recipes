import Recipes from './Recipes'

const FilteredRecipes = ({ data }) => {
    const { RecipeData, filter } = data;

    const getTitle = () => {
        return filter === "" ? "All" : filter;
    }

    return (
        <div className="main-section">
            <h1>{getTitle()} Recipes</h1>
            <Recipes data={{ RecipeData, filter }} />
        </div>
    )
}
export default FilteredRecipes;
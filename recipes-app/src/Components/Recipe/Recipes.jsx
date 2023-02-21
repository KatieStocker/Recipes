import { renderRecipes } from "../../utils/RecipesUtils";

const Recipes = ({ data }) => {
    const { RecipeData, filter } = data;

    const renderFilteredRecipes = (filterValue) => {
        let recipes = RecipeData.filter((i) => {
            return i.type === filterValue
        })

        return renderRecipes(recipes)
    }

    return (
        <div className="main-section">
            <div className="row all-row">
                {filter === "" ? renderRecipes(RecipeData) : renderFilteredRecipes(filter)}
            </div>
        </div>
    )
}
export default Recipes;
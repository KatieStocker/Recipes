import { renderRecipes } from "../../utils/RecipesUtils";

const SeasonalPage = ({ data }) => {
    const { RecipeData } = data;

    const renderSeasonalRecipes = () => {
        let recipes = RecipeData.filter((i) => { return i.isSeasonal })
        return renderRecipes(recipes)
    }

    return (
        <div>
            <h1 className="mb-3">Seasonal Recipes</h1>
            <div className="row">
                {renderSeasonalRecipes()}
            </div>
        </div>
    )
}
export default SeasonalPage;
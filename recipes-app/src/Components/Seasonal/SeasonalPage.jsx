import { renderRecipes } from "../../utils/RecipesUtils";
import { categoriesData } from '../../lib/categoriesData'

const SeasonalPage = ({ data }) => {
    const { RecipeData } = data;

    const renderSeasonalRecipes = () => {
        let recipes = RecipeData.filter((i) => { return i.isSeasonal })
        return renderRecipes(recipes)
    }

    const filterCategories = () => {
        return categoriesData.filter((i) => { return i.isSeason })
    }

    const renderCategories = () => {
        let categories = filterCategories().sort((a, b) => a.name.localeCompare(b.name))

        return categories.map((i) => (
            <div key={i.id} className="col-3">
                {/* ToDo: add an onclick function to each of these which will change the rendered recipe thumbnails based on the option clicked */}
                <p key={i.id}>{i.name}</p>
            </div>
        ))
    }

    return (
        <div>
            <h1 className="mb-3">Seasonal Recipes</h1>
            <h3 className="mb-3">Categories</h3>
            <div className="row">
                {renderCategories()}
            </div>
            {/* Dynamically change what is rendered below based on the selected category from the above renderCategories */}
            <div className="row mt-5">
                {renderSeasonalRecipes()}
            </div>
        </div >
    )
}
export default SeasonalPage;
const RecipePageIngredients = ({ data }) => {

    const { ingredients, recipeId } = data

    const renderIngredients = () => {
        return ingredients
            .filter((i) => {
                return i.recipeId === recipeId
            })
            .map((i) => (
                <div key={i.id} className="col-6">
                    <p key={i.id}>{i.quantity} {i.unit} {i.ingredient} {i.prepInfo !== "" ? `(${i.prepInfo})` : ""}</p>
                </div>
            ))
    }

    return (
        <div className="section-separator">
            <h3 className="mb-4">Ingredients</h3>
            <div className="row">
                {renderIngredients()}
            </div>
        </div>
    )
}
export default RecipePageIngredients;
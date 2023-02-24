const RecipePageInstructions = ({ data }) => {

    const { instructions, recipeId } = data

    const renderInstructions = () => {
        return instructions
            .filter((i) => {
                return i.recipeId === recipeId
            })
            .map((i) => (
                <div key={i.id} className="instruction-div">
                    <p className="instruction"><span className="instruction-step-number">{i.step}.</span> {i.instruction}</p>
                </div>
            ))
    }

    return (
        <div className="section-separator">
            <h3 className="mb-4">Instructions</h3>
            {renderInstructions()}
        </div>
    )
}
export default RecipePageInstructions;

const SeasonalPage = ({ data }) => {
    const { RecipeData } = data;

    const getSeasonalData = () => {
        return RecipeData.filter((i) => {
            return i.isSeasonal
        })
    }

    console.log(getSeasonalData())
    console.log(JSON.stringify(getSeasonalData()))


    return (
        <div>
            <h1 className="mb-3">Seasonal Recipes</h1>

        </div>
    )
}
export default SeasonalPage;
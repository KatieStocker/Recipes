import RecipeThumbnail from "../Components/Recipe/RecipeThumbnail"

export const renderRecipes = (recipes) => {
    return recipes.map((i) => (
        <RecipeThumbnail key={i.id} data={{ recipe: i }} />
    ))
}
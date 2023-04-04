export interface RecipeIngredients {
    id: number,
    recipeId: number,
    ingredient: string,
    quantity: string,
    unit: string,
    instructionSection: number,
    prepInfo: string
}
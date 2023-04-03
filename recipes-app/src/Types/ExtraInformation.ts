import { NutritionalInfo } from "./NutritionalInfo"
import { Timings } from "./Timings"

export interface ExtraInformation {
    prepTime: Timings,
    cookTime: Timings,
    servings: number,
    nutritionalInformation: NutritionalInfo
}
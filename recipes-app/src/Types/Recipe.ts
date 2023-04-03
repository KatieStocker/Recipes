import { ExtraInformation } from "./ExtraInformation"
import { SectionValues } from "./SectionValues"

export interface Recipe {
    id: number,
    title: string,
    description: string,
    image_url: string,
    web_link: string,
    sectionValues: SectionValues[],
    extraInformation: ExtraInformation,
    isVegetarian: boolean,
    isVegan: boolean,
    isSeasonal: boolean,
    isOccasional: boolean,
    categoryIds: number[],
    type: string,
    tags: string[],
    author: string
}
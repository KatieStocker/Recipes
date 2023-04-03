export interface CategoriesData {
    id: number,
    name: string,
    isSeason: boolean,
    isOccasion: boolean,
    isDietOption: boolean,
    optionIds: number[],
    icon: string
}
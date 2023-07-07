import { Recipe } from "../types/types";
import { BASE_URL_IMAGE } from "./constant";


export function formatRecipe(meal: Recipe) {
    meal.ingredients = []
    for (let i = 1; i <= 20; i++) {
        const key: keyof Recipe = "strIngredient" + i;
        if (meal[key]) {
            meal.ingredients.push({
                strIngredient: meal[key],
                measure: meal["strMeasure" + i] as any,
                thumbnail: `${BASE_URL_IMAGE}/${meal[key]}-Small.png`
            })
        }
    }
    return meal;
}

import { Ingredient } from "../types/types";
import { BASE_URL_API, BASE_URL_IMAGE } from "../utils/constant";

export async function fetchAllIngredients(): Promise<Ingredient[]> {
    const response = await fetch(`${BASE_URL_API}/list.php?i=list`);
    const data = await response.json();
    const meals = data.meals.map((meal: Ingredient) => {
        return {
            ...meal,
            thumbnail: `${BASE_URL_IMAGE}/${meal.strIngredient}-Small.png`
        }
    })
    if (data.meals) {
        return meals;
    } else {
        return []
    }
}
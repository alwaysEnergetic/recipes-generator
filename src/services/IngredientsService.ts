import { Ingredient } from "../types";

export async function fetchAllIngredients(): Promise<Ingredient[]> {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
    const data = await response.json();
    const meals = data.meals.map((meal: Ingredient) => {
        return {
            ...meal,
            thumbnail: `https://www.themealdb.com/images/ingredients/${meal.strIngredient}-Small.png`
        }
    })
    if (data.meals) {
        return meals;
    } else {
        return []
    }
}
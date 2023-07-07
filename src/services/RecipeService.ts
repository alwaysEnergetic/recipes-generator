import { Recipe } from "../types";

export async function searchRecipes(searchTerm: string): Promise<Recipe[]> {
    const response = await fetch(`https://themealdb.com/api/json/v1/1/filter.php?i=${searchTerm}`);
    const data = await response.json();
    return data.meals;
}

export async function fetchRecipeById(id: string): Promise<Recipe> {
    const response = await fetch(`https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();
    return data.meals[0];
}
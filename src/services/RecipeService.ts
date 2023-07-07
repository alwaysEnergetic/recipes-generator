import { Recipe } from "../types/types";
import { BASE_URL_API } from "../utils/constant";
import { formatRecipe } from "../utils/helper";

export async function searchRecipesService(searchTerm: string): Promise<Recipe[]> {
    const response = await fetch(`${BASE_URL_API}/filter.php?i=${searchTerm}`);
    const data = await response.json();
    return data.meals;
}


export async function fetchRecipeByIdService(id: string): Promise<Recipe> {
    const response = await fetch(`${BASE_URL_API}/lookup.php?i=${id}`);
    const data = await response.json();
    return formatRecipe(data.meals[0]);
}
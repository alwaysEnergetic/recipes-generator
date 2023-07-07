import { useState } from "react";
import { Recipe } from "../types/types";
import { searchRecipesService, fetchRecipeByIdService } from "../services/RecipeService";

export default function useRecipe() {

    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [selectedRecipe, setSelectedRecipe] = useState<Recipe>();

    const searchRecipes = async (searchTerm: string) => {
        const response = await searchRecipesService(searchTerm);
        setRecipes(response);
    }

    const fetchRecipeById = async (id: string) => {
        const response = await fetchRecipeByIdService(id);
        setSelectedRecipe(response);
    }

    return {
        recipes,
        searchRecipes,
        selectedRecipe,
        fetchRecipeById
    }
}

export type useRecipeType = ReturnType<typeof useRecipe>;

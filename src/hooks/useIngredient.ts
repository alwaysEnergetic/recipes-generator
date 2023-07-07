import { useEffect, useState } from "react";
import { Ingredient } from "../types/types";
import { fetchAllIngredients } from "../services/IngredientsService";

export default function useIngredient() {
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);
    const [filteredIngredients, setFilteredIngredients] = useState<Ingredient[]>([]);
    const [selectedIngredient, setSelectedIngredient] = useState<Ingredient>();

    useEffect(() => {
        async function init() {
            const resp = await fetchAllIngredients()
            setIngredients(resp);
            setFilteredIngredients(resp);
        }
        init();
    }, [])

    const filterIngredients = (searchTerm: string) => {
        setFilteredIngredients(ingredients.filter((ingredient) => ingredient.strIngredient.toLowerCase().includes(searchTerm.toLowerCase())))
    }


    return {
        ingredients,
        filteredIngredients,
        filterIngredients,
        selectedIngredient, 
        setSelectedIngredient
    }

}

export type useIngredientsType = ReturnType<typeof useIngredient>;


import { useState } from "react";
import { Ingredient } from "../types";

export default function useIngredients() {
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);
    

}

import { useContext } from "react";
import AppContext from "../hooks/AppContext";
import RecipeCard from "./RecipeCard";

export default function RecipesList() {
  const { recipes, selectedIngredient } = useContext(AppContext);

  return (
    <div className="w-4/5 px-4 border-l overflow-scroll">
      <div className="justify-between mb-2 -ml-4 fixed bg-white px-4 border p-2 rounded-r-xl shadow-xl">
        <h2 className="text-gray-700 font-bold text-lg">
          Recipes with {selectedIngredient?.strIngredient}
        </h2>
        <div className="text-gray-500 text-sm">
          Total Number of Recipes {recipes?.length}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-8 mt-20">
        {recipes?.map((recipe) => (
          <RecipeCard
            onViewRecipe={(recipe) => console.log(recipe)}
            key={recipe.idMeal}
            recipe={recipe}
          />
        ))}
      </div>
    </div>
  );
}

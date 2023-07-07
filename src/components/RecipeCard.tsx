import { Recipe } from "../types";

export type RecipeProps = {
  recipe: Recipe;
  onViewRecipe: (recipe: Recipe) => void;
};

export default function RecipeCard(props: RecipeProps) {
  const { strMeal, strMealThumb, idMeal } = props.recipe;

  return (
    <div className="bg-white border rounded-xl shadow-xl flex flex-col ">
      <div>
        <img className="rounded-t-xl " src={strMealThumb} alt="thumbnail" />
      </div>
      <h1 className="font-bold my-2 text-gray-600 px-4 flex-1">{strMeal}</h1>
      <div className="px-4 w-full">
        <div className="border-t"></div>
      </div>
      <div className="px-4 pb-4">
        <div className="mt-4 flex justify-between items-center">
          <h1 className=" text-gray-600 text-sm p-2 rounded-lg border">
            #{idMeal}
          </h1>
          <button
            onClick={() => props.onViewRecipe(props.recipe)}
            className="bg-red-600  text-sm text-white rounded-lg p-2 px-4"
          >
            View Recipe
          </button>
        </div>
      </div>
    </div>
  );
}

import { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import RecipeCard from "./RecipeCard";
import Modal from "./Modal";
import { getEmbeddedYoutubeUrl } from "../utils/helper";

export default function RecipesList() {
  const { recipes, selectedIngredient, selectedRecipe, fetchRecipeById } =
    useContext(AppContext);
  const [show, setShow] = useState(false);

  return (
    <div className="w-full sm:w-4/5 sm:px-4 sm:border-l overflow-scroll">
      <Modal setShow={setShow} show={show}>
        <div className="border-4 border-dashed p-2">
          <div>
            <h1 className="text-lg font-bold text-gray-600">
              {selectedRecipe && selectedRecipe!.strMeal}
            </h1>
            <p className="text-sm text-gray-500">
              {selectedRecipe && selectedRecipe!.strCategory}
            </p>
          </div>
          {selectedRecipe &&
            selectedRecipe.ingredients.map((ingredient) => (
              <div
                className="flex items-center space-x-4"
                key={ingredient.strIngredient}
              >
                <div className="col-span-1">
                  <img
                    className="w-8 rounded"
                    src={ingredient.thumbnail}
                    alt={ingredient.thumbnail}
                  ></img>
                </div>
                <div className="col-span-5">{ingredient.strIngredient}</div>
                <div className="col-span-5 text-right flex-1">
                  {ingredient.measure}
                </div>
              </div>
            ))}
        </div>
        <div className="flex-1  p-2 overflow-scroll">
          <div className="pb-2">
            {selectedRecipe?.strTags.split(",").map((tag) => (
              <span
                key={tag}
                className="bg-orange-100 px-2 py-1 rounded-lg text-sm text-gray-600 mr-2"
              >
                #{tag}
              </span>
            ))}
          </div>
          <div>
            <iframe
              title="youtube"
              className="aspect-video w-full"
              src={getEmbeddedYoutubeUrl(selectedRecipe?.strYoutube as any)}
            ></iframe>
          </div>
          {selectedRecipe && (
            <textarea className="w-full mt-2 min-h-[300px]">
              {selectedRecipe.strInstructions}
            </textarea>
          )}
        </div>
      </Modal>
      <div className="justify-between mb-2 -ml-4 top-0 sm:top-0 fixed w-full sm:w-64 bg-white px-4 border p-2 rounded-r-xl shadow-xl">
        <h2 className="text-gray-700 font-bold text-lg">
          Recipes with {selectedIngredient?.strIngredient}
        </h2>
        <div className="text-gray-500 text-sm">
          Total Number of Recipes {recipes?.length}
        </div>
      </div>
      <div className="sm:grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-6 gap-8 mt-4 p-4">
        {recipes?.map((recipe) => (
          <RecipeCard
            onViewRecipe={(recipe) => {
              fetchRecipeById(recipe.idMeal);
              setShow(true);
            }}
            key={recipe.idMeal}
            recipe={recipe}
          />
        ))}
      </div>
    </div>
  );
}

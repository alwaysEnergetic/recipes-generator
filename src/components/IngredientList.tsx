import { useContext } from "react";
import AppContext from "../context/AppContext";

export default function IngredientList(props: any) {
  const {
    filteredIngredients,
    filterIngredients,
    searchRecipes,
    setSelectedIngredient,
  } = useContext(AppContext);

  const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    filterIngredients(value);
  };

  return (
    <div className="flex flex-col space-y-2 h-full">
      <h1 className="text-2xl font-bold mt-12 sm:mt-0">Ingredients</h1>
      <div>
        <input
          type="text"
          placeholder="Search"
          className="border w-full p-2 rounded-lg"
          onKeyUp={(e) => onKeyUp(e)}
        />
      </div>
      <div className="flex-1 overflow-scroll cursor-pointer">
        {filteredIngredients.map((ingredient) => (
          <div
            onClick={() => {
              setSelectedIngredient(ingredient);
              searchRecipes(ingredient.strIngredient);
            }}
            className="p-2 rounded-lg px-2 space-x-4 border-b border-gray-100 hover:bg-blue-100 flex  items-center"
            key={ingredient.idIngredient}
          >
            <div>
              <img
                className="w-8 rounded"
                src={ingredient.thumbnail}
                alt={ingredient.thumbnail}
              ></img>
            </div>
            <div>{ingredient.strIngredient}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

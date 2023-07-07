import "./App.css";
import useRecipe from "./hooks/useRecipe";
import AppContext, { AppProvider } from "./hooks/AppContext";
import { useContext } from "react";

function IngredientMenu(props: any) {
  const { filteredIngredients, filterIngredients, searchRecipes } = useContext(AppContext);

  const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    filterIngredients!(value);
  };

  return (
    <div className="flex flex-col space-y-2">
      <h1 className="text-2xl font-bold">Ingredients</h1>
      <div>
        <input
          type="text"
          placeholder="Search"
          className="border w-full p-2 rounded-lg"
          onKeyUp={(e) => onKeyUp(e)}
        />
      </div>
      <div className="flex-1 overflow-scroll cursor-pointer">
        {filteredIngredients!.map((ingredient) => (
          <div
            onClick={() => searchRecipes!(ingredient.strIngredient)}
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

function App() {
  const { searchRecipes } = useRecipe();

  return (
    <AppProvider>
      <main className="flex space-x-2">
        <div>
          <IngredientMenu />
        </div>
        <div>RIGHT</div>
      </main>
    </AppProvider>
  );
}

export default App;

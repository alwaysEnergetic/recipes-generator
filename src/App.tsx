import "./App.css";
import AppContext, { AppProvider } from "./hooks/AppContext";
import IngredientList from "./components/IngredientList";
import RecipeCard from "./components/RecipeCard";
import { useContext } from "react";
import RecipesList from "./components/RecipesList";

function App() {
  return (
    <AppProvider>
      <main className="flex space-x-2">
        <div className="w-1/5 px-4 flex flex-col">
          <IngredientList />
        </div>
        <RecipesList></RecipesList>
      </main>
    </AppProvider>
  );
}

export default App;

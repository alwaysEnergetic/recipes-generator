import "./App.css";
import { AppProvider } from "./context/AppContext";
import IngredientList from "./components/IngredientList";
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

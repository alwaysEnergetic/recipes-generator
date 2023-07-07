import "./App.css";
import { AppProvider } from "./context/AppContext";
import IngredientList from "./components/IngredientList";
import RecipesList from "./components/RecipesList";

function App() {
  return (
    <AppProvider>
      <main className="sm:flex space-x-2 h-screen py-6">
        <div className="w-full h-64 sm:h-full sm:w-2/5 lg:w-1/5 px-4 flex flex-col">
          <IngredientList />
        </div>
        <RecipesList></RecipesList>
      </main>
    </AppProvider>
  );
}

export default App;

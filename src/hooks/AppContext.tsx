import React, { createContext } from "react";
import useRecipe, { useRecipeType } from "./useRecipe";
import useIngredient, { useIngredientsType } from "./useIngredient";

// Define the shape of the user context
interface AppContextData
  extends Partial<useIngredientsType>,
    Partial<useRecipeType> {}

interface UserProviderProps {
  children: React.ReactNode;
}

// Create the user context with initial values
const AppContext = createContext<AppContextData>({});

// Create the AppProvider component
export const AppProvider: React.FC<UserProviderProps> = ({ children }: any) => {
  const recipe = useRecipe();
  const ingredient = useIngredient();

  return (
    <AppContext.Provider
      value={{
        ...recipe,
        ...ingredient,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;

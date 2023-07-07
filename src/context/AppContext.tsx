import React, { createContext } from "react";
import useRecipe, { useRecipeType } from "../hooks/useRecipe";
import useIngredient, { useIngredientsType } from "../hooks/useIngredient";

interface AppContextData extends useIngredientsType, useRecipeType {}

interface UserProviderProps {
  children: React.ReactNode;
}

const AppContext = createContext<AppContextData>({} as any);

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

import React, { useEffect, useState } from "react";
import "./App.css";

function IngredientMenu(props: any) {
  
  // const onKeyUp = (e) => {
  //   const { value } = e.target;
  //   const filtered = ingredients.filter((ingredient) => {
  //     if (
  //       ingredient.strIngredient.toLowerCase().includes(value.toLowerCase())
  //     ) {
  //       return ingredient;
  //     }
  //   });
  //   // setFilteredIngredients(filtered);
  // };

  return (
    <div className="flex flex-col space-y-2">
      <h1 className="text-2xl font-bold">Ingredients</h1>
      <div>
        <input
          type="text"
          placeholder="Search"
          className="border w-full p-2 rounded-lg"
          // onKeyUp={(e) => onKeyUp(e)}
        />
      </div>
    </div>
  );
}

function App() {
  return (
    <main className="flex space-x-2">
      <div>
        <IngredientMenu />
      </div>
      <div>RIGHT</div>
    </main>
  );
}

export default App;

import "./App.css";
import StartPage from "../src/pages/StartPage/StartPage";
import IngredientsSite from "./pages/IngerientsSite/IngredientsSite";
import { Routes, Route } from "react-router-dom";
import { PizzaDetails } from "./pages/StartPage/Components/PizzaDetails/PizzaDetails";
import { IngredientsDetails } from "./pages/IngerientsSite/Components/IngredientDetails/IngredientDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StartPage />}></Route>
        <Route path="pizzaDetails/:Id" element={<PizzaDetails />} />
        <Route path="IngredientsSite" element={<IngredientsSite />}></Route>
        <Route
          path="IngredientsSite/ingredientDetails/:name"
          element={<IngredientsDetails />}
        />
        <Route path="operations" element={<IngredientsDetails />} />
      </Routes>
    </div>
  );
}

export default App;

/*
Routes>
          <Route path="/" element={<PizzasList />} />
          <Route path="/pizzaDetails/:Id" element={<PizzaDetails />} />
        </Routes> */

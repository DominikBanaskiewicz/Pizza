import { Helmet, HelmetProvider } from "react-helmet-async";
import { IngredientsList } from "./Components/IngredientsList/IngredientsList";

export default function IngredientsSite() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Check your favourite</title>s
        </Helmet>

        {<IngredientsList />}
      </div>
    </HelmetProvider>
  );
}

import { Helmet, HelmetProvider } from "react-helmet-async";

import { PizzasList } from "./Components/PizzasList/Pizzaslist";

export default function StartPage() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Welcome on pizza site</title>s
        </Helmet>
        <PizzasList></PizzasList>
      </div>
    </HelmetProvider>
  );
}

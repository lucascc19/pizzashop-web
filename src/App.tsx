import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./routes";
import { Helmet, HelmetProvider } from "react-helmet-async";

export const App = () => {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shopp" />
      <RouterProvider router={router} />
    </HelmetProvider>
  );
};

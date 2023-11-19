import { RouterProvider } from "react-router-dom";
import { router } from "./services";

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;

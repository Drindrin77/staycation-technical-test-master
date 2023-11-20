import HotelList from "business/hotel/pages/hotel-list";
import { RouteObject } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { Routes } from "./routes";

const routeProps: RouteObject[] = [
  {
    path: Routes.Home,
    element: <HotelList />,
  },
  {
    path: Routes.HotelDetails,
    element: <HotelList />,
  },
  {
    path: Routes.HotelList,
    element: <HotelList />,
  },
];

export const router = createBrowserRouter(routeProps);

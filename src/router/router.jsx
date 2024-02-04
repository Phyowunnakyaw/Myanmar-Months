import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  import Layout from "../pages/layout/layout";
import Home from "../pages/Home";
import MonthDetail from "../pages/MonthDetail";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "Months/:id",
            element: <MonthDetail />
        }
      ]
    },
  ]);

  export default router;
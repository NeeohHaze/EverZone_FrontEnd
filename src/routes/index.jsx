import { createBrowserRouter } from "react-router";
import App from "../pages/App";
import Layout from "../Layout";

let router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "/",
        Component: App,
      },
    ],
  },
]);

export default router;

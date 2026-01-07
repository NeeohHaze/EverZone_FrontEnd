import { createBrowserRouter } from "react-router"
import App from "../pages/App"
import Layout from "../Layout"
import Home from "../pages/Home"
import AboutUs from "../pages/AboutUs"
import Services from "../pages/Services"
import Projects from "../pages/Projects"
import ContactUs from "../pages/ContactUs"

let router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "/",
        Component: App,
      },
      {
        path: "/Home",
        Component: Home,
      },
      {
        path: "/AboutUs",
        Component: AboutUs,
      },
      {
        path: "/Services",
        Component: Services,
      },
      {
        path: "/Projects",
        Component: Projects,
      },
      {
        path: "/ContactUs",
        Component: ContactUs,
      },
    ],
  }
])

export default router
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import LetsLearn from "../pages/LetsLearn";
import Tutorials from "../pages/Tutorials";
import AboutUs from "../pages/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/letsLearn",
        element: <LetsLearn></LetsLearn>,
      },
      {
        path: "/tutorials",
        element: <Tutorials></Tutorials>,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
    ],
  },
]);
export default router;

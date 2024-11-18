import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import LetsLearn from "../pages/LetsLearn";
import Tutorials from "../pages/Tutorials";
import AboutUs from "../pages/AboutUs";
import Login from "../components/Login";
import ViewLesson from "../components/ViewLesson";

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
        loader: () => fetch("../lessons.json"),
      },
      {
        path: "/tutorials",
        element: <Tutorials></Tutorials>,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/lesson/:lesson_no",
        element: <ViewLesson></ViewLesson>,
        loader: () => fetch("../vocabularies.json"),
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "*",
    element: <h2>Error</h2>,
  },
]);
export default router;

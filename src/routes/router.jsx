import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import LetsLearn from "../pages/LetsLearn";
import Tutorials from "../pages/Tutorials";
import AboutUs from "../pages/AboutUs";
import Login from "../components/Login";
import ViewLesson from "../components/ViewLesson";
import ErrorPage from "../components/ErrorPage";
import Register from "../components/Register";
import MyProfile from "../pages/MyProfile";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "../components/ForgotPassword";
import UpdateProfile from "../components/UpdateProfile";

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
        element: (
          <PrivateRoute>
            <Tutorials></Tutorials>
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/my-profile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/lesson/:lesson_no",
        element: (
          <PrivateRoute>
            <ViewLesson></ViewLesson>
          </PrivateRoute>
        ),
        loader: () => fetch("../vocabularies.json"),
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword></ForgotPassword>,
  },
  {
    path: "/update-profile",
    element: <UpdateProfile></UpdateProfile>,
  },

  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
export default router;

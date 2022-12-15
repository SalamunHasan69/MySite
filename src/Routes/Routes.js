import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import ProjectsDetails from "../Home/ProjectsDetails";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/projects/:id',
        element: <ProjectsDetails></ProjectsDetails>
      }
    ]
  },
])
import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Sighin from "../Layout/SighinIn/Sighin";
import SighinUp from "../Layout/SighinUp/SighinUp";

import Classes from "../Pages/Classes/Classes";
import Privetroute from "./Privetroute";

import SelectClass from "../Pages/Dashbord/Student/SelectClass";
import DashbordRoute from "../Layout/Dashbord/DashbordRoute";
import ManagUsers from "../Pages/Dashbord/Admin/Managusers/ManagUsers";
import AddClass from "../Pages/Dashbord/Instractor/AddClass";
import MyClass from "../Pages/Dashbord/Instractor/MyClass";
import Pement from "../Pages/Dashbord/Pement/Pement";
import ManageClass from "../Pages/Dashbord/Admin/ManageClass";
import AllIntractor from "../Pages/AllIntractor/AllIntractor";
import ErrElement from "../Pages/ErrElement";
import Enrolldclass from "../Pages/Dashbord/Student/Enrolldclass";
import AdminRoute from "./AdminRoute";
import Instractorroute from "./Instractorroute";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrElement></ErrElement>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/classes",
          element: <Classes></Classes>
        },
        {
          path: "/allinstractor",
          element: <AllIntractor></AllIntractor>
        },
      ],
    },
    {
        path:"/sighinIn",
        element:<Sighin></Sighin>
    },
    {
        path:"/sighinUp",
        element:<SighinUp></SighinUp>
    },
    
    {
       path:"dashboard",
       element:<DashbordRoute></DashbordRoute>,
        children:[
          // user/student
          {
            path:"selected",
            element:<Privetroute><SelectClass></SelectClass></Privetroute>
          },
          {
            path:"enroll",
            element:<Privetroute><Enrolldclass></Enrolldclass></Privetroute>
          },
          {
            path:"pement",
            element:<Privetroute><Pement></Pement></Privetroute>
          },
          //admin 
          {
            path:"managUsers",
            element:<AdminRoute><ManagUsers></ManagUsers></AdminRoute>
          },
          {
            path:"managClass",
            element:<AdminRoute><ManageClass></ManageClass></AdminRoute>
          },
          // instractor
          {
            path:"addClass",
            element:<Instractorroute><AddClass></AddClass></Instractorroute>
          },
          {
            path:"myClass",
            element:<Instractorroute><MyClass></MyClass></Instractorroute>
          },
        
        ] 
      }
  ]);

export default router;
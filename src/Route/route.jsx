import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Sighin from "../Layout/SighinIn/Sighin";
import SighinUp from "../Layout/SighinUp/SighinUp";
import Dashbord from "../Pages/Dashbord/Dashbord";
import Classes from "../Pages/Classes/Classes";
import Privetroute from "./Privetroute";
import Test from "../Pages/Test";
import SelectClass from "../Pages/Dashbord/Student/SelectClass";
import DashbordRoute from "../Layout/Dashbord/DashbordRoute";
import ManagUsers from "../Pages/Dashbord/Admin/Managusers/ManagUsers";
import AddClass from "../Pages/Dashbord/Instractor/AddClass";
import MyClass from "../Pages/Dashbord/Instractor/MyClass";
import Pement from "../Pages/Dashbord/Pement/Pement";
import ManageClass from "../Pages/Dashbord/Admin/ManageClass";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
    //   errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/classes",
          element: <Classes></Classes>
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
        path:"/test",
        element:<Privetroute><Test></Test></Privetroute>
    },
    {
       path:"dashboard",
       element:<DashbordRoute></DashbordRoute>,
        children:[
          // user/student
          {
            path:"selected",
            element:<SelectClass></SelectClass>
          },
          {
            path:"pement",
            element:<Pement></Pement>
          },
          //admin 
          {
            path:"managUsers",
            element:<ManagUsers></ManagUsers>
          },
          {
            path:"managClass",
            element:<ManageClass></ManageClass>
          },
          // instractor
          {
            path:"addClass",
            element:<AddClass></AddClass>
          },
          {
            path:"myClass",
            element:<MyClass></MyClass>
          },
         {
          path:"dashbords",
          element:<Privetroute><Dashbord></Dashbord> </Privetroute>
         }
        ] 
      }
  ]);

export default router;
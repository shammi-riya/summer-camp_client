import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import ThemeProvider from "../Provider/ThemeProvider";


const Main = () => {
   
    return (
        <div >
           <ThemeProvider>
           <Navbar></Navbar>
           
           <Outlet></Outlet>
           
          
           <Footer></Footer>
           </ThemeProvider>
        </div>
    );
};

export default Main;
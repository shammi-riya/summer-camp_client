
import { useContext } from "react";
import Bannar from "../../../Componenet/Home/Bannar";
import Facility from "../../../Componenet/Home/Facility";
import Instructor from "../../../Componenet/Home/Instructor";
import Popolarclass from "../../../Componenet/Popolarclass";
import { ThemeContext } from "../../../Provider/ThemeProvider";


const Home = () => {
    const { darkMode } = useContext(ThemeContext);
    return (
       
         <div className={darkMode ? 'dark' : 'light'}>
            <Bannar></Bannar>
            <Popolarclass></Popolarclass>
            <Instructor></Instructor>
            <Facility></Facility>
        </div>
     
    );
};

export default Home;
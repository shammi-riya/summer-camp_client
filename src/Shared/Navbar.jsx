import { Link, NavLink } from "react-router-dom";
import logo2 from '../assets/logo2.png'
import { useContext } from "react";
import { AuthContext } from "../Provider/Authprovider";
import UseSelectClass from "../Hook/UseSelectClass";
import { ThemeContext } from "../Provider/ThemeProvider";
 


const Navbar = () => {
const [selectClass] = UseSelectClass()
const { darkMode, toggleTheme } = useContext(ThemeContext);
  const { logOut, users } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
        .then(() => { })
        .catch(error => console.log(error));
}






  const nav = <>
    <li className='px-2 text-xl text-white'><a href=""><NavLink className={({ isActive }) => isActive ? "text-white border-b-2 border-slate-50  " : "text-slate-50"} to="/">Home</NavLink></a></li>
    <li className='px-2 text-xl'><a href=""><NavLink className={({ isActive }) => isActive ? "text-white  border-b-2 border-slate-50 " : "text-slate-50"} to="/allinstractor">Instractor</NavLink></a></li>
    <li className='px-2 text-xl'><a href=""><NavLink className={({ isActive }) => isActive ? "text-white border-b-2 border-slate-50  " : "text-slate-50"} to="/classes">Classes</NavLink></a></li>
   
</>

  return (

    <div   className=" fixed w-full shadow-md bg-[#07332F] top-0 z-10 text-white">
      <div className="navbar md:px-10  lg:px-28">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-white">
              {nav}
            </ul>
          </div>
          <img className="h-20" src={logo2} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">

            {nav}

          </ul>
        </div>

        <div className="navbar-end">
          {
            users ? <>
<li className='px-2 text-xl'><NavLink className={({ isActive }) => isActive ? "text-white   border-b-2 border-slate-50" : "text-slate-50"} to="/dashboard"><button className="btn btn-sm">
      Dashbord
      <div className="badge">{selectClass.length}</div>
    </button>
    </NavLink></li>
          <div className="avatar mx-3">
                <div className="w-12">
                  <img src={users.photoURL} />
                </div>
              </div>

                <button onClick={handleLogOut} 
                className="btn">Sighin out</button>
             

             





            </> : <>
              <Link to="/sighinIn">
                <a className="btn">Login</a>
              </Link>

            </>
          }
       <div className="mx-2">
       <button
            onClick={toggleTheme}
            className="relative inline-flex items-center h-6 rounded-full w-12 bg-gray-300 dark:bg-gray-700"
          >
            <span
              className={`${
                darkMode ? 'translate-x-6' : 'translate-x-1'
              } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
            />
          </button>
       </div>
        </div>
      </div>
    </div>

  );

};

export default Navbar;
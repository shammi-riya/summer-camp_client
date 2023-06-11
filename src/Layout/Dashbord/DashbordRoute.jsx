import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import UseAdmin from "../../Hook/UseAdmin";
import UseInstructor from "../../Hook/UseInstructor";

const DashbordRoute = () => {
    const [isAdmin] = UseAdmin();

    

    const [isInstractor] = UseInstructor();
    console.log(isInstractor);
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content  flex flex-col items-center  md:my-0 md:justify-center lg:justify-between bg-slate-100">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side bg-slate-300">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu  p-4 w-83 h-full  text-base-content text-xl my-3">

                        {


                            isAdmin ? (<>
                                <li><NavLink to="/dashboard/managClass">Manage class</NavLink></li>

                                <li><NavLink to="/dashboard/managUsers"> manage users </NavLink></li>
                            </>)

                                : ( isInstractor?(<>

                                    <li><NavLink to="/dashboard/addClass"> Add Class</NavLink></li>
                                    <li><NavLink to="/dashboard/myClass"> My Class</NavLink></li>


                                </>):(<>

                            <li><NavLink to="/dashboard/selected"> Selected Classes</NavLink></li>
                            <li><NavLink to="/dashboard/pement"> pement</NavLink></li>


                        </>)
                        )}
                       






                        <div className="divider"></div>
                        <li><NavLink to="/"> Home</NavLink> </li>
                        <li><NavLink to="/menu"> Our Menu</NavLink></li>

                        <li><NavLink to="/order/contuct">contuct</NavLink></li>

                    </ul>

                </div>
            </div>
        </div >
    );
};

export default DashbordRoute;
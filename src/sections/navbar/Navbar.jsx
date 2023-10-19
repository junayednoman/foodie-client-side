import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo.png'

const Navbar = () => {

    const menu = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/add-product'>Add Product</NavLink></li>
        <li><NavLink to='/cart'>My Cart</NavLink></li>
    </>
    return (
        <div>
            <div className="max-w-7xl lg:px-10 px-0 lg:mx-auto md:mx-9 mx-3">
                <div className="navbar bg-base-100 py-5 md:py-9 px-0">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn pl-0 btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {menu}
                            </ul>
                        </div>
                        <Link to='/'>
                            <img className="w-[180px]" src={logo} alt="" />
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-base font-medium">
                            {menu}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <Link className="md:py-3 py-2 px-5 md:px-7  font-medium text-base border-2 hover:text-[#A4E889] duration-300 hover:bg-transparent border-[#A4E889] bg-[#A4E889]">Login</Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
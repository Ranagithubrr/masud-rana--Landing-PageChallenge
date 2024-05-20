import { useState } from 'react';
import Logo from '../../assets/logo.png';
import { FaBars, FaShoppingCart, FaTimes, FaUser } from "react-icons/fa";
const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    return (
        <nav className="bg-white flex justify-between items-center px-10 lg:px-14 py-4 ">
            <div className="flex items-center">
                <img src={Logo} alt="Logo" className="h-8 mr-2" />
            </div>
            <ul className={`z-[1000] py-6 md:py-0 m-0 text-center md:text-left block fixed md:flex justify-center space-x-4  top-0 ${mobileMenu ? 'left-0' : '-left-full'}  w-full bg-gray-200 md:bg-transparent md:static`}>
                <span className='absolute right-5 block md:hidden' onClick={() => setMobileMenu(false)}><FaTimes /></span>
                <li className="px-1 py-1 md:py-0 ml-4 md:ml-0">
                    <a href="#" className="text-gray-800 font-semibold hover:text-gray-900">Home</a>
                </li>
                <li className="px-1 py-1 md:py-0">
                    <a href="#" className="text-gray-800 font-semibold hover:text-gray-900">About Us</a>
                </li>
                <li className="px-1 py-1 md:py-0">
                    <a href="#" className="text-gray-800 font-semibold hover:text-gray-900">Products</a>
                </li>
                <li className="px-1 py-1 md:py-0">
                    <a href="#" className="text-gray-800 font-semibold hover:text-gray-900">Features</a>
                </li>
                <li className="px-1 py-1 md:py-0">
                    <a href="#" className="text-gray-800 font-semibold hover:text-gray-900">Reviews</a>
                </li>
                <li className="px-1 py-1 md:py-0">
                    <a href="#" className="text-gray-800 font-semibold hover:text-gray-900">Contact Us</a>
                </li>
            </ul>
            <div className="flex items-center">

                <button className="text-gray-700 focus:outline-none mr-4">
                    <FaShoppingCart />
                </button>
                <button className="text-gray-800 focus:outline-none">
                    <FaUser />
                </button>
                <button>
                    <span className='ml-4 block md:hidden' onClick={() => setMobileMenu(true)}><FaBars /></span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar
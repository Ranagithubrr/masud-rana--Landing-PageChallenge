import Logo from '../../assets/logo.png';
import { FaShoppingCart, FaUser } from "react-icons/fa";
const Navbar = () => {
    return (
        <nav className="bg-white p-4 flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
                <img src={Logo} alt="Logo" className="h-8 mr-2" />                
            </div>

            {/* Menu Items */}
            <ul className="flex justify-center space-x-4">
                <li>
                    <a href="#" className="text-gray-800 hover:text-gray-900">Home</a>
                </li>
                <li>
                    <a href="#" className="text-gray-800 hover:text-gray-900">About Us</a>
                </li>
                <li>
                    <a href="#" className="text-gray-800 hover:text-gray-900">Products</a>
                </li>
                <li>
                    <a href="#" className="text-gray-800 hover:text-gray-900">Features</a>
                </li>
                <li>
                    <a href="#" className="text-gray-800 hover:text-gray-900">Reviews</a>
                </li>
                <li>
                    <a href="#" className="text-gray-800 hover:text-gray-900">Contact Us</a>
                </li>
            </ul>

            {/* Icons */}
            <div className="flex items-center">
                <button className="text-gray-700 focus:outline-none mr-4">
                    <FaShoppingCart />
                </button>
                <button className="text-gray-800 focus:outline-none">
                   <FaUser />
                </button>
            </div>
        </nav>
    )
}

export default Navbar
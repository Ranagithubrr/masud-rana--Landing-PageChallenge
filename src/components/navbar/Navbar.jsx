import { useContext, useEffect, useState } from 'react';
import Logo from '../../assets/logo.png';
import { FaBars, FaShoppingCart, FaTimes, FaUser } from "react-icons/fa";
import { SidebarContext } from '../../context/SidebarContext';
import { ProductCartContext } from '../../context/ProductContext';
const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const { setSidebarContext } = useContext(SidebarContext);
    const { cart } = useContext(ProductCartContext);
    const [cartLength, setCartLength] = useState(0);    

    // calculating cart length
    const CalculateCartLength = () => {
        let totalLength = 0;
        for (let i = 0; i < cart.length; i++) {
            totalLength += cart[i].quantity;
        }
        setCartLength(totalLength);
    }
    useEffect(() => {
        CalculateCartLength();
    });

    // sticky class setting
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        function handleScroll() {
            // Checking if the user has scrolled past 500px and add sticky nav
            if (window.scrollY > 500) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <nav className={`bg-white flex justify-between items-center px-10 lg:px-14 py-4 ${scrolling ? 'fixed top-0 w-full z-20 shadow-sm lg:py-2' : ''} `}>
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
                    <a href="#products" className="text-gray-800 font-semibold hover:text-gray-900">Products</a>
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

                <button className="text-gray-700 focus:outline-none mr-4 relative text-2xl" onClick={() => setSidebarContext(true)}>
                    <span className='absolute -top-3 -right-3 text-xs h-6 w-6 flex items-center justify-center bg-yellow-500 rounded-full text-gray-100 font-bold'>{cartLength}</span>
                    <FaShoppingCart />
                </button>
                <button className="text-gray-800 focus:outline-none text-2xl">
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
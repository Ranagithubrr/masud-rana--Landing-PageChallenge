import { useContext, useState } from "react"
import { SidebarContext } from "../../context/SidebarContext";
import { AiOutlineClose } from "react-icons/ai";
import demoImg from '../../assets/glass.png'
import { GiShoppingCart } from "react-icons/gi";
import { FaRegTrashAlt } from "react-icons/fa";
import { ProductCartContext } from "../../context/ProductContext";
const Sidebar = () => {
    const { sidebar, setSidebarContext } = useContext(SidebarContext);
    const { cart, addToCart, removeFromCart } = useContext(ProductCartContext);
    return (
        <div>
            {
                sidebar &&
                <div className="fixed w-screen min-h-screen top-0 bg-gray-600 opacity-50 z-10" onClick={() => setSidebarContext(false)}></div>
            }

            <div className={`z-50 fixed bg-white ${sidebar ? 'right-0' : '-right-full'} transition-all duration-200 ease-in-out h-screen lg:w-3/12 top-0 overflow-y-scroll`}>
                <span className="text-5xl mx-5 mt-5 block"><GiShoppingCart /> </span>
                <span className='cursor-pointer absolute right-5 top-10' onClick={() => setSidebarContext(false)}><AiOutlineClose /></span>
                <div className="mt-2 px-4">
                    <span className="block font-bold text-lg">My Cart</span>
                    {
                        cart.length === 0 ?
                            <p className="my-10 text-center text-sm text-gray-500">There is no items yet</p>
                            : <span>Items</span>
                    }
                    {
                        cart.length !== 0 &&
                        cart.map((ele, index) => {
                            return (
                                <div className="flex border-b-2 pb-4" key={ele.id}>
                                    <div className="w-1/3">
                                        <img src={demoImg} alt="product-image" className="h-24" />
                                    </div>
                                    <div className="w-2/3 pl-2">
                                        <h4 className="font-semibold text-gray-700">{index + 1}. {ele.title}</h4>
                                        <p className="font-semibold text-gray-500 text-sm">Price: ${ele.price}</p>
                                        <span className="font-semibold text-gray-600 text-xs">Quantity</span>
                                        <div className="flex justify-between items-center">
                                            <div className="">
                                                <span className="px-2 font-semibold text-lg cursor-pointer">-</span>
                                                <span className="px-2 font-semibold text-lg cursor-pointer">{ele.quantity}</span>
                                                <span className="px-2 font-semibold text-lg cursor-pointer">+</span>
                                            </div>
                                            <span className="cursor-pointer hover:text-red-700" onClick={() => removeFromCart(ele.id)}><FaRegTrashAlt /></span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })

                    }
                </div>
            </div>


        </div>
    )
}

export default Sidebar
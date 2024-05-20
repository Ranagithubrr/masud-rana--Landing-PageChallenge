import { GiSunglasses } from "react-icons/gi";
import { IoMdSearch } from "react-icons/io";
import { MdOutlinePayment } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";


// step component

/* eslint-disable-next-line react/prop-types */
export const Step = ({ Icon, Title, Desc }) => {
    return (
        <div className="z-[10] mt-8">
            <div className="bg-orange-300 w-16 h-16 rounded-full mx-auto flex items-center justify-center">
                <span className="text-3xl text-gray-800">{Icon}</span>
            </div>
            <h4 className="font-semibold text-center text-lg mt-5">{Title}</h4>
            <p className="text-center font-base text-sm mt-1">{Desc}</p>
        </div>
    )
}

const Steps = () => {
    return (
        <div className="w-9/12 mx-auto -mt-16">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <Step Title="Search you sunglass" Desc="Shop Stylish Eyewear Now" Icon={<IoMdSearch />} />
                <Step Title="Select Sunglass " Desc="Shade Your Style" Icon={<GiSunglasses />} />
                <Step Title="Make Payment" Desc="Securely Checkout Now" Icon={<MdOutlinePayment />} />
                <Step Title="Received Product " Desc="See the World Clearly" Icon={<TbTruckDelivery />} />
            </div>
        </div>
    )
}

export default Steps
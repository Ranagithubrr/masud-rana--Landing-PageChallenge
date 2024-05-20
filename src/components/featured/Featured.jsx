import bg1 from '../../assets/1.png';
import bg2 from '../../assets/2.png';
import bg3 from '../../assets/3.png';
import bg4 from '../../assets/4.png';


const Featured = () => {
    return (
        <div className="w-full block lg:w-9/12 mx-auto my-10">
            <div className='h-full lg:h-[800px] lg:flex'>
                <div className='w-full lg:w-1/2 h-full mx-2'>
                    <div className="w-full h-[350px] lg:h-[55%] my-4  bg-center flex align-bottom justify-center" style={{
                        backgroundImage: `url(${bg1})`,
                        backgroundSize: '100% 100%'
                    }}
                    >
                        <div className='mt-auto mb-5 bg-white w-9/12 mx-auto rounded text-center py-4 px-4'>
                            <h5 className='font-bold text-lg text-gray-800'>Bravo Sunglasses</h5>
                            <p>Up to 80% off on selected item</p>
                            <button className='bg-gray-800 mb-2 hover:bg-gray-700 text-gray-100 rounded font-semibold px-6 py-2 outline-none flex items-center justify-center mt-4 mx-auto '>Buy Now</button>
                        </div>
                    </div>
                    <div className="w-full h-[350px] lg:h-[45%]  bg-center flex align-bottom justify-center" style={{
                        backgroundImage: `url(${bg3})`,
                        backgroundSize: '100% 100%'
                    }}
                    >
                        <div className='mt-auto mb-5 bg-white w-9/12 mx-auto rounded text-center py-4 px-4'>
                            <h5 className='font-bold text-lg text-gray-800'>John Jacobs</h5>
                            <p>Up to 40% off on selected item</p>
                            <button className='bg-gray-800 mb-2 hover:bg-gray-700 text-gray-100 rounded font-semibold px-6 py-2 outline-none flex items-center justify-center mt-4 mx-auto '>Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 h-full mx-2'>
                    <div className="w-full h-[350px] lg:h-[45%] my-4  bg-center flex align-bottom justify-center" style={{
                        backgroundImage: `url(${bg2})`,
                        backgroundSize: '100% 100%'
                    }}
                    >
                        <div className='mt-auto mb-5 bg-white w-9/12 mx-auto rounded text-center py-4 px-4'>
                            <h5 className='font-bold text-lg text-gray-800'>Tommy Hilfiger</h5>
                            <p>Up to 30% off on selected item</p>
                            <button className='bg-gray-800 mb-2 hover:bg-gray-700 text-gray-100 rounded font-semibold px-6 py-2 outline-none flex items-center justify-center mt-4 mx-auto '>Buy Now</button>
                        </div>
                    </div>
                    <div className="w-full h-[350px] lg:h-[55%]  bg-center flex align-bottom justify-center" style={{
                        backgroundImage: `url(${bg4})`,
                        backgroundSize: '100% 100%'
                    }}
                    >
                        <div className='mt-auto mb-5 bg-white w-9/12 mx-auto rounded text-center py-4 px-4'>
                            <h5 className='font-bold text-lg text-gray-800'>Vincent Chase</h5>
                            <p>Up to 10% off on selected item</p>
                            <button className='bg-gray-800 mb-2 hover:bg-gray-700 text-gray-100 rounded font-semibold px-6 py-2 outline-none flex items-center justify-center mt-4 mx-auto '>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured
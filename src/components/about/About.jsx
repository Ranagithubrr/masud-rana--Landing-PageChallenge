import glassImg from '../../assets/glass.png';

const About = () => {
    return (
        <div className="lg:flex my-20 lg:h-[30rem]">
            <div className='w-full lg:w-1/2 bg-orange-300 px-5 py-8 lg:pl-40 lg:py-8 h-full flex items-start justify-center flex-col'>
                <div>
                    <h4 className='font-bold text-3xl text-gray-800'>Experience clear vision with OptiChroma Vision Frames</h4>
                    <p className='text-md text-gray-700 mt-3 lg:pr-10'>
                        At OptiChroma, we believe that everyone deserves clear vision and stylish eyewear. Thats why weve designed a collection of frames that prioritize both form and function.
                    </p>
                    <p className='text-md text-gray-700 mt-3 lg:pr-10'>
                        Our team of experts is dedicated to helping you find the perfect pair of glasses.
                    </p>
                    <button className='bg-gray-900 hover:bg-gray-700 text-gray-100 rounded font-semibold px-6 py-2 outline-none mt-4'>About Us</button>
                </div>
            </div>

            <div className='w-full lg:w-1/2 h-full'>
                <img src={glassImg} alt="glassImg" className='object-cover h-full w-full' />
            </div>           
        </div>

    )
}

export default About
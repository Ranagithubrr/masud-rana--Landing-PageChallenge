import { FaShoppingCart } from 'react-icons/fa'
import BgImage from '../../assets/slder-bg-man.png'
/* eslint-disable-next-line react/prop-types */
const Mainslider = ({ Title }) => {
    return (
        <div className="bg-gray-200 pt-8">
            <div style={{
                backgroundImage: `url(${BgImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'auto 100%',
                backgroundPosition: 'center',
                maxHeight: '918px',
                minHeight: '400px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'left',

            }}
                className='px-4 lg:pl-40'
            >
                <div className='bg-gray-200 md:bg-transparent p-4 rounded bg-opacity-70 py-8 w-full text-center md:text-left'>
                    <h1 className='font-bold text-xl  lg:text-4xl text-gray-900 lg:w-[28rem]'>
                        {Title}
                    </h1>
                    <button
                        onClick={() => window.location.href = '#products'}
                        className='bg-gray-900 hover:bg-gray-700 text-gray-100 rounded font-semibold px-6 py-2 outline-none flex items-center justify-center mt-8 mx-auto md:ml-0'
                    >
                        <span className='mr-2'><FaShoppingCart /></span> Buy Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Mainslider
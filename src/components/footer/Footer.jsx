import Logo from '../../assets/logo.png';
const Footer = () => {
    return (
        <footer className="w-9/12 mt-24 mx-auto text-gray-700 pt-12 pb-6">
            <div className="container mx-auto flex flex-wrap justify-between">

                <div className="w-full md:w-1/2 lg:w-2/5 mb-8">
                    <img src={Logo} alt="Logo" className="h-12 mb-4" />
                    <p className="text-sm md:w-3/4">Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampde</p>
                </div>


                <div className="w-full md:w-1/2 lg:w-1/5 mb-8">
                    <h5 className="text-lg font-semibold mb-4">Support</h5>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-gray-500">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-gray-500">Terms & Conditions</a></li>
                        <li><a href="#" className="hover:text-gray-500">Product FAQs</a></li>
                        <li><a href="#" className="hover:text-gray-500">Company Support</a></li>
                        <li><a href="#" className="hover:text-gray-500">Manage Account</a></li>
                    </ul>
                </div>


                <div className="w-full md:w-1/2 lg:w-1/5 mb-8">
                    <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-gray-500">About Us</a></li>
                        <li><a href="#" className="hover:text-gray-500">Blog Post</a></li>
                        <li><a href="#" className="hover:text-gray-500">Product Features</a></li>
                        <li><a href="#" className="hover:text-gray-500">Company Info</a></li>
                        <li><a href="#" className="hover:text-gray-500">Other Info</a></li>

                    </ul>
                </div>


                <div className="w-full md:w-1/2 lg:w-1/5 mb-8">
                    <h5 className="text-lg font-semibold mb-4">Community</h5>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-gray-500">Become an affiliate</a></li>
                        <li><a href="#" className="hover:text-gray-500">Help Center</a></li>
                        <li><a href="#" className="hover:text-gray-500">Product FAQs</a></li>
                        <li><a href="#" className="hover:text-gray-500">Our Fourms</a></li>
                        <li><a href="#" className="hover:text-gray-500">Product API</a></li>

                    </ul>
                </div>
            </div>
            <div className="container mx-auto flex justify-between items-center mt-8">
                <p className="text-sm">&copy; 2023 All rights reserved by Eyeglass</p>
                <div>
                    <a href="#" className="text-sm text-gray-500 hover:text-gray-300 mr-4">Privacy Policy</a>
                    <a href="#" className="text-sm text-gray-500 hover:text-gray-300">Terms of Service</a>
                </div>
            </div>
        </footer>

    )
}

export default Footer
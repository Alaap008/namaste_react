import { useSelector } from "react-redux";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";


const Header = () => {  
    const cartItems = useSelector((store) => store.cart.items);
    return (
       <div className="sticky top-0 z-50 bg-white shadow-lg border-b border-gray-200" >
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
            <Link to="/" className="flex">
                <img className="h-10 w-auto" src ={LOGO_URL}/>
                <span className="ml-2 text-xl font-bold text-orange-500 pt-1">FoodieExpress</span>
            </Link>
            </div>
            <div className="hidden md:block">
                <ul className="flex space-x-8">
                    <li><Link to="/" className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200">Home</Link></li>
                    <li><Link to="/about" className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200">About</Link></li>
                    <li><Link to="/contact" className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200">Contact Us</Link></li>
                    <li><Link to="/cart" className="text-gray-700 hover:text-orange-500 font-medium cursor-pointer transition-colors duration-200 flex items-center">
                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8" />
                        </svg>
                        Cart-{cartItems.length}
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
       </div>
       </div>
    )
}

export default Header;
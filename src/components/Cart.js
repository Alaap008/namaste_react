import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cart.items);
    
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-4xl mx-auto px-4">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">Your Cart</h1>
                    {cartItems?.length > 0 && (
                        <button
                            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
                            onClick={handleClearCart}
                        >
                            Clear Cart
                        </button>
                    )}
                </div>
                
                {cartItems?.length === 0 ? (
                    <div className="text-center py-12">
                        <h2 className="text-2xl font-semibold text-gray-600">Your cart is empty</h2>
                        <p className="text-gray-500 mt-2">Add some delicious items to your cart!</p>
                    </div>
                ) : (
                    <ItemList items={cartItems} isCart={true} />
                )}
            </div>
        </div>
    );
}

export default Cart;
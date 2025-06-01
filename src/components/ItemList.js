import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items, isCart = false }) => {
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    };

    return (
        <div className="space-y-4">
            {items?.map((item) => (
                <div 
                    key={item.card.info.id} 
                    className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                    <div className="p-6">
                        <div className="flex justify-between items-start gap-4">
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    {item.card.info.name}
                                </h3>
                                {item.card.info.description && (
                                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                                        {item.card.info.description}
                                    </p>
                                )}
                                <div className="flex items-center justify-between mt-4">
                                    <span className="text-lg font-bold text-orange-600">
                                        ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                                    </span>

                                    {!isCart ? (
                                        <button 
                                            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2" 
                                            onClick={() => handleAddItem(item)}
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                            </svg>
                                            Add
                                        </button>
                                    ) : (
                                        <div className="flex items-center gap-2">
                                            <span className="text-gray-600 font-medium">Quantity:</span>
                                            <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full font-medium">
                                                {item.quantity || 1}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                            {item.card.info.imageId && (
                                <div className="flex-shrink-0">
                                    <img 
                                        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item.card.info.imageId}`}
                                        alt={item.card.info.name}
                                        className="w-24 h-24 object-cover rounded-lg"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;
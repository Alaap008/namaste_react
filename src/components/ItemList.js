import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";


const ItemList =( itemCards )=>{
    const dispatch = useDispatch();
    const handleAddItem = (item)=>{
        dispatch(addItem(item))

    }
    const location = useLocation();
    return (
                            <div className="divide-y divide-gray-100">
                        {itemCards?.itemCards?.map((item) => (
                            <div key={item.card.info.id} className="p-6 hover:bg-gray-50 transition-colors duration-200">
                                <div className="flex justify-between items-start">
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                            {item.card.info.name}
                                        </h3>
                                        {item.card.info.description && (
                                            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                                                {item.card.info.description}
                                            </p>
                                        )}
                                        <div className="flex items-center justify-between">
                                            <span className="text-lg font-bold text-orange-600">
                                                ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                                            </span>

                                            { !location.pathname.includes('cart') &&
                                            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center" 
                                            onClick={()=> handleAddItem(item)}>
                                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                </svg>
                                                Add
                                            </button> 
                                            }
                                            { location.pathname.includes('cart') &&
                                            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center" >
                                               {item.quantity}
                                            </button> 
                                            }
                                        </div>
                                    </div>
                                    {item.card.info.imageId && (
                                        <div className="ml-4">
                                            <img 
                                                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item.card.info.imageId}`}
                                                alt={item.card.info.name}
                                                className="w-20 h-20 object-cover rounded-lg"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
    )
}

export default ItemList;
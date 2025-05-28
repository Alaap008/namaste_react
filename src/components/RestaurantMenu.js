import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId)
    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    console.log(name, cuisines, costForTwoMessage);
    console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Restaurant Header */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-8">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold mb-2">{name}</h1>
                    <p className="text-lg opacity-90">
                        {cuisines?.join(", ")} • {costForTwoMessage}
                    </p>
                </div>
            </div>

            {/* Menu Section */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="bg-orange-50 px-6 py-4 border-b border-orange-100">
                        <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                            <svg className="w-6 h-6 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                            Menu
                        </h2>
                    </div>
                    
                    <div className="divide-y divide-gray-100">
                        {itemCards?.map((item) => (
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
                                            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center">
                                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                </svg>
                                                Add
                                            </button>
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
                </div>
            </div>
        </div>
    )
}

export default RestaurantMenu

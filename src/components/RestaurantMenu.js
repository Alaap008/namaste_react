import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId)
    const [ showIndex, setShowIndex ] = useState(0);  
    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
    const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    console.log(categories);

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
            {categories.map((category, index) => (
                <RestaurantCategory  key={category?.card?.card.title} data={category?.card?.card}  index={index} showIndex={showIndex} setShowIndex={setShowIndex} ></RestaurantCategory>
            ))}
            {/* <RestaurantCategory></RestaurantCategory> */}
        </div>
    )
}

export default RestaurantMenu

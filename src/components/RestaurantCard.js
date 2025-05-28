import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
    const { resData } = props;
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        sla,
    } = resData || {};
    const restaurantId = resData.id?.toString();
    return (
    <Link to={"/restaurant/" + restaurantId}>
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
        <div className="absolute top-3 right-3">
          <div className="bg-green-500 text-white px-2 py-1 rounded-md text-sm font-semibold flex items-center">
            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            {avgRating}
          </div>
        </div>
        {sla?.deliveryTime && (
          <div className="absolute bottom-3 left-3">
            <div className="bg-white bg-opacity-90 text-gray-800 px-2 py-1 rounded-md text-sm font-medium">
              {sla.deliveryTime} mins
            </div>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-1">{name}</h3>
        <p className="text-gray-600 text-sm mb-2 line-clamp-1">{cuisines?.join(", ")}</p>
        <div className="flex justify-between items-center">
          <span className="text-gray-800 font-semibold">{costForTwo}</span>
          <div className="flex items-center text-orange-500">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium">{sla?.deliveryTime} mins</span>
          </div>
        </div>
      </div>
    </div>
    </Link>
    )
}

export default RestaurantCard;
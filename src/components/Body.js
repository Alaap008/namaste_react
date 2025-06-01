import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
//Comment
const Body = () =>{

    const [listOfRestaurants, setlistOfRestaurants] = useState([]);
    const [filterList, setFilterList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(()=>{
        fetchData();
    },[])
    const fetchData  = async () =>{
        let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.52110&lng=73.85020&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        data= await data.json();
        setlistOfRestaurants(
            data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
          );
          setFilterList(
            data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
          );     
    }
    return listOfRestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-orange-400 to-orange-600 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold mb-4">Order food online from your favorite restaurants</h1>
                    <p className="text-xl opacity-90">Discover the best food & drinks in your city</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Search and Filter Section */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div className="flex-1 max-w-md">
                            <div className="relative">
                                <input 
                                    type="text" 
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                                    placeholder="Search for restaurants, cuisines..."
                                    value={searchTerm}
                                    onChange={(e)=>{
                                        setSearchTerm(e.target.value);
                                    }}
                                />
                                <svg className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <button 
                                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center"
                                onClick={() =>{
                                    console.log("Button Clicked");
                                    setFilterList(listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchTerm)));
                                }}
                            >
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                Search
                            </button>
                            <button 
                                className="bg-white border border-orange-500 text-orange-500 hover:bg-orange-50 px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center"
                                onClick={() =>{
                                    setlistOfRestaurants( resList.filter(res => (res.data.avgRating) > 4.5))
                                }}
                            >
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                                Top Rated
                            </button>
                        </div>
                    </div>
                </div>

                {/* Restaurants Section */}
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Restaurants near you</h2>
                    <p className="text-gray-600">Discover unique tastes near you</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filterList.map((res) => (
                        <RestaurantCard key={res.info.id} resData={res.info} />
                    ))}
                </div>
            </div>
        </div> 
    ) 
}

export default Body;
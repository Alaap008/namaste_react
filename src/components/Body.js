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
        <div className="body">
        <div className="search">
            <input type="text" 
                className="search"
                value={searchTerm}
                onChange={(e)=>{
                    setSearchTerm(e.target.value);
                }}
            />
                <button onClick={() =>{
                    console.log("Button Clicked");
                    setFilterList(listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchTerm)));

                }}>
                Search
                </button> 
        </div>
        <button className="filter-btn" onClick={() =>{
            setlistOfRestaurants( resList.filter(res => (res.data.avgRating) > 4))
            
        }} >
        Top Rated Restaurants
        </button>
        <div className="res-container">
        {filterList.map((res) => (
            <RestaurantCard key={res.info.id} resData={res.info} />
        ))}
        </div>
        </div> 
    ) 
}



export default Body;
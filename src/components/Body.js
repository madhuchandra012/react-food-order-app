import React from "react";
import RestaurantCard from "./RestaurantCard";
// import resObject from "../utils/mockData";
import { useState, useEffect } from "react";
import axios from "axios";
import Shimmer from "./Shimmer";

const Body = () => {
  // State Variable
  const [restaurantData, setRestaurantData] = useState([]);

  // use Effect will be called after the component is rendered
  useEffect(() => {
    console.log("useEffect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.046978025628452&lng=77.7414820343256&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restData = json.data.cards;
    const restaurants = restData.filter((rest) => {
      const id = rest.card.card.id;
      if (id !== undefined && id == "restaurant_grid_listing") {
        return rest;
      }
    });
    console.log("restaurants");
    console.log(
      restaurants[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setRestaurantData(
      restaurants[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  if (restaurantData.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterdList = restaurantData.filter(
              (restaurant) => restaurant.info.avgRating >= 4
            );
            setRestaurantData(filterdList);
            // console.log(filterdList);
          }}
        >
          Filter top rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {console.log("restaurantsData")}
        {console.log(restaurantData)}
        {restaurantData.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

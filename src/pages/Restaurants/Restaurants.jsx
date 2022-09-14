import React from 'react'
import { useEffect, useState } from "react";
import { API } from "../../services/API";
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
  
const Restaurants = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
   
    
      const getAllRestaurants = async () => {
        API.get("/restaurants").then((res) => {
          setAllRestaurants(res.data.data.restaurant);
    
          console.log(allRestaurants)
        });
      };          
       
      useEffect(() => {
        getAllRestaurants();
      }, );
    
    
      return (
        <section>        

            {allRestaurants.length ? allRestaurants.map((restaurant) => <RestaurantCard restaurant={restaurant} key={restaurant._id}
             />) : <p>Loading Restaurant... </p>}                   
          
        </section>

      )

   


   
}

export default Restaurants
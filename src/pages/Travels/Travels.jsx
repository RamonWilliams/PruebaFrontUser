import React from 'react'
import { useEffect, useState } from "react";
import { API } from "../../services/API";
import TravelCard from '../../components/TravelCard/TravelCard';
  
const Travels = () => {
    const [allTravels, setAllTravels] = useState([]);
   
    
      const getAllTravels = async () => {
        API.get("/travel").then((res) => {
          setAllTravels(res.data.data.travel);
    
          console.log(allTravels)
        });
      };          
       
      useEffect(() => {
        getAllTravels();
      }, );
    
    
      return (
        <section>        

            {allTravels.length ? allTravels.map((travel) => <TravelCard travel={travel} key={travel._id}
             />) : <p>Loading Travel... </p>}                   
          
        </section>

      )

   


   
}

export default Travels
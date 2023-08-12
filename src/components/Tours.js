import React, { useState } from "react";
import Card from "./Card";
import data from "../data";

const Tours = () => {

    const[tours,setTours] = useState(data);
    const[onetour,setOneTour] = useState(true);


    function removeTour(id) {
        const newTours = tours.filter((tour) => tour.id !== id)
        setTours(newTours);
    }

    function addTour(id){
        const newTours = tours.filter((tours) => tours.id === id)
        setTours(newTours);
        setOneTour(false);

    }

    if(tours.length===0){
        return(
            <div className='refresh'>
                <h2>No Tour Refresh</h2>
                <button className='btn-white' onClick={()=>setTours(data)}>Refresh</button>
            </div>
        )
    }

    return(
       <div className="container">
        <div className="title">
            <h2>Plan With Ajay</h2>
        </div>

        <div className="cards">
            {tours.map((singleTour) =>{
                return(
                    <Card {...singleTour} key={singleTour.id} removeTour={removeTour} addTour={addTour} onetour={onetour} />
                );
            })}
        </div>
       </div>
    );
}

export default Tours;
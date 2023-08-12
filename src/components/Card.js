import React, { useState } from "react";



const Card = ({
    id,
    image, 
    info, 
    price, 
    name, 
    removeTour, 
    addTour,
    onetour,}) =>{

        let description = `${info.substring(0,200)}...`;
        
        const[readMore,setReadM] = useState(false);

        const clickHandaler = () => {
            setReadM(!readMore);
        }
        
        return(
            <div className="card">
                <img src={image} alt="card" className="image"/>
                <div className="tour-info">
                    <div className="tour-deatils">
                        <h4 className="tour-price">₹{price}</h4>
                        <h4 className="tour-name">{name}</h4>
                    </div>
                    <div className="description">
                        {readMore ? info : description}
                        <span className="read-more" onClick={clickHandaler}>
                            {readMore ? "Show Less" : "Read More"}
                        </span>
                    </div>
                </div>

                <div className="btn-div">
               
                <button className="btn-grn" onClick={() => addTour(id)}>
                    Interested
                </button>

                <span className="or">Or</span>

                <button className="btn-red"
                onClick={() => removeTour(id)}>
                    Not Interested
                </button>

                </div>
            </div>
        );
    }

 

export default Card;
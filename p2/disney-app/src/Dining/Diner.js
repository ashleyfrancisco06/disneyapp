import React from "react"

function Diner(props){
  
        return(
             <div>
                        <h2> Name:{props.diner.name}</h2>
                        <p> Cuisine: {props.diner.cuisine} </p>
                        <p> Quality Rating: {props.diner.counter_quality_rating} </p>
                        <p> Food Selections: {props.diner.selection}</p>
                    </div>
        )
    
}

export default Diner;
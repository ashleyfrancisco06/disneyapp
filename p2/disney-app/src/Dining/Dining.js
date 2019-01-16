import React, { Component } from 'react'
import axios from 'axios';

class Dining extends Component{
    constructor(props){
        super(props)

        this.state={
            diner: []
        }
    }

    componentDidMount(){
        this.fetchData()
    }

    fetchData= async()=>{
        const DIN_API = await axios('https://touringplans.com/magic-kingdom/dining.json');
        console.log(DIN_API.data)
        const diner = DIN_API.data
        this.setState({diner: diner[0]});
    }

 
     render(){
        console.log(this.state.diner)
       const diners = this.state.diner
       const renderDiners=
            diners.map((diner, id) =>{
                return(
                    <div key={id}>
                        <h2> Name:{diner.name}</h2>
                        <p> Cuisine: {diner.cuisine} </p>
                        <p> Quality Rating: {diner.counter_quality_rating} </p>
                        <p> Food Selections: {diner.selection}</p>
                    </div>
                    // <Diner />
                )
            })
       
       return(
           <div>
               <h1>Dining</h1>
               {renderDiners}
           </div>
            
        )
    }
}


export default Dining
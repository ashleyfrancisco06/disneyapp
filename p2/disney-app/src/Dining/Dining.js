import React, { Component } from 'react'
import axios from 'axios';
import Diner from "./Diner";
import './main.css'

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
            diners.map(diner =>{
                return(
                    <Diner diner={diner} />
                )
            })
       
       return(
           <div className="dining">
               <h1>Dining</h1>
               {renderDiners}
           </div>
            
        )
    }
}


export default Dining
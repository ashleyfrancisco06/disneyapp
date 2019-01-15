import React, { Component } from "react"
import axios from "axios"
import "./main.css"

class Attractions extends Component {
    constructor(props){
        super(props)

        this.state={
            attractions: []
        }

    }
    fetchData = async() => {
        const ATR_API = await axios('https://touringplans.com/magic-kingdom/attractions.json');
        // console.log(ATR_API.data[0].name)
        const attractions = ATR_API.data.slice(0,12)
        this.setState({attractions})
    }


    componentDidMount(){
        this.fetchData()
    }
    render(){
        console.log(this.state.attractions)
        const attractions = this.state.attractions
        const renderAttractions = (
            attractions.map((att, id) =>{
                return(
                    <div key={id}>
                        {att.name}
                    </div>
                )
            })
        )
        return(
            <div className="attractions">
                <h1>Attractions!!!!</h1>
                <div className="grid">
                {renderAttractions}
                </div>
               
            </div>
            
        )
    }
}
export default Attractions 
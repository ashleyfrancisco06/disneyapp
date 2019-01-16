import React, { Component } from "react"
import axios from "axios"
import "./main.css"
import attractionImg from "./AttractionImg"

console.log(attractionImg[0].image)

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
                    <div key={id} className="grid">
                        {att.name}
                       
                    </div>
                )
            })
        )
        console.log(attractionImg)

        const images = attractionImg
         const renderImages =(
            images.map((image, id) =>{
                return(
                    <div key={id} className="grid">
                    {image.image}
                    </div>
                )
            })
         )
            
          
         console.log(renderImages)

        return(
            <div>
                <h1>Attractions</h1>
                <div className="attractions">
                    {renderAttractions}
                    {renderImages}   
                </div>
            </div>
            
        )
    }
}
export default Attractions 
import React, { Component } from "react"
import "./main.css"

class Home extends Component {
    render(){
        return(
            <div className="home">
                <h1>Welcome To Disney's Magic Kingdom</h1>
                <h2>Here you can find the Attractions and Dining spots in Disney's Magic Kingdom</h2>
                <p className="quote">
               "All our dreams can come true, 
               if we have the courage to pursue them."
                </p>
            </div>
            
        )
    }
}
export default Home
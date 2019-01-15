import React, { Component } from "react"
import {Route} from "react-router-dom"
import Home from "../Home/Home";
import Attractions from "../Attractions/Attractions";

class Main extends Component{
    render(){
        return(
            <main>
                <div className="main">
                    <Route path="/Home" component={Home} />
                    <Route path="/Attractions" component={Attractions}/>
                </div>
            </main>
        )
    }
}

export default Main
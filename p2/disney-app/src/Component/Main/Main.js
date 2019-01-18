import React, { Component } from "react"
import {Route} from "react-router-dom"
import Home from "../Home/Home";
import Attractions from "../Attractions/Attractions";
import Dining from "../Dining/Dining";
import "./main.css";




class Main extends Component{
    render(){
        return(
            <main>
                <div className="main">
                    <div className="parainner">
                        <Route exact path="/" component={Home} />
                        <Route path="/Attractions" component={Attractions}/>
                        <Route path="/Dining" component={Dining} />
                    </div>
                    
                    
                </div>
            </main>
        )
    }
}

export default Main;
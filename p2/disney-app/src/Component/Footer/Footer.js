import React, { Component } from 'react'
import './main.css'

class Footer extends Component{
    render(){
        return(
            <div className="footer">
               <ul>
                   <li><i className="fab fa-facebook-square"></i></li>
                   <li><i className="fab fa-instagram"></i></li>
                   <li><i className="fab fa-twitter-square"></i></li>
               </ul>
            </div>
        )
    }
}

export default Footer
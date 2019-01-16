import React, { Component } from 'react'
import './main.css'

class Footer extends Component{
    render(){
        return(
            <div className="footer">
               <ul>
                   <li><i class="fab fa-facebook-square"></i></li>
                   <li><i class="fab fa-instagram"></i></li>
                   <li><i class="fab fa-twitter-square"></i></li>
               </ul>
            </div>
        )
    }
}

export default Footer
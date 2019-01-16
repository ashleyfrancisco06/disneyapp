import React from "react"
import { Link } from "react-router-dom"
import "./main.css"


function Header(){
    return(
        <div className="header">
           <img src="http://www.freelogovectors.net/wp-content/uploads/2018/02/disney-parks-logo.png" className="headerImg" />
            <nav>
                
                <Link to="/Attractions"><li>Attractions</li></Link> 
                <Link to="/Home"><li>Home</li></Link>
                <Link to="/Dining"><li>Dining</li></Link>
               
            </nav>
        
        </div>
    )
}

export default Header
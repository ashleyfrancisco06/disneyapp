import React from "react"
import { Link } from "react-router-dom"

function Header(){
    return(
        <div className="header">
            <h1>Disney's Magic Kingdom</h1>
            <nav>
                
                <Link to="/Attractions"><li>Attractions</li></Link> 
                <Link to="/Home"><li>Home</li></Link>
               
            </nav>
        
        </div>
    )
}

export default Header
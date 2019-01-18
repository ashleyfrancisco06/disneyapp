import React from "react"
import { Link } from "react-router-dom"
import "./main.css"

const navStyling={
    textDecoration: 'none',
    color:'grey',
    fontFamily: "'Shadows into light', cursive"
}
function Header(){
    return(
        <div className="header">
           <img src="http://www.freelogovectors.net/wp-content/uploads/2018/02/disney-parks-logo.png" className="headerImg" alt="" />
            <nav>
                <Link to="/Attractions" style={navStyling}><li className="nav">Attractions</li></Link> 
                <Link to="/" style={navStyling}><li className="nav">Home</li></Link>
                <Link to="/Dining" style={navStyling}><li className="nav">Dining</li></Link>
               
            </nav>
        
        </div>
    )
}



export default Header
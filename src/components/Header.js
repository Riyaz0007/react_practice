import React from "react"
import '../styles/header.css'

function Header({title}){
    return(
        <>
        <header className="header">
            <div className="inner-div-1">
                <span className="home-span">{title}</span>
                <span>Logo</span>
            </div>
            <ul className="inner-ul">
                <li>About</li>
                <li>Contact Us</li>
                <li>Help</li>
                <li>Dashboard</li>
            </ul>
        </header>
        
        
        </>
    )
}
export default Header;
import React from 'react'
import './styles/aboutme.css'

function Navbar(){
    return(
        <ul id='navbar'>
            <li onClick={(e)=>{window.location.href='/'}}>Home</li>  
            <li onClick={(e)=>{window.location.href='/giveaway/'}}>Giveaway!</li>
            <li onClick={(e)=>{window.location.href='/wallpapers/'}}>Wallpapers</li>
            <li onClick={(e)=>{window.location.href='/tips/'}}>Art Tips</li>

            <a className='fa fa-instagram' href="https://www.instagram.com/__devart/">{""}</a>
            {/* <a class='fa fa-facebook' href="https://www.facebook.com/developing.artist"></a> */}
        </ul>
    )
}

export default Navbar;

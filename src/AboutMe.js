import React from 'react'
import './styles/aboutme.css'

function AboutMe(){
    return(
        <div className='aboutRoot'>
            <img className='avatar' src={'https://wrswider.me/devartscr/resources/avatar.jpg'} onClick={(e)=>{window.location.href='/'}} alt='Avatar' />
            <div className='aboutDescription'>
                <h2>{`devart`}</h2>
                {`Hey!👋 Welcome to my little kingdom of cute drawings and magic!🥰✨`}
            </div>
        </div>
    )
}

// function Socials(){
//     return(
//         <div className="socialMedia">
//             <a href="https://www.facebook.com/developing.artist" className="fa fa-facebook">{""}</a>
//             <a href="https://www.instagram.com/__devart/" className="fa fa-instagram">{""}</a>
//         </div>
//     );

// }

export {AboutMe};

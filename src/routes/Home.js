import React from 'react';
import {AboutMe} from '../AboutMe'
import Item from './home/Item'

function Home(){
    return(
        <div className='subRoot'>
            <AboutMe/>
            <div className='body'>
                <Item img={'https://wrswider.me/devartscr/resources/wallpapers.png'} title="Wallpapers" link='/wallpapers/'/>
                <Item img={'https://wrswider.me/devartscr/resources/art_tips.png'} title="Art Tips" link='/tips/'/>
            </div>
        </div>
    );
}

export default Home;
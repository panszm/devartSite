import React from 'react';
import {AboutMe} from '../AboutMe'
import Item from './home/Item'

function Home(){
    return(
        <div className='subRoot'>
            <div className='body'>
            <AboutMe/>
                <Item img={'https://wrswider.me/devartscr/resources/giveaway.png'} title="Giveaway" link='/giveaway/'/>
                <Item img={'https://wrswider.me/devartscr/resources/wallpapers.png'} title="Wallpapers" link='/wallpapers/'/>
                <Item img={'https://wrswider.me/devartscr/resources/art_tips.png'} title="Art Tips" link='/tips/'/>
            </div>
        </div>
    );
}

export default Home;
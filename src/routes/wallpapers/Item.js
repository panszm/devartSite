import React from 'react';

function Item(props){
    return(
        // <a href={'https://wrswider.me/devartscr/getWallpaper.php?fname='+props.title} className='itemBox' onClick={(e)=>{increment(props.title)}} download>
    <a href={props.img} className='itemBox' onClick={(e)=>{increment(props.title)}} download>
        <img className='itemIcon' src={props.img} alt={props.title}/>
        <div className='itemTitle' >{props.title.split('.').slice(0, -1).join('.').split('_').slice(2).join('_')}</div>
    </a>
    );
}

function increment(fname){
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const fd = new FormData();
    fd.append('name',fname);
    fetch('https://wrswider.me/devartscr/index.php',
    {
        method: 'POST',
        body: fd,
        headers: headers,
        mode: 'no-cors'
    });
}

export default Item;
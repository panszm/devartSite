import React from 'react';

function Item(props){
    return(
        <div className='itemBox' onClick={(e)=>window.location.href=props.link}>
            <img className='itemIcon' src={props.img} alt={props.title}/>
            <div className='itemTitle'>{props.title}</div>
        </div>
    );
}

export default Item;
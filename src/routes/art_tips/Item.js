import React, { Component } from 'react'

class Item extends Component{

    render(){
        return(
            <div className='itemPreview' onClick={()=>this.props.func(this.props.img)}>
                <img className='itemIcon' src={this.props.icon} alt={this.props.title}/>
                {/* <div className='itemTitle' >{this.props.title.split('.').slice(0, -1).join('.').split('_').slice(1).join('_')}</div> */}
            </div>
        )
    }
}

export default Item;
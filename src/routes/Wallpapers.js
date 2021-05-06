import React, { Component } from 'react'
import {AboutMe} from '../AboutMe'
import Item from './wallpapers/Item'
import '../styles/menu2.css'

class Wallpapers extends Component{

constructor(props){
    super(props);
    this.state = {wallpapers:[]};
}

componentDidMount(){
    document.title = "Wallpapers - Devart";
    const headers = new Headers();
    fetch('https://wrswider.me/devartscr/getWallpapers.php',
    {
        method: 'POST',
        headers: headers
    }).then(response=>response.json()).then(data => this.setState({wallpapers:data}));
}

render(){
    return(
        <div className='subRoot'>
            <div className='body downloads'>
                {Object.keys(this.state['wallpapers']).map((wall,i)=>
                    <Item key={i} img={'https://wrswider.me/devartscr/wallpapers/'+this.state['wallpapers'][wall]} title={this.state['wallpapers'][wall]}/>)}
                
                <i aria-hidden="true"></i>
                <i aria-hidden="true"></i>
                <i aria-hidden="true"></i>
            </div>
        </div>
    );
}  
    
    
}
export default Wallpapers;
import React, { Component } from 'react'
import {AboutMe} from '../AboutMe'
import Item from './art_tips/Item'

class ArtTips extends Component{

    constructor(props){
        super(props);
        this.state = {tips:[],previewing:false,src:null};
    }

    componentDidMount(){
        const headers = new Headers();
        fetch('https://wrswider.me/devartscr/getTips.php',
        {
            method: 'POST',
            headers: headers
        }).then(response=>response.json()).then(data => this.setState({tips:data}));
    }

    showPreview = (src) => {
        console.log(src)
        this.setState({previewing:true,src:src})
    }

    hidePreview = () => {
        this.setState({previewing:false})
    }

    render(){
        return(
            <div className='subRoot'>
                {this.state['previewing']? null: <AboutMe/>}
                {this.state['previewing']? null: <div className='body'>
                    {Object.keys(this.state['tips']).map((tip,i)=>
                        <Item key={i} img={'https://wrswider.me/devartscr/tips/'+this.state['tips'][tip]} title={this.state['tips'][tip]} icon={'https://wrswider.me/devartscr/tips_icons/'+this.state['tips'][tip]} func={this.showPreview}/>)}
                        {/* title={this.state['tips'][tip]}  */}
                    <i aria-hidden="true"></i>
                    <i aria-hidden="true"></i>
                    <i aria-hidden="true"></i>
                </div>
                }
                {this.state['previewing']? 
                    <div className="preview" onClick={this.hidePreview} style={{position:'fixed', width:'100%',height:'100%', background: 'rgba(0,0,0,0.9)',overflow:'auto',cursor:'zoom-out'}}>
                    <img className="previewed" src={this.state['src']} alt={this.state['src']} style={{display:'block',maxWidth:'85%',marginLeft:'auto',marginRight:'auto', marginBottom:'2.5em',marginTop:'2.5em',padding:'1em'}}/>
                </div> 
                : null}
            </div>
        );
    }

}

export default ArtTips;
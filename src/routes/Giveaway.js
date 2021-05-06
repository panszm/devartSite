import React, { Component } from 'react'

class Giveaway extends Component{

    constructor(props){
        super(props);
        this.state = {tips:[],previewing:false,src:null};
    }

    componentDidMount(){
        document.title = "Giveaway - Devart";
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
                <div className='body'>
                    <div className='itemBox'>
                        <img className='itemIcon' src='https://wrswider.me/devartscr/giveaway/giveaway_comingsoon.png' alt='giveaway coming soon!'/>
                    </div>
                </div>
            </div>
        );
    }

}

export default Giveaway;
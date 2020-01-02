import React from 'react'
import {Link} from 'react-router-dom';

import Console from '../data/Console'



export default class ConsoleBox extends React.Component{

    state={
       console: Console,

    }

    render() {



            return   this.state.console.map(function(console) {
            return (<div className='text-align'>
                <h2 className='title'>{console.name}</h2>
                <img src={console.image} width={200} height={150} alt={Console.name} />
                <div className='subtitle'>{console.startYear} - {console.endYear}</div>
                <Link to={console.slug}>
                   <div className='btn'>mon top 3</div>
                </Link>
            </div>)
        })



    }

}

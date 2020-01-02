import React from 'react'
import {Link} from 'react-router-dom';

import Jeux from '../data/Jeux'


export default class JeuxBox extends React.Component{

    state={
        Jeux: Jeux,

    }

    render() {


        const Jeuxfilter = this.state.Jeux.filter( Jeux => Jeux.console === this.props.console)



        return  Jeuxfilter.map(function(Jeux) {
            return (<div className='text-align' console={Jeux.console}>
                <h2 className='title'>{Jeux.name}</h2>
                <img src={Jeux.cover} width={200} height={150} alt={Jeux.name} />
                <div className='subtitle'>{Jeux.date} </div>
                < Link to={Jeux.slug}>
                    <div className='btn'>Details</div>
                </Link>
            </div>)
        })



    }

}

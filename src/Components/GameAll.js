import React,{useContext} from 'react'
import {Link} from 'react-router-dom';



import {FilterContext} from "../Context/FilterContext";

export default function GameAll (){


        const contextValue = useContext(FilterContext)

        const gamefilter = contextValue.sortedJeux.length>0 ? contextValue.sortedJeux : contextValue.games


        return  gamefilter.map(function(Jeux) {
            return(
           <div className='text-align' key={Jeux.name} >
                <h2 className='title'>{Jeux.name}</h2>
                <img src={Jeux.cover} width={200+'px'} height={150+'px'} alt={Jeux.name} />
                <div className='subtitle'>{Jeux.date} </div>
                < Link to={Jeux.slug}>
                    <div className='btn'>Details</div>
                </Link>
            </div>)
        })


}

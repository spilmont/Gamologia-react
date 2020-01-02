import React from 'react'

import Jeux from '../data/Jeux'




export default  class JeuxDescription extends React.Component{

    state= {

        Jeux:Jeux,

    };

    render() {

        const Jeuxfilter = this.state.Jeux.filter( Jeux => Jeux.slug === this.props.Jeux)





        return Jeuxfilter.map(function (Jeux) {

            return(<div className='consoleDescription text-align'   >
                     <img src={Jeux.cover} width={100+'%'} height={100+'%'} className='brightness20' alt={Jeux.name}/>
                     <div className='abs'>
                    <h2 style={{paddingBottom: 60}}>{Jeux.name}</h2>
                    <p>{Jeux.description}</p>
                     </div>
            </div>)

    })

    }



}

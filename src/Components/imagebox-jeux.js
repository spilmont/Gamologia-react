import React from 'react'

import Jeux from '../data/Jeux'




export default  class ImageJeux extends React.Component{

    state= {

        Jeux:Jeux,

    };

    render() {

        const Jeuxfilter = this.state.Jeux.filter( Jeux => Jeux.slug === this.props.Jeux)





        return Jeuxfilter[0].images.map(function (Jeux) {

            return <img className='imageJeux' src={Jeux} width={250+'px'} height={250+'px'} alt={Jeux} />





        })

    }



}

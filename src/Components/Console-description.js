import React from 'react'

import Console from '../data/Console'





export default  class ConsoleDescription extends React.Component{

    state= {

        Console:Console,

    };

render() {

    const Consolefilter = this.state.Console.filter( Console => Console.slug === this.props.Console)





    return Consolefilter.map(function (Console) {

        return(<div className='consoleDescription text-align' >
            <img className='brightness20' src={Console.image} width={100+'%'} height={100+'%'} alt={console.name}/>
            <div className='abs'>
            <h2  style={{paddingBottom: 60}}>{Console.name}</h2>
            <p  >{Console.description}</p>
            </div>


        </div>)

    })

}



}

import React from 'react'

import Banner from '../Components/Banner';
import Jeux from '../Components/jeux-box';
import ConsoleDescription from '../Components/Console-description'







export default function Home() {
   const path = window.location.pathname.split('/');
    return (

    <>
            <Banner title="GAMOLOGIA" subtitle=" Liste de mon  top 3 de la" />
            <div className='flex-row'>
                <ConsoleDescription Console={path[1]}/>
                <Jeux console={path[1]}  />
            </div>


        </>);
}

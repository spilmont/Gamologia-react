import React from 'react'

import Banner from '../Components/Banner';

import JeuxDescription from '../Components/Jeux-description'
import  ImageJeux from '../Components/imagebox-jeux'







export default function Home() {
    const path = window.location.pathname.split('/');
    return (

        <>
            <Banner title="GAMOLOGIA" subtitle=" description de" />
            <div className='flex-row'>
                <JeuxDescription Jeux={path[1]}/>
                <ImageJeux Jeux={path[1]}/>
            </div>


        </>);
}

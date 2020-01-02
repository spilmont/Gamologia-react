import React from 'react'

import Banner from '../Components/Banner';
import Console from '../Components/Console-box';




export default function Home() {
    return (
        <>
                <Banner title="GAMOLOGIA" subtitle=" Listes de jeux sur divers consoles">
                </Banner>
                <div className='flex-row'>
                    <Console />
                </div>


        </>);
}

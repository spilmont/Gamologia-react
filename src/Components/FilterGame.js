import React, {useContext} from 'react';
import Jeux from "../data/Jeux";
import {FilterContext} from '../Context/FilterContext'








export default function FilterGame(){





        const contextValue = useContext(FilterContext)




        return (

            <div className='text-align' >

            <h2 className='title text-align '>Filtre <span className='cancel' onClick={contextValue.removefilter}>X</span></h2>
            <form onSubmit={contextValue.gamefilter}>
                <input type='text'  placeholder="entrer le nom d'un jeu" name='name' value={contextValue.name} onChange={contextValue.handleInputChange} className='mr2pc' />

                <select className='mr2pc  ' name='year' value={contextValue.year} onChange={contextValue.handleInputChange}>
                    <option value={null}>Année</option>
                    <option value='1992'>1992</option>
                </select>

                <select className='' name='consoles' value={contextValue.consoles} onChange={contextValue.handleInputChange}>
                    <option value={null}>console</option>
                    <option value="megadrive">megadrive</option>
                </select><br/>

                <button className='mb2pc' onChange={contextValue.gamefilter}>rechercher</button>
            </form>

        </div>
          )




}


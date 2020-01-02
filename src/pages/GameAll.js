import React from 'react'

import Banner from '../Components/Banner';
import JeuxBox from "../Components/GameAll";
import FilterGame from "../Components/FilterGame"
import Jeux from "../data/Jeux";

import {FilterContext} from "../Context/FilterContext";




export default class GameAll  extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            games: Jeux,
            sortedJeux: [],
            name: "",
            year: 0,
            consoles: "",
            gamefilter:  this.Gamefilter,
            handleInputChange:this.handleInputChange,
            removefilter: this.removefilter,


        }

    }



    removefilter =()=>
    {
        this.setState({
            games: Jeux,
            sortedJeux: [],
            name: "",
            year: 0,
            consoles: "",
            gamefilter:  this.Gamefilter,
            handleInputChange:this.handleInputChange,
            removefilter: this.removefilter,


        })

    }



    handleInputChange =(event)=>
    {


        const target = event.target;
        const value =  target.value;
        const name = target.name;



       this.setState({[name]:value})



}



    Gamefilter =  (e)=>
    {
        e.preventDefault();




        let {
            games, name, year, consoles
        } = this.state;

        // all the rooms
        let tempGames = [...games];


        // transform value
        year = parseInt(year);






        if (year !== 0) {
            tempGames = tempGames.filter(game => game.date === year);

        }


        if (name !== "") {
            tempGames = tempGames.filter(game => game.name === name);


        }

        if (consoles !== "" ) {
            tempGames = tempGames.filter(game => game.console === consoles);

        }








            this.setState({
                sortedJeux: Array.isArray(tempGames)  ? tempGames : [tempGames]
            })







    }






    render() {





    return (


        <>
            <Banner title="GAMOLOGIA" subtitle=" tous les jeux">
            </Banner>
            <div >

              <FilterContext.Provider value={this.state}>
                <FilterGame  filtre={this.Gamefilter} onChange={this.handleInputChange} className=''   />
                <div className="flex-row">
                <JeuxBox  />
                </div>
              </FilterContext.Provider>





            </div>


        </>);
}
}

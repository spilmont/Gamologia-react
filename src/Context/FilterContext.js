import  {createContext} from "react"



export const FilterContext = createContext({

    games: {},
    sortedJeux: [],
    name: "",
    year: 0,
    consoles: "",
    gamefilter : ()=>{},
    handleInputChange:()=>{},
    removefilter: ()=>{},




});






import React from 'react';
import './App.css';

import Home from './pages/home'
import Console from './pages/Console'

import {Route, Switch} from "react-router-dom";



import Navbar from "./Components/Navbar";

import Jeux from "./pages/Jeux";

import All from "./pages/GameAll";

function App() {
  return (
   <>
     <Navbar/>
     <Switch>
        <Route exact path="/" component={Home} />
         <Route exact path='/all' component={All} />
        <Route exact path='/supernintendo' component={Console} />
        <Route exact path='/megadrive' component={Console} />
        <Route exact path={Jeux.slug} component={Jeux} />

     </Switch>

   </>
  );
}

export default App;

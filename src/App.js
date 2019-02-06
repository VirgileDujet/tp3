import React, { Component } from 'react';
import './App.css';
import Infos from "./Components/Infos.js"
import Profil from "./Container/Profil.js"
import Page from "./Container/Profil.js"
import Post from "./Components/Infos.js"

class App extends Component {
  render() {
        ///ON CREER UN OBJET TYPE PAGE AUQUEL ON ENVOIT LES DONNEES NECESSAIRE
   
    return (
        
        <div>

            <div class="image">     
            <p><img src='ppv.png' alt='imageComonent'/></p>
            </div>
        
        <Profil  />
        
        
     
        </div>
   
    
    );
    }
}

export default App;

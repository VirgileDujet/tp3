import React from "react";
import Profil from "../Container/Profil.js"

class Page extends React.Component{

    render()
    {


        return(

            <div> 
            <Profil p  nom ={this.state.nom} prenom ={this.state.prenom}/>

            </div>

        )
    }

}

export default Page;

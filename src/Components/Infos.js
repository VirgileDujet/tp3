import React from "react";
import CACA from "../Components/ppv.png"

class Infos extends React.Component{


    value= this.props.pp;


    render()
    {


        return(
      <div>
            <div class="image">
            <img src={this.props.pp} alt='imageComonent'/>
            </div>

            <div class="ecrituregauche">
            <p>Nom : {this.props.nom} </p>
            <p>Date de naissance :{this.props.birthday}</p>
            </div>

            <div class="ecrituredroite">
            <p>Prenom: {this.props.prenom} </p>
            </div>

        </div>
        )
    }

}

export default Infos

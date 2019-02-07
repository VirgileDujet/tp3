import React from "react";
import '../Profil.css';

class Infos extends React.Component{





    render()
    {


        return(
      <div>
            <div >
            <img className="image" src={this.props.pp} alt='imageComonent'/>
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

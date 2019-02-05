import React from "react";

class Infos extends React.Component{


    render()
    {


        return(
<div>
            <div class="image">     
            <img src={this.props.pp} alt='imageComponent'/>
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
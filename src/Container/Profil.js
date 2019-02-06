import React from "react";
import Infos from "../Components/Infos.js"
import Post from "../Components/Post.js"
import '../Profil.css';




class Profil extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    nom : "virgile",
    prenom : "dujet",
    birthday : "14/01/1997",
    pp : "https://www.royalcanin.fr/wp-content/uploads/chien-grand.png",
    contenu : "J adore le Web",
    color : "blue"
    };
  }

    ///Foction de changement de couleur
    changecolor()
    {
        if(this.state.color === "blue")
            {
                this.setState({color : "red"})
            }
               if(this.state.color === "red")
            {
                this.setState({color : "green"})
            }
                if(this.state.color === "green")
            {
                this.setState({color : "yellow"})
            }
                if(this.state.color === "yellow")
            {
                this.setState({color : "blue"})
            }


    }




    render()
    {
///UN PROFIL CONTIENT UN INFOS ET UN POST


        return(
<div >
            <div class="bouton">
            <button class="press" onClick={() => this.setState({nom: 'Dujet', prenom :"Virgile" , birthday :"14/01/1997", pp :"1", contenu :"J adore le Web"})} >
            {"Virgile"}
            </button>

            <button  class ="press" onClick={() => this.setState({nom: 'Cadeo', prenom :"Sam" , birthday : "18/05/1800", pp : "https://www.royalcanin.fr/wp-content/uploads/chien-grand.png", contenu :"J aime moyennement le Web"})} >
            {"Sam"}
            </button>

            <button  class = "press" onClick={() => this.setState({nom: "Lozano" , prenom :"Marie" , birthday : "17/02/1996", pp : "ppa.png", contenu :"J aime pas du tout le Web"})} >
            {"Marie"}
            </button>
            </div>

            <div class= "bloc1" style={{background:this.state.color}}>
            <Infos  nom ={this.state.nom} prenom ={this.state.prenom} birthday ={this.state.birthday} pp= {this.state.pp}/>

            <button class="change" onClick={() => this.changecolor()}>
                    {"change de style"}
                    </button>
            </div>

            <div class="bloc2">
            <Post contenu={this.state.contenu}/>
            </div>

</div>

        )
    }

}

export default Profil;

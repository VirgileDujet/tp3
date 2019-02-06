import React from "react";
import Infos from "../Components/Infos.js"
import Post from "../Components/Post.js"
import '../Profil.css';




class Profil extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    nom : "Dujet",
    prenom : "Virgile",
    birthday : "14/01/1997",
    pp : "http://recueil-de-png.r.e.pic.centerblog.net/o/aa58ac5d.png",
    contenu : "J adore le Web",
    color : "#66ff33",
    compteur1 : '0',
    compteur2 : "0",
    compteur3 : "0",

    };
  }




    ///Foction de changement de couleur
    changecolor()
    {
        if(this.state.color === "#66ff33")
            {
                this.setState({color : "#ff5050"})
            }
               if(this.state.color === "#ff5050")
            {
                this.setState({color : "#0099cc"})
            }
                if(this.state.color === "#0099cc")
            {
                this.setState({color : "#ff9900"})
            }
                if(this.state.color === "#ff9900")
            {
                this.setState({color : "#66ff33"})
            }


    }




    render()
    {
///UN PROFIL CONTIENT UN INFOS ET UN POST


        return(
<div >
            <div class="bouton">
            <button class="press" onClick={() => this.setState({nom: 'Dujet', prenom :"Virgile" , birthday :"14/01/1997", pp :"http://recueil-de-png.r.e.pic.centerblog.net/o/aa58ac5d.png", contenu :"J adore le Web"})} >
            {"Virgile"}
            </button>

            <button  class ="press" onClick={() => this.setState({nom: 'Cadeo', prenom :"Sam" , birthday : "18/05/1800", pp : "https://www.royalcanin.fr/wp-content/uploads/chien-grand.png", contenu :"J aime moyennement le Web"})} >
            {"Sam"}
            </button>

            <button  class = "press" onClick={() => this.setState({nom: "Lozano" , prenom :"Marie" , birthday : "17/02/1996", pp : "http://ekladata.com/pol2d2FuY5kOzY7g2a4SCmAdHUI.png", contenu :"J aime pas du tout le Web"})} >
            {"Marie"}
            </button>
            </div>

            <div class= "bloc1" style={{background:this.state.color}}>
            <Infos  nom ={this.state.nom} prenom ={this.state.prenom} birthday ={this.state.birthday} pp= {this.state.pp}/>

            <button class="change" onClick={() => this.changecolor()}>
                    {"change de style"}
                    </button>
            </div>

            <div class="bloc2" style={{background:this.state.color}}>
            <Post contenu={this.state.contenu}/>
            <button className="bou"   >
            {
              "C'est super !"
            }
            </button>
            </div>

</div>

        )
    }

}

export default Profil;

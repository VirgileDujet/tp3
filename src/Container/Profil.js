import React from "react";
import Infos from "../Components/Infos.js"
import Post from "../Components/Post.js"


class Profil extends React.Component{

    render()
    {
///UN PROFIL CONTIENT UN INFOS ET UN POST
        ///ON CREER LES DEUX OBJETS , DONT LES PROPS DECOULE DE L OBJET PAGE

        return(
<div>
            <div>
            <Infos inf={this.props.page}/>
            </div>
            
             <div>
            <Post post={this.props.page}/>
            </div>
 
</div>

        )
    }

}

export default Profil;

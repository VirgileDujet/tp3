import React from "react";
import Infos from "../Components/Infos.js"


class Post extends React.Component{

    render()
    {
///ON VEUT LA DONNE DE L OBJET TYPE POST (ici post)

        return(

            <div> 
            <p>{this.props.post.contenu}</p>
            </div>

        )
    }

}

export default Post;

import React from "react";
import Infos from "../Components/Infos.js"


class Post extends React.Component{

    render()
    {


        return(

            <div>
            <p>{this.props.contenu}</p>


            </div>

        )
    }

}

export default Post;

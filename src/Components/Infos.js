import React from "react";

class Infos extends React.Component{

    render()
    {


        return(

            <div>
            <p>{this.props.inf.nom}</p>
            <p>{this.props.inf.prenom}</p>
            </div>

        )
    }

}

export default Infos
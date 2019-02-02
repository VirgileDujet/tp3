import React from "react";
import Profil from "../Container/Profil.js"

class Page extends React.Component{
    
    render()
    {


        return(

            <div>
            <Profil profil={this.props.profil}/>
            </div>

        )
    }

}

export default Page;

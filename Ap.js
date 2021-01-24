import React ,{Component, useEffect} from 'react'
import Logo from "./src/components/Logo"
class Ap extends Component{ 
    state = { pgTitle : "Title" }
   
    render() { 
        return ( 
            <div className="app"> 
                <Logo></Logo>

            </div>
    );
}

}

export default Ap;
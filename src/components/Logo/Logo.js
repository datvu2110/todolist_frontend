import React, { Component } from 'react'
import Tilt from 'react-tilt'
import './Logo.css'
import icon from './icon.png'
import ModalPassword from '../Navigation/ModalPassword'
import { Modal } from 'react-bootstrap'



class Logo extends React.Component{

    // state={
    //     test: "abc",
    //     different:123
    // }
  
    render(){
        return(
            <div className="ma4 mt0">
                

                <Tilt  className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                    <div className="Tilt-inner pa3"><img style={{paddingTop:'5px',cursor:'default'}} alt='logo' src={icon}/></div>
                </Tilt>

               
            </div>
        )
    }

    
}

export default Logo
import React, { Component } from 'react';
import './Landing.css';
import screenshot from './assets/laptop.png'
import {Link} from 'react-router-dom'
import Particles from 'react-particles-js'

const particlesOption={
    particles:{
      polygon: {
        enable: true,
        type: 'inside',
        move: {
            radius: 10
        }
      }
    }
  }

class Landing extends Component {
    
    render(){
  
        return(
            <div>
                <Particles params={particlesOption} className="particles" />
                <div className="landing-background">
                    <div className="">

                        <div>
                            <h3 className="head center">Successful Completion</h3>
                            <p className="center paragraph">A simple and intelligent to-do list that makes it easy to plan your day</p>
                            <img className="screenshot" src={screenshot} ></img>
                            <Link to="/demo"><button className="started-button">GETTING STARTED</button></Link>
                        </div>

                    </div>
                
                </div>
            </div>
        )
    }
}
  
  export default Landing;
  
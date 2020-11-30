import React from 'react';
import {Alert} from "react-bootstrap"
import './Signin.css'
class Signin extends React.Component {

  state = {
    signInEmail:"",
    signInPassword: "",
    visible:false
  }

  onShowAlert = ()=>{
    this.setState({visible:true},()=>{
      window.setTimeout(()=>{
        this.setState({visible:false})
      },4000)
    });
  }

  onEmailChange = (event) => {
    this.setState({
      signInEmail:event.target.value
    })
  }

  onPasswordChange = (event) =>{
    this.setState({
      signInPassword:event.target.value
    })
  }

  onSubmitSignIn = () =>{
    fetch('https://desolate-waters-84729.herokuapp.com/signin', {
      method:'post',
      headers:{'Content-Type' : 'application/json'},
      body:JSON.stringify({
        email:this.state.signInEmail,
        password:this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        
        if(user.id){
          this.props.loadUser(user)
          this.props.onRouteChange('home')
        }
        else{
          this.onShowAlert()
        }
      })
      
    
  }


  render() {
    
    return (
      <div>
      <article className="frame mw6 ">
        <main className="padding">
          <div className="">
            <fieldset id="sign_up" className="">
              <legend className="title">Sign In</legend>
              <div className="">
                <label htmlFor="email-address">Email</label>
                <input
                  onChange={this.onEmailChange}
                  className="transparent"
                  type="email"
                  name="email-address"
                  id="email-address"
                
                />
              </div>
              <div className="password">
                <label  htmlFor="password">Password</label>
                <input
                  onChange={this.onPasswordChange}
                  className="transparent"
                  type="password"
                  name="password"
                  id="password"
          
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick ={this.onSubmitSignIn}
                className="signin"
                type="submit"
                value="Sign in"
              />
            </div>
            <div className="register">
              <p onClick={() => this.props.onRouteChange('register')}  className="f6 link dim black db pointer">Register</p>
            </div>
          </div>
        </main>
      </article>
      <Alert variant="info" show={this.state.visible} >
         Wrong Username or Password
      </Alert>
      </div>
    );
  }
}

export default Signin;
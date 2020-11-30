import React from 'react';
import { Alert } from "react-bootstrap"
import "./Register.css"

class Register extends React.Component {
  state = {
    email:"",
    password: "",
    name:"",
    visible:false
  }

  

  onNameChange = (event) => {
    this.setState({
      name:event.target.value
    })
  }

  onEmailChange = (event) =>{
    this.setState({
      email:event.target.value
    })
  }

  onPasswordChange = (event) =>{
    this.setState({
      password:event.target.value
    })
  }

  onShowAlert = ()=>{
    this.setState({visible:true},()=>{
      window.setTimeout(()=>{
        this.setState({visible:false})
      },4000)
    });
  }

  onSubmitSignIn = () =>{
    let tempEmail = this.state.email
    let tempPassword = this.state.password
    fetch('https://desolate-waters-84729.herokuapp.com/users')
      .then(res => res.json())
      .then(res => {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        const checkEmail = obj => obj.email === tempEmail;
        if(res.some(checkEmail)===false && re.test(tempEmail) && tempPassword) {
          fetch('https://desolate-waters-84729.herokuapp.com/register', {
      
            method:'post',
            headers:{'Content-Type' : 'application/json'},
            body:JSON.stringify({
              name:this.state.name,
              email:this.state.email,
              password:this.state.password
            })
          })
          .then(response => response.json())
          .then(user => {
            if(user.id){
              
              console.log('here')
              console.log(this.state.password)
              this.props.loadUser(user)
              this.props.onRouteChange('home')
            }
            else{
              console.log(user)
              this.onShowAlert()
            }
          })

        } else {
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
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="title">Register</legend>
              <div className="">
                <label className="" htmlFor="name">Name</label>
                <input
                  className="transparent"
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.onNameChange}
                />
              </div>
              <div className="">
                <label className="" htmlFor="email-address">Email</label>
                <input
                  className="transparent"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                  
                  pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                  required
                />
              </div>
              <div className="">
                <label className="" htmlFor="password">Password</label>
                <input
                  className="transparent"
                  minLength="5"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                  required
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.onSubmitSignIn}
                className="signin"
                type="submit"
                value="Register"
              />
            </div>
          </div>
        </main>
      </article>
      <Alert variant="info" show={this.state.visible} >
         Cannot register a new user!
      </Alert>
      </div>
    );
  }
}

export default Register;
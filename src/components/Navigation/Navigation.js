import React, { Component} from 'react'
import ModalPassword from './ModalPassword'



class Navigation extends React.Component{

    state = {
        show: false,
        alert:false
    }

    showAlert =() =>{
        this.setState({alert:true})
    }

    handleModal =() =>{
        this.setState({show:true});
        console.log("clicked")
    }

    handleClose = () => { 
        this.setState({ show: false,alert:false });
    }




    render(){
        let temp
        if (this.props.isSignedIn){
            temp =  <nav style={{display:'flex', justifyContent:"flex-end"}}>
                        <p onClick={() => this.props.onRouteChange('signout')} className="f3 link dim black underline pa3 pointer">Sign Out</p>
                        <p onClick={()=> {this.handleModal() }} className="f3 link dim black underline pa3 pointer" >Update Password</p>
                        <ModalPassword info={this.props.info} show = {this.state.show} handleClose = {this.handleClose} showAlert={this.showAlert} alert={this.state.alert} />
                    </nav>
        } else {
            temp =  <nav style={{display:'flex', justifyContent:"flex-end"}}>
                        <p onClick={() => this.props.onRouteChange('signin')} className="f3 link dim black underline pa3 pointer">Sign In</p>
                        <p onClick={() => this.props.onRouteChange('register')} className="f3 link dim black underline pa3 pointer">Register</p>
                    </nav>
        }
        return (temp)
    }
}



export default Navigation
import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Signin from './components/Signin/Signin';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import Register from './components/Register/Register'
import Note from './components/Notes/Note'
import SearchBox from './components/Notes/SearchBox'

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


class App extends Component {

  state = {
    route:'signin',
    isSignedIn: false,
    
    user:{
      id:'',
      name:'',
      email:''
    }, 
    currentItem:{
      text:'',
      key:''
    },
    items:[],
    searchfield:'',

  }
  //Create a todo search
  onSearchChange = (e) =>{
    this.setState({searchfield:e.target.value})
    const filteredRobots = this.state.items.filter(item => {
      return item.todo.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
  }

  onShowAlert = () => {
    this.setState({alert:true})
  }
  onCloseAlert = () => {
    this.setState({alert:false})
  }

  // Route user if the user signs in successfully
  loadUser = (data) =>{
    
    var obj
    fetch(' https://desolate-waters-84729.herokuapp.com/todo/' + data.id)
      .then(res => res.json())
      .then(data => obj = data)
      .then(() => this.setState({items:obj}))
    this.setState({
      user:{
        id:data.id,
        name:data.name,
        email:data.email
      },
    })

    
  }

  // Route change whhen clicking signout or register
  onRouteChange = (route) =>{
    if (route === 'signout'){
      this.setState({isSignedIn:false})
    } else if (route ==='home'){
      this.setState({isSignedIn:true})
    }
    this.setState({route : route})
  }

  // Call the addItem API
  addItem = (item, id) =>  {
    if (item.todo !== ""){
      fetch('https://desolate-waters-84729.herokuapp.com/todo/' + id, {
        method:'post',
        headers:{'Content-Type' : 'application/json'},
        body:JSON.stringify({
          todo:item.todo,
          id:id
        })
      })
      .then( res=> res.json().then(resp=>{
        item.noteid= resp.noteid
        const newItems = [...this.state.items, item]
        this.setState({
          items:newItems
        }) 
      }))
    }

  }

  // Call editItem API
  editItem = (todo, id)=>{
    
    fetch('https://desolate-waters-84729.herokuapp.com/todo/' + id, {
        method:'PUT',
        headers:{'Content-Type' : 'application/json', 'Authorization' : 'sdfsfsfwiiowuerewrwrewrww'},
        body:JSON.stringify({
          todo:todo
        })
      })
      .then(res => {
        const editedItems = this.state.items
        for (let i= 0; i< editedItems.length; i++){
          if(editedItems[i].noteid == id){
            editedItems[i].todo = todo
          }
        }
        this.setState({items:editedItems})
      })
  }

  //Remove a todo
  deleteItem = (key) =>{
    fetch('https://desolate-waters-84729.herokuapp.com/todo/' + key, {
      method:'delete',
      headers:{'Content-Type' : 'application/json'},
      body:JSON.stringify({ 
        noteid:key
      })
    })
    .then(data =>{
      console.log("click")
      const filteredItems =  this.state.items.filter(item => item.noteid!== key)
      this.setState({items:filteredItems})
    })
  }

  //Toggle todo if it is completed
  toggleComplete = (item) => {


    if (item.done != 0){
      fetch('https://desolate-waters-84729.herokuapp.com/toggle/' + item.noteid, {
        method:'PUT',
        headers:{'Content-Type' : 'application/json', 'Authorization' : 'sdfsfsfwiiowuerewrwrewrww'},
        body:JSON.stringify({
          done:0
        })
      })
      .then(res => {
        const editedItems = this.state.items
        for (let i= 0; i< editedItems.length; i++){
          if(editedItems[i].noteid === item.noteid){
            editedItems[i].done = 0
          }
        }
        this.setState({items:editedItems})
      }) 
    } else {
      fetch('https://desolate-waters-84729.herokuapp.com/toggle/' + item.noteid, {
        method:'PUT',
        headers:{'Content-Type' : 'application/json', 'Authorization' : 'sdfsfsfwiiowuerewrwrewrww'},
        body:JSON.stringify({
          done:1
        })
      })
      .then(res => {
        const editedItems = this.state.items
        for (let i= 0; i< editedItems.length; i++){
          if(editedItems[i].noteid === item.noteid){
            editedItems[i].done = 1
          }
        }
        this.setState({items:editedItems})
      }) 
    }



  }
  
  render(){
    
    const filteredTodo = this.state.items.filter(item => {
      return item.todo.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })

    return(
      <div className="App">
        <Navigation info={this.state.user}  isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
        {this.state.route==='home'
          ? 
            <div>
              <Logo updatePassword={this.updatePassword}/>
              <Particles params={particlesOption} className="particles" />
              <SearchBox searchChange={this.onSearchChange} />
              <Note toggleComplete={this.toggleComplete} editItem={this.editItem} deleteItem={this.deleteItem} addItem={this.addItem} items={filteredTodo} info={this.state.user} />
            </div>
          : (
            this.state.route === 'signin'
            ? 
              <div>
                <Particles params={particlesOption} className="particles" />
                <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                </div>
            :
              <div>
                <Particles params={particlesOption} className="particles" />
                <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
              </div>
          )
          
        }
      </div>
    )
  }
}

export default App;

import React from 'react'
import Particles from 'react-particles-js'
import './ListItem.css'
import Note from './Note'
import {Modal, Button, Row, Col, Form } from 'react-bootstrap'
import ModalItem from './ModalItem'

class ListItem extends React.Component{

    state = {

        todo:{},
        show: false,
        currentNoteID: "",
        alert:false
    }

    handleModal =(id) =>{
        this.setState({show:true})
        this.setCurrentId(id)
    }

    setCurrentId = (id) => {
        this.setState({currentNoteID: id})
    }
    handleClose = () => { 
        this.setState({ show: false,alert:false })
    }

    showAlert =() =>{
        this.setState({alert:true})
    }

    render(){
        let i = 0;
        return <div className="todoBox">
            {this.props.items.map((item,index) => {
                i = i+ 1
                return(
                    <div key={index} className="todo-row">

                        <div className="list" key={item.noteid} >
                            <p id={"p" + 1} style={{
                                opacity: item.done === 1 ? 0.4 : 1,
                                textDecoration: item.done === 1  ? 'line-through' : ""
                            }}  key={item.noteid} onClick={()=> this.props.toggleComplete(item) } > {item.todo}  </p>
                            <div className="icons">
                                
                                
                                <button className="button" onClick={()=> {let id; id = item.noteid;this.handleModal(id) }} id={item.noteid} >Edit</button>
                                
                                <ModalItem editItem={this.props.editItem} showAlert={this.showAlert} alert={this.state.alert} show = {this.state.show} itemid={this.state.currentNoteID} handleClose = {this.handleClose} editItem={this.props.editItem} />
                                
                                <img onClick={()=> this.props.deleteItem(item.noteid)} alt="trash-icon" src="https://img.icons8.com/fluent-systems-regular/24/000000/trash.png" height="20" />
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
        
    }
}

export default ListItem
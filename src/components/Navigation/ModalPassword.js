import React from 'react'
import {Modal, Button, Row, Col, Form, Alert } from 'react-bootstrap'

class ModalPassword extends React.Component{
    


    handleSubmit = (e) => {
        const password = e.target.password.value
        e.preventDefault()
        fetch('https://desolate-waters-84729.herokuapp.com/update/' + this.props.info.id, {
            method:'put',
            headers:{'Content-Type' : 'application/json'},
            body:JSON.stringify({
                password: password
            })
        })
        .then(res => console.log("Password is updated")) 

        this.props.showAlert()
       
    }
    render(){
        
        return(
            <Modal show={this.props.show} onHide={this.props.handleClose} >
                                    <Modal.Header closeButton>Update your Password</Modal.Header>
                                    <Modal.Body>
                                        <Row>
                                            <Col sm={6}>
                                                <Form onSubmit={this.handleSubmit}>
                                                <Form.Group controlId="TodoName" >
                                                    <Form.Label>Update Password</Form.Label>
                                                    <Form.Control minLength="5" maxLength="15" type="password" name="password" required placeholder="Enter New Password" />
                                                </Form.Group>
                                                <Form.Group>
                                                    <Button variant="primary" type="submit">Update</Button>
                                                </Form.Group>
                                                </Form>
                                                <Alert  show={this.props.alert} className="text-center" variant="success">
                                                    Password is updated
                                                </Alert>
                                                
                                            </Col>
                                        </Row>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button onClick = { this.props.handleClose }>Close</Button>
                                    </Modal.Footer>
            </Modal>
        )
    }
}

export default ModalPassword
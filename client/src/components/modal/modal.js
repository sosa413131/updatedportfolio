import './modal.css';
import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class ModalComponent extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            showModal: true
        };

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        console.log("close button")
        this.setState({ showModal: false});
    }

    handleShow() {
        this.setState({ showModal: true });
    }
    render() {
        return (

            <div >
                <Modal Modal  className="static-modal" show={this.state.showModal} onHide={this.handleClose}>
                    <Modal.Header>
                        <Modal.Title>Feedback Cannot Be Collected </Modal.Title>
                    </Modal.Header>
                    <Modal.Body> <span className='.modalText'>The feedback feature on my page is currently under development. In the meantime, reach out to me via email or through one of my social media accounts (See on the top right-hand corner of this page). Come back soon as I am actively working on this page and thanks!</span></Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="danger" onClick={this.handleClose} >Close</Button>
                    </Modal.Footer >
                </Modal>
                
            </div>
    
        )
    }


}

export default ModalComponent;
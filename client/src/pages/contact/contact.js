import './contact.css';
import React, {Component} from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import Modal from '../../components/modal';
import API from "../../utils/utility";

class FormA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
    }
    handleNameChange(event) {
        this.setState({ name: event.target.value });
    }
    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }
    handleMessageChange(event) {
        this.setState({ message: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        var fieldEmpty = false;

        if (this.state.name ===""){
            console.log("name field is empty");
            fieldEmpty = true;
        }

        if (this.state.email===""){
            console.log("email field is empty");
            fieldEmpty = true;
        }

        if (this.state.message===""){
            console.log("message field is empty");
            fieldEmpty = true;
        }
        
        if (fieldEmpty === true){
            return
        }

        // switch(expression) {
        //     case n:
        //         // code block
        //     case n:
        //         // code block
        //     case n:
        //         // code block
        //         break;

        //     default:
        //         // code block
        // }

        let json = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }

        // api call with data from form
        API.postContact(json);

        // clears form after submitted
        event.target.reset();
    }


    render() {
        return (
            <Row className='formRow'>
                <form onSubmit={this.handleSubmit}>
                    <Col className='formCol' md={12} xs={12}>
                        <label className="nameLabel">
                            <span className='formText'> Name: </span>
                            <br />
                            <textarea type="text" placeholder="John Doe" name={this.state.value} onChange={this.handleNameChange} className="nameField" />
                        </label>
                    </Col>
                    <Col className='formCol' md={12} xs={12}>
                        <label className="emailLabel" >
                            <span className='formText'> Email: </span>
                            <br />
                            <textarea type="email" placeholder="blackpanther@wakanda.com" email={this.state.value} onChange={this.handleEmailChange} className="emailField" />
                        </label>
                    </Col>
                    <Col className='formCol' md={12} xs={12}>
                        <label className="emailLabel">
                            <span className='formText'> Message: </span>
                            <br />
                            <textarea type="text" name="name" placeholder="I love your lyrics App!" message={this.state.value} onChange={this.handleMessageChange} className="messageField" />
                        </label>
                    </Col>
                    <Col>
                        <br />
                        <Button bsStyle="success" bsSize="large" className="submitButton" type="submit">Submit</Button>
                    </Col>
                </form>
                <Modal />
            </Row>


        )
    }
}



export default FormA;


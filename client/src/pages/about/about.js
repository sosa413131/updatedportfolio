import "./about.css";
import React, { Component } from 'react';
import Hero from '../../components/hero';
import FaDollar from "react-icons/lib/fa/dollar";
import FaBomb from  "react-icons/lib/fa/bomb";
import { Col } from 'react-bootstrap';
import Container from '../../components/container';

class About extends Component {
    render() {
        return (
            <div>
                <Hero backgroundImage={'/skeletonanddavid.jpg'}>
                   <span className='.welcome'> <h1><Col md={2} xs={2}><FaBomb className={'bomb'}/></Col><Col md={8} xs={8}> Welcome to My Page</Col><Col md={2} xs={2}><FaDollar className={'money'}/></Col></h1></span>
                   <h2>  <Col md={12} xs={12}> <span className='welcomeSmall'>Operations Professional, Web Developer, and Pop Culture Enthusiast </span></Col></h2>
                </Hero>
                <Container/>
            </div>

        )
    }
}


export default About;
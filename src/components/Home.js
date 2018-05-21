import React from "react";
import { Row, Col, Glyphicon } from "react-bootstrap";
import Slideshow from "./Slideshow";
import Skills from "./Skills";
import Title from "./Title";
import logo from "../res/Logo.png";

class Home extends React.Component {
    render() {
        return (
            <div style={{paddingTop:"12px"}}>
                <Title text="Home" large/>
                <Row style={{marginBottom:"10px"}}>
                    <Col xs={12} md={9} style={{marginBottom:"10px"}}>
                        <Row>
                            <Col xs={12}>
                                <Slideshow/>
                            </Col>
                            <Col xs={12} style={{marginBottom:"20px"}}>
                                <Title text="About Me"/>
                            </Col>
                            <Col xs={12} lg={3}>
                                <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                                    <img src={logo} alt="DS" style={{width:"180px"}}/>
                                </div>
                            </Col>
                            <Col xs={12} lg={9}>
                                <p style={{marginTop:"20px"}}>
                                    My name is Daryan Sankar, and I'm passionate about software development. I recently graduated with a Bachelors in Software Engineering from Kennesaw State University, formerly Southern Polytechnic. I spend a lot of my personal life learning new technologies/design patterns, working on personal projects and gaming. Some of the projects I’ve worked on can be found on my website, which is linked above. One of my greatest strengths is the ability to learn new languages/tools in order to create cutting edge applications. Technologies change constantly, and it’s important to me personally to always stay updated.
                                </p>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={3}>
                        <Skills />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={9} style={{marginBottom:"10px"}}>
                        <div style={{marginBottom:"30px", textAlign:"center"}}>
                            <div style={{marginBottom:"30px"}}>
                                <Title text="Contact Me"/>
                            </div>
                            <div style={{fontSize:"1.1em", margin:"30px 0"}}> 
                                <a style={{color:"lightgray"}} href="mailto:daryan.sankar1@gmail.com">
                                    <Glyphicon glyph="envelope" /> daryan.sankar1@gmail.com
                                </a>
                            </div>
                            <div style={{fontSize:"1.1em", margin:"10px 0"}}>
                                <a style={{color:"lightgray"}} href="https://github.com/dsankar1" target="_blank" rel="noopener noreferrer">
                                    <span className="fa fa-github fa-lg" /> github.com/dsankar1
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Home;
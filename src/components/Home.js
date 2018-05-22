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
                <Row>
                    <Col xs={12} md={8} mdOffset={2}>
                        <Slideshow/>
                    </Col>
                </Row>
                <Row>
                    <Col md={8} xs={12}>
                        <Row>
                            <Col xs={12}>
                                <Title text="About Me"/>
                            </Col>
                            <Col xs={12}>
                                <div style={{display:"flex", justifyContent:"center", alignItems:"center", margin:"12px 0"}}>
                                    <img src={logo} alt="DS" style={{width:"180px"}}/>
                                </div>
                            </Col>
                            <Col xs={12}>
                                <p>
                                    My name is Daryan Sankar, and I'm passionate about software development. I recently graduated with a Bachelors in Software Engineering from Kennesaw State University, formerly Southern Polytechnic. I spend a lot of my personal life learning new technologies/design patterns, working on personal projects and gaming. Some of the projects I’ve worked on can be found on my website, which is linked above. One of my greatest strengths is the ability to learn new languages/tools in order to create cutting edge applications. Technologies change constantly, and it’s important to me personally to always stay updated.
                                </p>
                            </Col>
                            <Col xs={12}>
                                <div style={{textAlign:"center"}}>
                                    <Title text="Contact Me"/>
                                    <div style={{fontSize:"1.1em", margin:"12px 0"}}> 
                                        <a style={{color:"lightgray"}} href="mailto:daryan.sankar1@gmail.com">
                                            <Glyphicon glyph="envelope" /> daryan.sankar1@gmail.com
                                        </a>
                                    </div>
                                    <div style={{fontSize:"1.1em", margin:"12px 0"}}>
                                        <a style={{color:"lightgray"}} href="https://github.com/dsankar1" target="_blank" rel="noopener noreferrer">
                                            <span className="fa fa-github fa-lg" /> github.com/dsankar1
                                        </a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={4}>
                        <Skills />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Home;
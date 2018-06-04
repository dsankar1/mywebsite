import React from "react";
import { Row, Col, Glyphicon } from "react-bootstrap";
import Slideshow from "./Slideshow";
import Skills from "./Skills";
import Title from "./Title";
import logo from "../res/Logo.png";
import Container from "./Container";

class Home extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col md={10} mdOffset={1} lg={8} lgOffset={2}>
                        <Title text="Home" large/>
                        <Container>
                            <Slideshow/>
                        </Container>
                        <Container title="About Me">
                            <Row>
                                <Col md={3} style={{textAlign:"center", paddingTop:"10px", paddingBottom:"10px"}}>
                                    <img style={{width:"100%", maxWidth:"160px"}} src={logo}/>
                                </Col>
                                <Col md={9} style={{paddingTop:"10px", paddingBottom:"10px"}}>
                                    I’m Daryan Sankar, and I enjoy creating software that is useful to people. I recently graduated with a Bachelors in Software Engineering from Kennesaw State University, formerly Southern Polytechnic. In my free time I work on personal projects for myself and others. Some applications I’ve written include a damage calculator for the game Monster Hunter: World, a KML parser and processing tool, hotbar schematic generator for Whole Foods, etc. Details on these projects and more can be found here on my website. My greatest asset is my adaptability and willingness to learn. I’m always anxious to pick up new languages and tools to tackle a project at hand.
                                </Col>
                            </Row>   
                        </Container>
                        <Container title="Technical Skills">
                            <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
                                <span style={{padding:"6px", margin:"0px 30px"}}>Hello</span>
                                <span style={{padding:"6px", margin:"0px 30px"}}>Hello</span>
                                <span style={{padding:"6px", margin:"0px 30px"}}>Hello</span>
                                <span style={{padding:"6px", margin:"0px 30px"}}>Hello</span>
                                <span style={{padding:"6px", margin:"0px 30px"}}>Hello</span>
                                <span style={{padding:"6px", margin:"0px 30px"}}>Hello</span>
                                <span style={{padding:"6px", margin:"0px 30px"}}>Hello</span>
                                <span style={{padding:"6px", margin:"0px 30px"}}>Hello</span>
                                <span style={{padding:"6px", margin:"0px 30px"}}>Hello</span>
                                <span style={{padding:"6px", margin:"0px 30px"}}>Hello</span>
                                <span style={{padding:"6px", margin:"0px 30px"}}>Hello</span>
                                <span style={{padding:"6px", margin:"0px 30px"}}>Hello</span>
                                <span style={{padding:"6px", margin:"0px 30px"}}>Hello</span>
                                <span style={{padding:"6px", margin:"0px 30px"}}>Hello</span>
                                <span style={{padding:"6px", margin:"0px 30px"}}>Hello</span>
                                <span style={{padding:"6px", margin:"0px 30px"}}>Hello</span>
                                <span style={{padding:"6px", margin:"0px 30px"}}>Hello</span>
                                <span style={{padding:"6px", margin:"0px 30px"}}>Hello</span>
                            </div>
                        </Container>                        
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Home;
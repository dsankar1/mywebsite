import React from "react";
import { Row, Col, Glyphicon } from "react-bootstrap";
import Slideshow from "./Slideshow";
import Title from "./Title";
import logo from "../res/Logo.png";
import Container from "./Container";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollY: 0,
            pageWidth: window.innerWidth
        }
        this.handleScroll = this.handleScroll.bind(this);
        this.handleResize = this.handleResize.bind(this);
    }
    handleScroll() {
        this.setState({
            scrollY: window.pageYOffset
        });
    }
    handleResize() {
        this.setState({
            pageWidth: window.innerWidth
        });
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.handleResize);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.handleResize);
    }
    render() {
        return (
            <div>
                <Row>
                    <Col xs={12} lgPush={2} lg={8}>
                        <Title text="Home" large/>
                        <Container>
                            <Slideshow/>
                        </Container>
                        <Container title="About Me">
                            <Row>
                                <Col md={3} style={{textAlign:"center", paddingTop:"10px", paddingBottom:"10px"}}>
                                    <img style={{width:"100%", maxWidth:"160px"}} alt="Daryan Sankar" src={logo}/>
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
                    <Col xs={12} lgPull={8} lg={2}>
                        <div style={this.state.pageWidth >= 1200 ? {width:"180px", position: this.state.scrollY > 130 ? "fixed" : null, top: this.state.scrollY > 130 ? "61px":null} : {}}>
                            <Container title="Contact Me">
                                <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-evenly", textAlign:"center"}}>
                                    <div style={{width:"100px", marginBottom:"10px"}}>
                                        <div style={{marginBottom:"4px"}}><i className="fa fa-github fa-lg"/> Github:</div>
                                        <a className="contact-me" href="https://github.com/dsankar1" target="_blank" rel="noopener noreferrer">
                                            dsankar1
                                        </a>
                                    </div>
                                    <div style={{width:"100px", marginBottom:"10px"}}>
                                        <div style={{marginBottom:"4px"}}><Glyphicon glyph="envelope"/> Gmail:</div>
                                        <a className="contact-me" href="mailto:daryan.sankar1@gmail.com">
                                            daryan.sankar1
                                        </a>
                                    </div>
                                    <div style={{width:"100px", marginBottom:"10px"}}>
                                        <div className="fb-share-button" data-href="https://daryanspot.com" data-layout="button_count" data-size="small" data-mobile-iframe="true"><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdaryanspot.com%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">Share</a></div>
                                    </div>
                                </div>
                            </Container>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Home;
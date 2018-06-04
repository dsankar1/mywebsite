import React from "react";
import Title from "./Title";
import { Row, Col, FormGroup, ControlLabel, FormControl } from "react-bootstrap";
import ListItem from "./ProjectListItem";
import logo from "../res/Logo.png";

class ProjectList extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col md={10} mdOffset={1} lg={8} lgOffset={2}>
                        <Title text="Projects" large/>
                        <FormGroup controlId="formBasicText">
                            <ControlLabel>Search Project Title</ControlLabel>
                            <FormControl
                                type="text"
                                placeholder="Search project title"
                            />
                            <FormControl.Feedback />
                        </FormGroup>
                        <div style={{color:"gray"}}>Showing 0 of 0 results</div>
                        <hr style={{marginTop:"0px", borderColor:"gray"}}/>
                        <ListItem image={logo} title="Example Project" summary="This is just an example project."/>
                        <ListItem image={logo} title="Example Project" summary="This is just an example project."/>
                        <ListItem image={logo} title="Example Project" summary="This is just an example project."/>
                        <ListItem image={logo} title="Example Project" summary="This is just an example project."/>
                        <ListItem image={logo} title="Example Project" summary="This is just an example project."/>
                        <ListItem image={logo} title="Example Project" summary="This is just an example project."/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ProjectList;
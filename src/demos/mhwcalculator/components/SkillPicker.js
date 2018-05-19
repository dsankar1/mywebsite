import React from "react";
import { Row, Col, FormGroup, FormControl } from "react-bootstrap";

const Skills = props => {
    let skills = props.list.map((item, index) => {
        let levels = [<option key={0} value={0}>Level: {0}</option>];
        for (let i = 0; i < item.skill.levels; i++) {
            levels.push(
                <option key={i+1} value={i+1}>Level: {i+1}</option>
            );
        }
        return (
            <Col key={index} xs={6} sm={3} md={6}>
                <FormGroup bsSize="small">
                    <div style={{fontSize: "0.9em"}}><b>{item.skill.name}:</b></div>
                    <FormControl 
                        componentClass="select" 
                        disabled={props.disabled.includes(item.skill.index)}
                        value={item.level} 
                        onChange={e => {
                            props.update(index, parseInt(e.target.value, 10));
                        }}
                    >
                        {levels}
                    </FormControl>
                </FormGroup>
            </Col>
        );
    });
    return (
        <Row>
            {skills}
        </Row>
    );
}

export default Skills;
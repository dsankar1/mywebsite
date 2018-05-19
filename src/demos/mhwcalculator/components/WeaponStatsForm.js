import React from "react";
import { FormGroup, ControlLabel, FormControl } from "react-bootstrap";
import { Row, Col, InputGroup } from "react-bootstrap";
import { getAmmoMultiplier } from "../utils";
import WeaponSharpness from "./WeaponSharpness";

const WeaponStatsForm = props => {
    let ammoList = props.ammoList.map((name, index) => (
        <option key={index} value={name}>{name}</option>
    ));
    return (
        <Row>
            <Col xs={12} sm={4} md={4} lg={6}>
                <FormGroup validationState={props.rawAttack < 0 ? "error" : null}>
                    <ControlLabel>Weapon's Base Attack:</ControlLabel>
                    <FormControl
                        type="number"
                        placeholder="0"
                        value={props.rawAttack ? props.rawAttack : ""}
                        onChange={e => {
                            let value;
                            if (e.target.value) {
                                value = parseInt(e.target.value, 10);
                            } else {
                                value = 0;
                            }
                            props.update({rawAttack: value});
                        }}
                    />
                </FormGroup>
            </Col>
            <Col xs={12} sm={4} md={4} lg={6}>
                <FormGroup validationState={props.rawElement < 0 ? "error" : null}>
                    <ControlLabel>Weapon's Element:</ControlLabel>
                    <FormControl
                        type="number"
                        placeholder="0"
                        disabled={props.ranged}
                        value={props.rawElement ? props.rawElement : ""}
                        onChange={e => {
                            let value;
                            if (e.target.value) {
                                value = parseInt(e.target.value, 10);
                            } else {
                                value = 0;
                            }
                            props.update({rawElement: value});
                            // Update level of the following skills on element damage change
                            props.onElementChange(value);
                        }}
                    />
                </FormGroup>
            </Col>
            <Col xs={12} sm={4} md={4} lg={5}>
                <FormGroup validationState={props.affinity < -100 || props.affinity > 100 ? "error" : null}>
                    <ControlLabel>Weapon's Base Affinity:</ControlLabel>
                    <InputGroup>
                        <FormControl
                            type="number"
                            placeholder="0"
                            value={props.affinity ? props.affinity : ""}
                            onChange={e => {
                                let value;
                                if (e.target.value) {
                                    value = parseInt(e.target.value, 10);
                                } else {
                                    value = 0;
                                }
                                props.update({affinity: value});
                            }}
                        />
                        <InputGroup.Addon>%</InputGroup.Addon>
                    </InputGroup>
                </FormGroup>
            </Col> 
            <Col xs={12} sm={4} md={4} lg={3} lgOffset={1}>
                <FormGroup>
                    <ControlLabel>Attack Augments:</ControlLabel>
                    <FormControl 
                        onChange={e => props.update({attackAugments: parseInt(e.target.value, 10)})} 
                        componentClass="select" 
                        value={props.attackAugments}
                    >
                        <option value={0}>0</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                    </FormControl>
                </FormGroup>
            </Col>           
            <Col xs={12} sm={4} md={4} lg={3}>
                <FormGroup>
                    <ControlLabel>Affinity Augments:</ControlLabel>
                    <FormControl 
                        onChange={e => props.update({affinityAugments: parseInt(e.target.value, 10)})} 
                        componentClass="select" 
                        value={props.affinityAugments}
                    >
                        <option value={0}>0</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                    </FormControl>
                </FormGroup>
            </Col>
            <Col xs={12} sm={4} md={4} lg={8}>
            {
                props.ranged ?
                <FormGroup>
                    <ControlLabel>Ammo Type:</ControlLabel>
                    <FormControl 
                        onChange={e => props.update({ammoType: e.target.value, ammoMultiplier: getAmmoMultiplier(e.target.value)})} 
                        componentClass="select" 
                        value={props.ammoType}
                    >
                        {ammoList}
                    </FormControl>
                </FormGroup> :
                <FormGroup>
                    <ControlLabel>Weapon Sharpness:</ControlLabel>
                    <WeaponSharpness update={props.update} sharpness={props.sharpness}/>
                </FormGroup>
            }
            </Col>
        </Row>
    );
}

export default WeaponStatsForm;
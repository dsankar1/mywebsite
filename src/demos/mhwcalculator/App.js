import React, { Component } from 'react';
import { Grid, Row, Col, Jumbotron } from "react-bootstrap";
import WeaponTypePicker from "./components/WeaponTypePicker";
import WeaponStatsForm from "./components/WeaponStatsForm";
import SkillPicker from "./components/SkillPicker";
import { Weapon, AmmoMult, Sharpness, SharpnessMult, Ammo, BowAmmo, BowgunAmmo } from "./constants";
import { SkillList, Skills, isRanged, getMotionValue, ElementCap } from "./utils";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weaponType: "",
            weaponMultiplier: 1,
            rawAttack: 0,
            rawElement: 0,
            attackAugments: 0,
            affinityAugments: 0,
            affinity: 0,
            sharpness: Sharpness.Blue,
            sharpnessMultiplier: SharpnessMult.Blue,
            ammoType: Ammo.Normal,
            ammoMultiplier: AmmoMult.Normal,
            skills: SkillList()
        }
        // Skill updaters
        this.onElementChange = this.onElementChange.bind(this);
        this.onClassChange = this.onClassChange.bind(this);

        this.update = this.update.bind(this);
        this.updateSkill = this.updateSkill.bind(this);
        this.reset = this.reset.bind(this);
        this.calculations = this.calculations.bind(this);
    }

    onElementChange(value) {
        if (value > 0) {
            this.updateSkill(Skills.NonElementalBoost.index, 0);
        } else {
            this.updateSkill(Skills.ElementAttack.index, 0);
        }
    }

    onClassChange(weaponClass) {
        if (isRanged(weaponClass)) {
            this.updateSkill(Skills.ElementAttack.index, 0);
            this.updateSkill(Skills.Bludgeoner.index, 0);
            this.update({rawElement: 0});
        }
    }

    update(data) {
        this.setState(data);
    }

    updateSkill(index, level) {
        let skills = this.state.skills.slice();
        skills[index].level = level;
        this.setState({skills});
    }

    reset() {
        this.setState({
            weaponType: "",
            weaponMultiplier: 1,
            rawAttack: 0,
            rawElement: 0,
            attackAugments: 0,
            affinityAugments: 0,
            affinity: 0,
            sharpness: Sharpness.Blue,
            sharpnessMultiplier: SharpnessMult.Blue,
            ammoType: Ammo.Normal,
            ammoMultiplier: AmmoMult.Normal,
            skills: SkillList(),
            normalHit: 0,
            powerHit: 0,
            bestComboDps: 0
        });
    }

    calculations() {
        let attack = 0;
        if (this.state.weaponMultiplier !== 0) {
            attack = Math.round(this.state.rawAttack / this.state.weaponMultiplier);
        }
        attack += 5 * this.state.attackAugments;
        let element = Math.round(this.state.rawElement / 10);
        let elementCap = ElementCap(this.state.rawElement);
        let affinity = this.state.affinity;
        switch(this.state.affinityAugments) {
            case 1: affinity += 10;
                break;
            case 2: affinity += 15;
                break;
            case 3: affinity += 20;
                break;
            default:
                break;
        }
        let mv = getMotionValue(this.state.weaponType);
        let values = {
            rawAttack: this.state.rawAttack,
            rawElement: this.state.rawElement,
            weaponMultiplier: this.state.weaponMultiplier,
            sharpness: this.state.sharpness,
            attack,
            element,
            affinity,
            critDamage: 25,
            applied: []
        }
        for (let i = 0; i < this.state.skills.length; i++) {
            this.state.skills[i].skill.apply(this.state.skills[i].level, values);
        }
        if (values.element * 10 > elementCap) {
            values.element = elementCap / 10;
        }
        let calcAffinity = values.affinity;
        if (calcAffinity > 100) {
            calcAffinity = 100;
        }
        if (calcAffinity < -100) {
            calcAffinity = -100;
        }
        let attackSnapshot = values.attack;
        values.attack += Math.round((this.state.rawAttack * (.01 * (calcAffinity/(100/values.critDamage)))) / this.state.weaponMultiplier);
        let skillBonuses = values.applied.map((item, index) => {
            let bonuses = new Array(item.bonuses.length);
            for (let i = 0; i < item.bonuses.length; i++) {
                bonuses[i] = <li key={i}>{item.bonuses[i]}</li>
            }
            return (
                <li key={index}>{item.name} {item.level}: 
                    <ul>
                        {bonuses}
                    </ul>
                </li>
            );
        }); 
        let trueElement = Math.round(values.element * this.state.sharpnessMultiplier.Elemental);
        let trueAttack;
        if (isRanged(this.state.weaponType)) {
            trueAttack = Math.round(values.attack * this.state.ammoMultiplier);
            trueElement = Math.round(trueElement * 0.55);
        } else {
            trueAttack = Math.round(values.attack * this.state.sharpnessMultiplier.Physical);
        }
        return (
            <Row>
                {
                    skillBonuses.length > 0 ? 
                    <Col sm={4} smPush={8}>
                        <h3>Skill Bonuses:</h3>
                        <hr/>
                        <ul>{skillBonuses}</ul>
                    </Col> : null
                }
                <Col sm={skillBonuses.length > 0 ? 8 : 12} smPull={skillBonuses.length > 0 ? 4 : null}>
                    <h3>Results:</h3>
                    <hr/>
                    <Row>
                        <Col xs={6} style={{textAlign:"center"}}>
                            <h4>Raw Attack: {Math.round(attackSnapshot * values.weaponMultiplier)}</h4>
                        </Col>
                        <Col xs={6} style={{textAlign:"center"}}>
                            <h4>True Attack: {trueAttack}</h4>
                        </Col>
                        <Col xs={6} style={{textAlign:"center"}}>
                            <h4>Raw Element: {Math.round(values.element * 10)}</h4>
                        </Col>
                        <Col xs={6} style={{textAlign:"center"}}>
                            <h4>True Element: {trueElement}</h4>
                        </Col>
                        <Col xs={6} style={{textAlign:"center"}}>
                            <h4>Base Affinity: {this.state.affinity}%</h4>
                        </Col>
                        <Col xs={6} style={{textAlign:"center"}}>
                            <h4 style={{color: values.affinity > 100 ? "#ba4141" : null}}>Total Affinity: {values.affinity}%</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} style={{textAlign:"center"}}>
                            <h3>{mv.name}: ~ {Math.round(trueAttack * mv.mv * mv.hits + trueElement * 0.3 * mv.hits)}</h3>
                        </Col>
                    </Row>
                    <hr/>
                </Col> 
            </Row>
        );
    }

    render() {
        let disabled = [];
        if (this.state.rawElement > 0) {
            disabled.push(Skills.NonElementalBoost.index);
        } else {
            disabled.push(Skills.ElementAttack.index);
        }
        if (isRanged(this.state.weaponType)) {
            disabled.push(Skills.Bludgeoner.index);
        }
        return (
            <Grid style={{margin:"-24px 0 10px 0"}}>
                <Row>
                    <Col lg={12}>
                        <Jumbotron bsClass="page-header">
                            <h1>Monster Hunter World: Damage Calculator <span style={{color:"#777777", cursor:"pointer"}} onClick={this.reset} className="glyphicon glyphicon-refresh"/></h1>
                            <p>
                                This calculator generates the true damage of weapon/armor loadouts in Monster Hunter World. Training dummy resistances were used to estimate the damage done per basic attack. Elemental damage calculations are currently unavailable for Bows and Bowguns.
                            </p>
                        </Jumbotron>
                    </Col>
                </Row>

                <Row>
                    <Col lg={8}>
                        <WeaponTypePicker 
                            selected={this.state.weaponType} 
                            onClassChange={this.onClassChange}
                            onClick={this.update}
                        />
                        {
                            this.state.weaponType ? 
                                <div style={{fontSize:"2em", marginTop:"6px", textAlign:"center"}}>
                                    {this.state.weaponType}: x{this.state.weaponMultiplier} Multiplier
                                </div> : 
                                <div style={{fontSize:"2em", marginTop:"6px", textAlign:"center"}}>
                                    Select a Weapon Class
                                </div>
                        }
                        <hr/>
                    </Col>
                    <Col lg={4}>
                        <WeaponStatsForm 
                            update={this.update}
                            onElementChange={this.onElementChange}
                            ranged={isRanged(this.state.weaponType)}
                            rawAttack={this.state.rawAttack} 
                            rawElement={this.state.rawElement} 
                            attackAugments={this.state.attackAugments}
                            affinityAugments={this.state.affinityAugments}
                            affinity={this.state.affinity}
                            sharpness={this.state.sharpness}
                            ammoType={this.state.ammoType}
                            ammoList={
                                this.state.weaponType === Weapon.Bow ? BowAmmo : BowgunAmmo
                            }
                        />
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} mdPush={8} md={4}>
                        <SkillPicker 
                        update={this.updateSkill} 
                        list={this.state.skills} 
                        disabled={disabled} />
                    </Col>
                    <Col xs={12} mdPull={4} md={8}>
                        {
                            this.state.weaponType === "" ? 
                                <div style={{textAlign:"center", fontSize:"1.2em"}}>
                                    Choose your weapon, Hunter.
                                    <hr/>
                                </div> : 
                            this.state.rawAttack === 0 ?
                                <div style={{textAlign:"center", fontSize:"1.2em"}}>
                                    Your {this.state.weaponType} probably has an attack value, no?
                                    <hr/>
                                </div> : 
                            this.state.rawAttack < 0 || this.state.rawElement < 0 ? 
                                <div style={{textAlign:"center", fontSize:"1.2em"}}>
                                    You managed to get negative offensive values, impressive.
                                    <hr/>
                                </div> :this.calculations()
                        }
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default App;

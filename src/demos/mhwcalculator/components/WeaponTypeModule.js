import React from "react";
import { Ammo, AmmoMult } from "../constants";
import { getClassMultiplier } from "../utils";

const WeaponTypeModule = props => {
    return (
        <div className="weapon-type-module" 
        style={{backgroundColor: props.active ? "#66A66F" : null,display:"flex", cursor:"pointer", flexDirection:"column", width:"103px", minWidth:"103px", height:"90px", minHeight:"90px", border:"1px solid #999999", margin:"2px", paddingTop:"10px"}}
        onClick={() => {
            props.onClick({weaponType: props.name, weaponMultiplier: getClassMultiplier(props.name), ammoType: Ammo.Normal, ammoMultiplier: AmmoMult.Normal});
            props.onClassChange(props.name);
        }}>
            <div style={{textAlign:"center", fontSize:"0.9em", marginBottom:"2px", color: "white"}}><b>{props.name}</b></div>
            <img src={props.image} alt={props.name} style={{width:"40px", alignSelf:"center"}} />  
        </div>
    );
}

export default WeaponTypeModule;
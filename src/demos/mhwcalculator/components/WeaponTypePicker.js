import React from "react";

// Icons
import bowPng from "../res/bow.png";
import chargebladePng from "../res/chargeblade.png";
import gunlancePng from "../res/gunlance.png";
import hammerPng from "../res/hammer.png";
import heavybowgunPng from "../res/heavybowgun.png";
import huntinghornPng from "../res/huntinghorn.png";
import insectglaivePng from "../res/insectglaive.png";
import lancePng from "../res/lance.png";
import lightbowgunPng from "../res/lightbowgun.png";
import longswordPng from "../res/longsword.png";
import greatswordPng from "../res/greatsword.png";
import switchaxePng from "../res/switchaxe.png";
import swordandshieldPng from "../res/swordandshield.png";
import dualbladesPng from "../res/dualblades.png";

import WeaponTypeModule from "./WeaponTypeModule";
import { Weapon } from "../constants";

const WeaponTypePicker = props => {
    return (
        <div className="smooth-scroll" style={{display:"flex", flexDirection:"column"}}>
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <WeaponTypeModule active={props.selected === Weapon.ChargeBlade} onClassChange={props.onClassChange} onClick={props.onClick} image={chargebladePng} name={Weapon.ChargeBlade}/>
                <WeaponTypeModule active={props.selected === Weapon.DualBlades} onClassChange={props.onClassChange} onClick={props.onClick} image={dualbladesPng} name={Weapon.DualBlades}/>
                <WeaponTypeModule active={props.selected === Weapon.GunLance} onClassChange={props.onClassChange} onClick={props.onClick} image={gunlancePng} name={Weapon.GunLance}/>
                <WeaponTypeModule active={props.selected === Weapon.Hammer} onClassChange={props.onClassChange} onClick={props.onClick} image={hammerPng} name={Weapon.Hammer}/>
                <WeaponTypeModule active={props.selected === Weapon.HuntingHorn} onClassChange={props.onClassChange} onClick={props.onClick} image={huntinghornPng} name={Weapon.HuntingHorn}/>
                <WeaponTypeModule active={props.selected === Weapon.InsectGlaive} onClassChange={props.onClassChange} onClick={props.onClick} image={insectglaivePng} name={Weapon.InsectGlaive}/>
                <WeaponTypeModule active={props.selected === Weapon.Lance} onClassChange={props.onClassChange} onClick={props.onClick} image={lancePng} name={Weapon.Lance}/>
            </div>
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <WeaponTypeModule active={props.selected === Weapon.Longsword} onClassChange={props.onClassChange} onClick={props.onClick} image={longswordPng} name={Weapon.Longsword}/>
                <WeaponTypeModule active={props.selected === Weapon.Greatsword} onClassChange={props.onClassChange} onClick={props.onClick} image={greatswordPng} name={Weapon.Greatsword}/>
                <WeaponTypeModule active={props.selected === Weapon.SwitchAxe} onClassChange={props.onClassChange} onClick={props.onClick} image={switchaxePng} name={Weapon.SwitchAxe}/>
                <WeaponTypeModule active={props.selected === Weapon.SwordAndShield} onClassChange={props.onClassChange} onClick={props.onClick} image={swordandshieldPng} name={Weapon.SwordAndShield}/>
                <WeaponTypeModule active={props.selected === Weapon.Bow} onClassChange={props.onClassChange} onClick={props.onClick} image={bowPng} name={Weapon.Bow}/>
                <WeaponTypeModule active={props.selected === Weapon.LightBowgun} onClassChange={props.onClassChange} onClick={props.onClick} image={lightbowgunPng} name={Weapon.LightBowgun}/>
                <WeaponTypeModule active={props.selected === Weapon.HeavyBowgun} onClassChange={props.onClassChange} onClick={props.onClick} image={heavybowgunPng} name={Weapon.HeavyBowgun}/>
            </div>
        </div>
    );
}

export default WeaponTypePicker;
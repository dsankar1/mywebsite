import React from "react";
import { Sharpness } from "../constants";
import { getSharpnessMultiplier } from "../utils";

const WeaponSharpness = props => {
    const sharpnessStyle = {cursor:"pointer", height:"24px", minHeight:"24px", width:"24px", minWidth:"24px", border:"2px solid #DDDDDD"};
    const activeStyle = {width:"10px", height:"10px", margin:"5px", backgroundColor:"#CCCCCC"}
    return (
        <ul className="list-inline" style={{marginBottom:"20px"}}>
            <li>
                <div
                    style={{ ...sharpnessStyle, backgroundColor: "#ffffff" }}
                    onClick={() => props.update({ sharpness: Sharpness.White, sharpnessMultiplier: getSharpnessMultiplier(Sharpness.White) })}
                >
                    {
                        props.sharpness === Sharpness.White ?
                            <div style={activeStyle} /> : null
                    }
                </div>
            </li>
            <li>
                <div
                    style={{ ...sharpnessStyle, backgroundColor: "#2c86d9" }}
                    onClick={() => props.update({ sharpness: Sharpness.Blue, sharpnessMultiplier: getSharpnessMultiplier(Sharpness.Blue) })}
                >
                    {
                        props.sharpness === Sharpness.Blue ?
                            <div style={activeStyle} /> : null
                    }
                </div>
            </li>
            <li>
                <div
                    style={{ ...sharpnessStyle, backgroundColor: "#70d92c" }}
                    onClick={() => props.update({ sharpness: Sharpness.Green, sharpnessMultiplier: getSharpnessMultiplier(Sharpness.Green) })}
                >
                    {
                        props.sharpness === Sharpness.Green ?
                            <div style={{ ...activeStyle, backgroundColor: "#AAAAAA" }} /> : null
                    }
                </div>
            </li>
            <li>
                <div
                    style={{ ...sharpnessStyle, backgroundColor: "#d9d12c" }}
                    onClick={() => props.update({ sharpness: Sharpness.Yellow, sharpnessMultiplier: getSharpnessMultiplier(Sharpness.Yellow) })}>
                    {
                        props.sharpness === Sharpness.Yellow ?
                            <div style={{ ...activeStyle, backgroundColor: "#AAAAAA" }} /> : null
                    }
                </div>
            </li>
            <li>
                <div
                    style={{ ...sharpnessStyle, backgroundColor: "#d9662c" }}
                    onClick={() => props.update({ sharpness: Sharpness.Orange, sharpnessMultiplier: getSharpnessMultiplier(Sharpness.Orange) })}
                >
                    {
                        props.sharpness === Sharpness.Orange ?
                            <div style={activeStyle} /> : null
                    }
                </div>
            </li>
            <li>
                <div
                    style={{ ...sharpnessStyle, backgroundColor: "#d92c2c" }}
                    onClick={() => props.update({ sharpness: Sharpness.Red, sharpnessMultiplier: getSharpnessMultiplier(Sharpness.Red) })}
                >
                    {
                        props.sharpness === Sharpness.Red ?
                            <div style={activeStyle} /> : null
                    }
                </div>
            </li>
        </ul>        
    );
}

export default WeaponSharpness;
import React from "react";

const Title = props => (
    <div style={{marginBottom:"10px", boxShadow:"3px 3px 3px rgba(0, 0, 0, 0.2)", backgroundColor:"#222", border:"1px black solid", color:"lightgray", padding:"4px 8px", textAlign:"center", fontSize:"1.4em", ...props.style}}>
        {props.large ? <div style={{fontSize:"1.5em", padding:"4px 0"}}>{props.text}</div> : props.text}
    </div>
);

export default Title;
import React from "react";

const Title = props => (
    <div style={{backgroundColor:"#222", border:"1px black solid", color:"lightgray", padding:"4px 8px", textAlign:"center", fontSize:"1.4em"}}>
        {props.text}
    </div>
);

export default Title;
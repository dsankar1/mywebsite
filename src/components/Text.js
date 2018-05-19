import React from "react";

const Text = props => (
    <div style={{border:"1px #ccc solid", margin:"6px 0", height:"100%", borderRadius:"3px", ...props.style}}>
        {props.children}
    </div>
);

export default Text;
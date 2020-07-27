import React from "react";

const Button = (props) => (
    <button className={`Button ${props.active === 'false' ? 'Button-active' : ''}`}
            onClick={props.handleClick}>{props.active === 'true' ? 'ON' : props.active === 'false' ? 'OFF' : 'e̴̝̦̪͑̓͐r̸̘̟͚͆͒̚r̴̼͕͔̓̈́͝ò̵̟͔͉͝r̵̼͙͕͛̒̿'}</button>
)

export default Button;
import React from 'react'
import './user.css'
import {MdDelete} from 'react-icons/md';

const ContrastColor = require('contrast-color');
const cc = new ContrastColor();
const User = (props) => {
    const handle = ()=>{

        props.handleclick(props.email);
    }
    const generateRandomColor= ()=>{
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
    let letter;
    let color = generateRandomColor();
    const fgcolor = cc.contrastColor({bgColor:color});
    console.log(color);
    console.log(fgcolor);
    const logoStyle = {
        background : color,
        color : fgcolor 
    }
    if(props.firstname !== undefined)
    {
        letter = props.firstname.charAt(0).toUpperCase();
    }
    else
    {
        letter = '';
    }
   
    return (
        <div className='card'>
           <i className="logo"style={logoStyle}>{letter}</i>  
           <div className="item">
           <h4>{props.firstname} <span>{props.lastname}</span></h4>
            <span style={{color:"#999999"}}>{props.email}</span> 
            </div>
            <span className="delete" style={logoStyle} onClick={handle}><MdDelete/></span>   
        </div>
    )
}

export default User

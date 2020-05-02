import React, {useState, useEffect} from 'react';
import './cb.css';



//made the UI
const CustomButton = ({text, color, onClick,}) => <div 
style={{backgroundColor:color, boxShadow:"1px 1px 5px "+color}}
className="custom_button_box"
onClick={onClick}
>
    
    <div className="custom_button_box_inner">
        {text}
    </div>
</div>

function ButtonClick(){
    alert("Click OK");
    //document.querySelector("id").style.width = "100px";
}

CustomButton.defaultProps={
    text:"Default Button",
    color: "#DAB",
    onClick: ButtonClick,
  
    
}

export default CustomButton;


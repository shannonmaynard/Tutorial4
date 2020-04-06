import React from 'react';
import './cb.css';



//made the UI
const CustomButton = ({text, color}) => <div 
style={{backgroundColor:color, boxShadow:"1px 1px 5px "+color}}
className="custom_button_box">
    <div className="custom_button_box_inner">
        {text}
    </div>
</div>

CustomButton.defaultProps={
    text:"Default Button",
    color: "#DAB"
}

export default CustomButton;
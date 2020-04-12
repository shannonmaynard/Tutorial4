import React from 'react';
import './input.css'
import CustomButton from '../CustomButton';

const Input = ({placeholder}) => <div className="input_cont">
<input type = 'text' placeholder={placeholder}/>
<CustomButton text="Send" color="#58f" />
</div>;

Input.defaultProps = {
 placeholder:"Type your chat here!"
}

export default Input;
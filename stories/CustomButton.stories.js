import React from 'react';
import CustomButton from '../comps/CustomButton';

export default{
    title: "Custom Button",
    component:CustomButton
};

export const MyCustomButton = () => <CustomButton/>;

export const PageWithCustomButtons = () => <div>
    <CustomButton 
    color="#999"
    text="Cancel"/>
    <CustomButton 
    color="#3F5"
    text ="OK"/>
    <CustomButton 
    color="#F3F"
    text ="Submit"/>
    <CustomButton 
    text ="Menu"/>
</div>
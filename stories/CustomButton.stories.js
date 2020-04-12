import React from 'react';
import CustomButton from '../comps/CustomButton';
import Header from '../comps/Header';
import Input from '../comps/Input';
import Chat from '../comps/Chat';
import ChatPage from '../pages/ChatPage';


export default{
    title: "My comps",
    component:CustomButton
};
export const MyCustomButton = () => <CustomButton/>;

function CancelClick(){
    alert("Cancel");
}

export const MyCustomButtonWithOptions = () => <CustomButton
color="#999"
text="Cancel"
onClick={CancelClick}
/>;

export const MyHeader = () => <Header/>;
export const MyInput = () => <Input/>;
export const MyInputWithPlaceholder = () => <Input 
placeholder="Custom placeholder"/>;
export const MyChat = () => <Chat/>;
export const MyChatPage = () => <ChatPage />;

/*export const MyCustomButton = () => <CustomButton/>;

export const PageWithCustomButtons = () => <div>
   <Header 
   fontSize={15}
   color="#ABC"
   onMouseOver={CancelClick}
   />
   
   
    <CustomButton 
    color="#999"
    text="Cancel"
    onClick={CancelClick}
    />
    
    <CustomButton 
    color="#3F5"
    text ="OK"
    onClick={OKClick}
    />
    <CustomButton 
    color="#F3F"
    text ="Submit"
    onClick={SubmitClick}
    />
    <CustomButton 
    text ="Menu"
    onClick={MenuClick}
    />
</div>

function CancelClick(){
    alert("Cancel");
}

function OKClick(){
    alert("OK");
}

function SubmitClick(){
    alert("Submit");
}

function MenuClick(){
    alert("Menu");
}*/

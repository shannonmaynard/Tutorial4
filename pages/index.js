import Link from 'next/link';
import Router from 'next/router';
import {IoIosSearch} from 'react-icons/io';
import {AiFillWechat} from 'react-icons/ai';
import {TiContacts} from 'react-icons/ti';
import {MdInfoOutline} from 'react-icons/md';
import {AiOutlineProfile} from 'react-icons/ai';



function ClickIndex(){

    document.querySelector("#mainapp").style.right= "-100%";
    setTimeout(function(){
        Router.push("/ChatPage");
    }, 1000)
}



const Index = () => <div id="mainapp">
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet"></link>
  
    <div onClick={ClickIndex}><IoIosSearch />Index</div>
   
    <Link href="/ChatPage"><button>Chats! <AiFillWechat color="CornflowerBlue"/></button></Link>
    <Link href="/Contact"><button>Contact Me <TiContacts /></button></Link>
    <Link href="/AboutPage"><button>About <MdInfoOutline/></button></Link>
    <Link href="/BioPage"><button>Bio <AiOutlineProfile/></button></Link>
</div>


export default Index;
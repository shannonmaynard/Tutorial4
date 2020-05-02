import { useState, useEffect } from 'react';
import CustomButton from '../../comps/CustomButton'
import Header from '../../comps/Header';
import Link from 'next/link';
import './contact.css';

var index = 0;
const headers_arr = [
    "Thanks for contacting Me!",
    "Let Me Know if You Have Other Questions",
    "Goodbye",
    //{
    //  text: "dsdsdsd",
    // img: "https://www.zamzar.com/images/filetypes/jpg.png"
    // }
]

const Contact = () => {
    const [header_text, setHeader] = useState("Contact Me!");
    const [pageleft, setLeft] = useState("-100%");
    //const [img_url, setImg] = useState("");
    // const [index, setIndex] = useState (0);

    useEffect(() => {
        //What to do when it's created/born/beginning of the life cycle (want to transition left)
        setTimeout(() => {
            setLeft(0);
        }, 50);

        return () => {
            //What to do when the component dies
        }
    }, []);

    useEffect(() => {
        //What to do when it's created/born/beginning of the life cycle
    }, []);

    useEffect(() => {
        //What to do when a state in the page/component updates
        //when header_text state variable changes, i want to alert
        //you can alert like below comment...
        //alert("Alert that the Header Text Has Changed");
        //you can grab the state setLeft and change the amount of left from css
        setLeft(20);
        setTimeout(()=>{
            setLeft(0);
        }, 500);
    }, [header_text]);


    //Step 2 - connect the state variable to the UI
    return <div id="contactpage" style={{ left: pageleft }}>
        <Header text={header_text} fontSize={24} />
        {/*<img src={img_url} />*/}
        <h4>Enter your email below if you wish to contact us for more information...</h4>
        <div>
            <div id="email">
                <input id="email-input" />
                <CustomButton text="Email" onClick={() => {
                    //step 3 - connect the state function () to an interaction or figure out when you want to update the interface
                    setHeader(headers_arr[index]);
                    // setHeader(headers_arr[index].text)
                    // setImg(header_arr[index].img)
                    index++;
                    if (index > headers_arr.length - 1) {
                        index = 0;
                    }
                    //setLeft("110%");
                }} />
            </div>
            <br></br><br></br>
            <Link href="./Home">
                <div id="backBtn">
                    <CustomButton text="Previous" color="#303030" />
                </div>
            </Link>
        </div>
    </div>
}



//Step 1 - create the state variable and the function to update it, and put a default inside.
//Step 2 - connect the state variable to the UI
//step 3 - connect the state function () to an interaction or figure out when you want to update the interface


//if you use the line const[header_text, setHeader] = useState("Contact Me!");
//you're creating a state variable and creating a function and a default, 
//header_text is the state variable
//setHeader is the function that updates the state variable, meaning userface changes with new data
//"Contact Me!" is the default

export default Contact;
import CustomButton from '../../comps/CustomButton'
import Header from '../../comps/Header';
import './about.css';
import {useEffect} from 'react';
import Link from 'next/link';
import '../../comps/Chat/chat.css'
import AboutImg from '../../comps/Image'


const About = () => {

    useEffect(() => {
        setTimeout(() => {
            document.querySelector("#aboutpage").style.left = 0;
        }, 50);
    }, []);

    return <div class="aboutpage">
        <div id="aboutpage">
        <br></br>
        <Header text="About Me" fontSize={24} /><br></br>
        <AboutImg /><br></br>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget purus ac nibh interdum varius. Phasellus hendrerit tempus convallis. Pellentesque pretium velit eget nulla pretium, at eleifend orci suscipit. Donec ac iaculis justo. Integer pulvinar ac metus ut porttitor. Nullam interdum massa et velit semper viverra. Nam luctus odio et massa lobortis, eget placerat justo pharetra. Suspendisse eu sapien sem. Mauris convallis enim arcu, vel pulvinar velit hendrerit ac. Duis consequat malesuada sem, nec fermentum nibh efficitur et. In dignissim, ante ac dignissim volutpat, risus ex dignissim sapien, id vestibulum urna leo id dui. Sed suscipit tellus quam, vitae ultrices nunc facilisis sed. Duis malesuada sagittis dolor, vel mattis ante vehicula nec.
    <br></br>
        </div>

        <Link href="./Home">
            <div class="button-back">
            <CustomButton color="black" text="Back" />
            </div>
        </Link>

    </div>
}

    export default About;


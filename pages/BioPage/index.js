import CustomButton from '../../comps/CustomButton'
import Header from '../../comps/Header';
import './Bio.css';
import Link from 'next/link';
import React, { useEffect } from 'react';
import '../../comps/Chat/chat.css'
import Chat from '../../comps/Chat';

/*
useEffect(() => {
    setTimeout(() => {
        document.querySelector("#chatpage").style.left = 0;
    }, 100);

}, []);
*/

const Bio = () => {
    useEffect(() => {
        setTimeout(() => {
            document.querySelector("#Bio").style.left = 0;
        }, 100);

    }, []);

    return <div class="bio">
        <div id="Bio">
            <Header text="User Bio" fontSize={24} />
             Mauris convallis enim arcu, vel pulvinar velit hendrerit ac. Duis consequat malesuada sem, nec fermentum nibh efficitur et. In dignissim, ante ac dignissim volutpat, risus ex dignissim sapien, id vestibulum urna leo id dui. Sed suscipit tellus quam, vitae ultrices nunc facilisis sed. Duis malesuada sagittis dolor, vel mattis ante vehicula nec.
             <br></br> <br></br>
            <Header text="More Info" fontSize={16} />
            Mauris convallis enim arcu, vel pulvinar velit hendrerit ac. Duis consequat malesuada sem, nec fermentum nibh efficitur et. In dignissim, ante ac dignissim volutpat, risus ex dignissim sapien, id vestibulum urna leo id dui. Sed suscipit tellus quam, vitae ultrices nunc facilisis sed. Duis malesuada sagittis dolor, vel mattis ante vehicula nec.
        </div>
        <Link href="./Home">
            <div id="back">
                <br></br><br></br><br></br>
                <CustomButton text="Previous" color="#303030" />
            </div>
        </Link>
    </div>
}
export default Bio;


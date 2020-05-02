import React from 'react';
import './image.css';


const defaultImage = require('./default.png');

const AboutImg = ({imgSrc}) => <div id="aboutImg">
<img src={imgSrc} />
</div>
    


AboutImg.defaultProps = {
    imgSrc:defaultImage
}

export default AboutImg;
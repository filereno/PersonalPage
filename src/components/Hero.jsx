import React from 'react';
import One from '../images/one.jpg'
import Two from '../images/two.jpg'
import Three from '../images/three.jpg'
import For from '../images/for.jpg'



const Hero = () => {
	
	return (
		<div className="slides-list">
			<div className="slide">
				<img src={One} alt="One"/>
			</div>
			<div className="slide">
				<img src={Two} alt="Two"/>
			</div>
			<div className="slide">
				<img src={Three} alt="Three"/>
			</div>
			<div className="slide">
				<img src={For} alt="For"/>
			</div>
		</div>
	);
};
    
export default Hero;
import React from 'react';

const Slide = props => {

	return (
		<div className={props.class}>				
			<img src={props.image} alt=""/>
			<p>{props.text}</p>
			<div>
				<h5>{props.person}</h5>
				<h5>{props.func}</h5>
			</div>
		</div>	
	);
};
		    
export default Slide;
import React from 'react';
import Icon from '../../components/generics/Sprites'


const Tecnology = props => {

	return (
		<div>
			<div>
				<i><Icon icon={props.icon}></Icon></i>
			</div>
			
			<div>
				<img src={props.image} width="640px" height="400px"  alt="drone"/>
			</div>


			<h2>{props.tittle}</h2>
			<p>{props.text}</p>
		</div>	
	);
};
		    
export default Tecnology;
import React from 'react';
import Icon from '../components/SvgSprites'

const MainTec = props => {

	return (
		<div>
			<div>
				<i><Icon icon={props.icon}></Icon></i>
			</div>
			
			<div>
				<img src={props.image} width="400px" height="400"  alt="drone"/>
			</div>

			<h2>{props.tittle}</h2>
			<p>{props.text}</p>
		</div>	
	);
};
		    
export default MainTec;
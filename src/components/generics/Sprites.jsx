import React from 'react';
import PathSvg from '../../images/svg/sprites.svg'



const Icon = props => {

	return (
		<svg className={`icon icon-${props.icon}`}>
			<use href={`${PathSvg}#${props.icon}`}></use>
    		</svg>	
	)
};

export default Icon;

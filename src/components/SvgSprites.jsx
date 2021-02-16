import React from 'react';
import pathSvg from '../images/svg/sprites.svg'

const Icon = props => {

	return (
		<svg className={`icon-footer icon-${props.icon}`}>
			<use href={`${pathSvg}#${props.icon}`}></use>
    		</svg>	
	)
};

export default Icon;

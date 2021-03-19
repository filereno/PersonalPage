import React, { useState, useRef, useEffect } from 'react';

import Icon from '../../generics/Sprites'
import Dimensions from '../../generics/Dimensions'
import PathSvg from '../../../images/svg/sprites.svg'
import { NavLink } from 'react-router-dom';

const Menu = () => {

	const itemMenuHamb = useRef();
	const itemIconHamb = useRef();
	const itemMenuInput = useRef();
	
	const { height, width } = Dimensions();
	const [checked, setChecked] = useState(false);
	let icon = "";
	const pathMenu = `${PathSvg}#menu`;
	const pathClose = `${PathSvg}#close`;
	console.log("H: " +height, "W: " +width);
	useEffect(() => {
		// console.log(itemMenuHamb.current)

		if (checked == true)  {
			itemMenuHamb.current.style.display = "";
			itemIconHamb.current.lastChild.lastChild.href.baseVal = pathClose;
			itemMenuInput.current.style.position = "fixed";
			itemMenuInput.current.style.backgroundColor = "#ee46f7";
			itemMenuInput.current.style.zIndex = "1";
			itemIconHamb.current.lastChild.lastChild.style.fill = "#ffcce6";
		} else if (checked == false) {
			itemMenuHamb.current.style.display = "none";			
			itemIconHamb.current.lastChild.lastChild.href.baseVal = pathMenu;
			itemMenuInput.current.style.position = "";
			itemMenuInput.current.style.backgroundColor = "white";
			itemMenuInput.current.style.zIndex = "";
			itemIconHamb.current.lastChild.lastChild.style.fill = "rgb(210, 56, 108)";
		}


		if (width > 900) {
			itemMenuInput.current.style.display = "none";
			itemMenuHamb.current.style.display = "";
			itemMenuHamb.current.lastChild.lastChild.lastChild.color = "white";
		}
		if (width <= 900) {
			itemMenuInput.current.style.display = "";
		}	

			
	},[checked, width])

	

	return (
		<div>
			<div ref={itemMenuInput}>
				<input 
					type="checkbox" 
					id="switch-menu"
					defaultChecked={checked}
					onChange={() => setChecked(!checked)}
				/>
				<label htmlFor="switch-menu" id="button-menu" className="menu-bar">
					<i ref={itemIconHamb}><Icon icon="menu"></Icon></i>
				</label>
			</div>

			<menu ref={itemMenuHamb} id="hamburguer">
				<ul id="menu">
					<li>
						<NavLink to="/" exact>Home</NavLink>
					</li>
					<li>
						<NavLink to="/tecnology">Tecnologias</NavLink>
					
					</li>
					<li>
						<NavLink to="/tutorials">Tutoriais</NavLink>
					</li>
					<li>
						<NavLink to="/contact">Contato</NavLink>
					
					</li>	
					<li>
						<NavLink to="/about">Sobre</NavLink>
					</li>	
				</ul>
			</menu>
		</div>
	);
};
    
export default Menu;
import React, { useRef, useEffect } from 'react';

import Icon from '../../generics/Sprites'
import Slide from './Slide';
import person1 from '../../../images/person3.png';
import person2 from '../../../images/person2.png';
import person3 from '../../../images/person1.png';




const Testimony = () => {

	const items = useRef();
	const nextItem = useRef();
	const previousItem = useRef();
	let count = 0;

	// useEffect(() => {
	// 	console.log(items.current)
	// })
	const next = () => {
		items.current.children[count].classList.remove('active');
	
		if(count < (items.current.children.length) - 1) 
		{
			count++;
		} 

		else 
		{
			count = 0;
		}
	
		items.current.children[count].classList.add('active');
	}

	const previus = () => {
		items.current.children[count].classList.remove('active');
	
		if(count < (items.current.children.length) - 1) 
		{
			count++;
		} 

		else 
		{
			count = 0;
		}
	
		items.current.children[count].classList.add('active');
	}
	

	return (
		<>
			<h1>Testemunhos</h1>
			<div ref={items} className="slider">			
				<Slide class="img active" image={person1} text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, earum sapiente! Velit laboriosam placeat qui dolorem quam, quia ratione. Voluptate quae quod doloremque quia dolore libero, possimus ab excepturi dignissimos!" person="Feliciano da Silva" func="Administração"/>
				<Slide class="img" image={person3} text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, earum sapiente! Velit laboriosam placeat qui dolorem quam, quia ratione. Voluptate quae quod doloremque quia dolore libero, possimus ab excepturi dignissimos!" person="Cristinao Nogueira" func="Analista"/>
				<Slide class="img" image={person2} text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, earum sapiente! Velit laboriosam placeat qui dolorem quam, quia ratione. Voluptate quae quod doloremque quia dolore libero, possimus ab excepturi dignissimos!" person="Fatima Dutra" func="Desenvolvedor"/>
			</div>
			<nav className="slide-nav">
				<ul>
					<li className="arrow">
						<button ref={previousItem} onClick={previus} className="previous">
							<span>
								<i><Icon icon="previous"></Icon></i>
							</span>
						</button>
					</li>
					<li className="arrow">
						<button ref={nextItem} onClick={next} className="next">
							<span>
								<i><Icon icon="next"></Icon></i>
							</span>
						</button>
					</li>
				</ul>
			</nav>
		</>
	);
};
					    
export default Testimony;
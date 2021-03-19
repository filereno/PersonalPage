import React from 'react';

import Menu from '../header/menu/Menu';
import Aside from '../aside/Aside';
import Footer from '../footer/Footer';
import About from '../about/Index';
import Logo from '../header/logo/Logo'
import Search from '../header/search/Search'

const AboutIndex = () => {
	return (		
		<div className="containermain">
			<header>
				<Logo/>
				<Search/>
				<Menu/>
			</header>
			<Aside/>
			<Aside/>
			<About/>
			<Footer/>
		</div>
	);
}

export default AboutIndex;
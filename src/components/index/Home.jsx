import React from 'react';

import Menu from '../header/menu/Menu';
import Hero from '../header/hero/Hero';
import Aside from '../aside/Aside';
import Footer from '../footer/Footer';
import Home from '../home/Index';
import Logo from '../header/logo/Logo'
import Search from '../header/search/Search'


const HomeIndex = () => {
	return (
		<div className="containermain" >
			<header>
				<Logo/>
				<Search/>
				<Menu/>
				<div>
					<Hero/>
				</div>
			</header>
			<Aside/>
			<Aside/>
			<Home/>
			<Footer/>
		</div>
	);
}

export default HomeIndex;
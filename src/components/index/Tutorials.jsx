import React from 'react';

import Menu from '../header/menu/Menu';
import Aside from '../aside/Aside';
import Footer from '../footer/Footer';
import Tutorials from '../tutorials/Tutorials';
import Search from '../header/search/Search'
import Logo from '../header/logo/Logo'


const TutorialsIndex = () => {
	return (
		<div className="containermain">
			<header>
				<Logo/>
				<Search/>
				<Menu/>
			</header>
			<Aside/>
			<Aside/>
			<Tutorials/>
			<Footer/>
		</div>
	);
}

export default TutorialsIndex;
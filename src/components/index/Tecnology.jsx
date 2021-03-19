import React from 'react';

import Menu from '../header/menu/Menu';
import Aside from '../aside/Aside';
import Footer from '../footer/Footer';
import Logo from '../header/logo/Logo'
import Tecnology from '../tecnology/index'
import Search from '../header/search/Search'

const TecnologyIndex = () => {
	return (		
		<div className="containermain">
			<header>
				<Logo/>
				<Search/>
				<Menu/>
			</header>
			<Aside/>
			<Aside/>
			<Tecnology/>
			<Footer/>
		</div>
	);
}

export default TecnologyIndex;
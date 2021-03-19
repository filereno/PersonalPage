import React, { useEffect } from 'react';

import Testimony from './testimony/Testimony'
import Scrolling from '../generics/Scrolling'

const MainHome = () => {
	
	return (
		<main className="home"> 

			<div id="testimony">
				<Testimony/>
			</div>
		</main>
	);
};
    
export default MainHome;
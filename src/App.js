import {BrowserRouter as Router, Link} from 'react-router-dom';

import './App.css';
import Nav from './components/nav/Nav';
import Menu from './components/menu/Menu';
import Hero from './components/hero/Hero';
import Aside from './components/aside/Aside';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

function App() {
  return (
	<Router>
		<div className="containermain">
			<header>
				<Menu/>
				<Nav/>
			</header>
			<header>
				<Hero/>
			</header>
			<Aside/>
			<Aside/>
			<Main/>
			<Footer/>
		</div>
	</Router>
  );
}

export default App;

import {BrowserRouter as Router, Link} from 'react-router-dom';

import './App.css';
import Nav from './components/Nav';
import Menu from './components/Menu';
import Hero from './components/Hero';
import Aside from './components/Aside';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
	<Router>
		<div className="container">
			<header>
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

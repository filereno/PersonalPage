import {BrowserRouter as Switch, Route, BrowserRouter} from 'react-router-dom';

import './App.css';
import './components/about/Style.css'
import './components/home/Style.css'
import './components/tecnology/Style.css'
import './components/header/logo/Style.css'
import './components/header/search/Style.css'
import './components/header/menu/Style.css'
import './components/header/hero/Style.css'
import './components/footer/Style.css'
import './components/contact/Style.css'
import './components/tutorials/Style.css'

import Routers from './components/routers/Routers'


function App() {
  return (
		
	<Routers/>
  );
}

export default App;

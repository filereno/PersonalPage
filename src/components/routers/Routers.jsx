import {BrowserRouter as Switch, Route, BrowserRouter} from 'react-router-dom';

import IndexHome from '../index/Home';
import IndexAbout from "../index/About";
import IndexTecnology from "../index/Tecnology";
import IndexTutorials from "../index/Tutorials";
import IndexContact from "../index/Contact";

const Routers = () => {
  return (
		<BrowserRouter>
				<Switch>
					<Route path="/" exact>
						<IndexHome/>
					</Route>
					<Route path="/tecnology">
						<IndexTecnology/>
					</Route>
					<Route path="/tutorials">
						<IndexTutorials/>
					</Route>
					<Route path="/contact">
						<IndexContact/>
					</Route>
					<Route path="/about">
						<IndexAbout/>
					</Route>
				</Switch>
		</BrowserRouter>
  );
}

export default Routers;
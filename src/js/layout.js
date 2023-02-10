import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from "./views/home";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Characters } from "./views/characters";
import { Charactersdetails } from "./views/charactersdetails";
import { Planets } from "./views/planets";
import { Planetsdetails} from "./views/planetsdetails";

import injectContext from "./store/appContext";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<>
			<BrowserRouter basename={basename}>
				<Navbar />
					<Routes>
						<Route exact path="/" component={Home} />
						<Route exact path="/Characters" component={Characters} />
						<Route exact path="/Charactersdetails/:id" component={Charactersdetails} />
						<Route exact path="/Planets" component={Planets} />
						<Route exact path="/Planetsdetails/:id" component={Planetsdetails} />
						
					</Routes>
					<Footer />
			</BrowserRouter>
		</>
	);
};

export default injectContext(Layout);

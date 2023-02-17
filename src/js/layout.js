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
						<Route  element={<Home/>}path="/" />
						<Route  element={<Characters/>}path="/Characters" />
						<Route  element={<Charactersdetails/>}path="/Charactersdetails/:id" />
						<Route  element={<Planets/>}path="/Planets" />
						<Route  element={<Planetsdetails/>}path="/Planetsdetails/:id" />				
					</Routes>
					<Footer />
			</BrowserRouter>
		</>
	);
};

export default injectContext(Layout);

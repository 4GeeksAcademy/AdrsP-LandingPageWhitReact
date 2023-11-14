import React from "react";

import NavBar from "./NavBar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid">
			<NavBar/>
			<Jumbotron/>
			<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
				<div class="col"><Card/></div>
				<div class="col"><Card/></div>
				<div class="col"><Card/></div>
				<div class="col"><Card/></div>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;

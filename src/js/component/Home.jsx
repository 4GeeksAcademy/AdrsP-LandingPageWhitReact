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
			<div class="container m-4 d-flex justify-content-between">
				<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
					<div class="col"><Card imagen="https://wallpapers-all.com/uploads/posts/2016-11/19_dog.jpg"/></div>
					<div class="col"><Card imagen="https://4.bp.blogspot.com/-QwkFMPOup2I/VLhGSb7bvMI/AAAAAAAAAgE/AOngT17NH5Y/w1200-h630-p-k-no-nu/Perro-salchicha-3.jpg" /></div>
					<div class="col"><Card imagen="https://th.bing.com/th/id/OIP.EA31WgRBafl_M4HGvvEXCwHaEo?rs=1&pid=ImgDetMain"/></div>
					<div class="col"><Card imagen="https://th.bing.com/th/id/OIP.q24_FKgEOQwjDUpawKxqrgHaE7?rs=1&pid=ImgDetMain"/></div>
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;

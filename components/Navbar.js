import React, {Component} from 'react';
import '../css/Navbar.css'


class Navbar extends Component {
	constructor(){
		super();

	};


render(){
	return(
		<nav className="navbar navbar-inverse navbar-fixed-top">
			<div className="container-fluid">
			<div className="navbar-header">
			  <a className="navbar-brand">
		    <img src='./SMT_Logo.jpg' width="250" height="150" className="d-inline-block align-top"  />
		    Stamford Massage Therapy</a>
		  <ul className="nav navbar-nav">
		  <li className="active"><a href="#">Welcome</a></li>
		  <li><a href="#">Testimonials</a></li>
		  <li><a href="#">Meet The Staff</a></li>
		  <li><a href="#">Contact Us</a></li>
		  </ul>
		  </div>
		  </div>
		</nav>
		);
	}
}

export default Navbar;
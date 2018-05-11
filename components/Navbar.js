import React, {Component} from 'react';
import '../css/Navbar.css'


class Navbar extends Component {
	constructor(){
		super();

	};


render(){
	return(
		<nav class="navbar navbar-light bg-light">
		  <a class="navbar-brand" href="#">
		    <img src='./SMT_Logo.jpg' width="250" height="150" class="d-inline-block align-top" alt="" />
		    Stamford Massage Therapy
		  </a>
		</nav>
		);
	}
}

export default Navbar;
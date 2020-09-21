<<<<<<< HEAD
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
class Nav extends React.Component {
	constructor(props){
		super(props);
	}
	onLogin = () =>{
		this.props.onRouteChange('signin');
	}
	onSignUp = () =>{
		this.props.onRouteChange('register');
	}
	render(){
		return(
		<div>
			<div className="card text-center">
			  <div className="card-header">
			    <ul className="nav nav-pills card-header-pills float-right">
			      <li className="nav-item pr-3">
			        <button type="button" className="btn btn-outline-success" onClick = {this.onLogin}>Login</button>
			      </li>
			      <li className="nav-item">
			        <button type="button" className="btn btn-outline-success" onClick = {this.onSignUp}>SignUp</button>
			      </li>
			    </ul>
			  </div>
			</div>
		</div>
		);
	}
} 	
=======
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
class Nav extends React.Component {
	constructor(props){
		super(props);
	}
	onLogin = () =>{
		this.props.onRouteChange('signin');
	}
	onSignUp = () =>{
		this.props.onRouteChange('register');
	}
	render(){
		return(
		<div>
			<div className="card text-center">
			  <div className="card-header">
			    <ul className="nav nav-pills card-header-pills float-right">
			      <li className="nav-item pr-3">
			        <button type="button" className="btn btn-outline-success" onClick = {this.onLogin}>Login</button>
			      </li>
			      <li className="nav-item">
			        <button type="button" className="btn btn-outline-success" onClick = {this.onSignUp}>SignUp</button>
			      </li>
			    </ul>
			  </div>
			</div>
		</div>
		);
	}
} 	
>>>>>>> 07de71fe5269f6c517cb3b5ee124676d42a5b078
export default Nav;
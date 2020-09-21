import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
class Nav extends React.Component {
	constructor(props){
		super(props);
	}
	onLogin = () =>{
		this.props.onRouteChange('signin');
	}
	render(){
		return(
		<div>
			<div class="card text-center">
			  <div class="card-header">
			    <ul class="nav nav-pills card-header-pills float-right">
			      <li class="nav-item pr-3">
			        <button type="button" class="btn btn-outline-success" onClick = {this.onLogin}>Login</button>
			      </li>
			      <li class="nav-item">
			        <button type="button" class="btn btn-outline-success">SignUp</button>
			      </li>
			    </ul>
			  </div>
			</div>
		</div>
		);
	}
} 	
export default Nav;
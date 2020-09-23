
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
class signin extends Component {
	constructor (props){
		super(props);
		this.state = {
			signinField: '',
			signinPass: ''
		}
	}
	onFieldChange = (event) =>{
		this.setState({ signinField: event.target.value})
	}
	onPasswordChange = (event) => {
		this.setState({signinPass: event.target.value});
	}
	onSubmitSignIn = () => {
		console.log(this.state.signinField);
		console.log(this.state.signinPass);
		fetch('http://localhost:3000/signin',{
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.signinField,
				password: this.state.signinPass
			})
		})
		.then(response => response.json())
		.then(data => {
			console.log(data);
			if (data.id){
				this.props.onRouteChange('home');
			}
			else{
				alert('Login or Password incorrect.');
			}
		})

	}
	render(){
		return (
		<div style={{ JustifyContent: 'center'}}>
		<form>
			  <div className="form-group">
			    <label >Email address</label>
			    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange = {this.onFieldChange}/>
			    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
			  </div>
			  <div className="form-group">
			    <label >Password</label>
			    <input type="password" className="form-control" id="exampleInputPassword1" onChange = {this.onPasswordChange}/>
			  </div>
			  <div className="form-group form-check">
			    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
			    <label className="form-check-label" >Check me out</label>
			  </div>
			  <button type="submit" className="btn btn-primary" onClick = {this.onSubmitSignIn} >Submit</button>
			</form>
		</div>
			);
	}
}

export default signin;
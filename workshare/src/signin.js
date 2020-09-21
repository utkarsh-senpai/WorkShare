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
			if (data.id){
				// this.props.onRouteChange('home');
			}
			else{
				alert('Login or Password incorrect.')
			}
		})

	}
	render(){
		return (
		<div style={{ JustifyContent: 'center'}}>
		<form>
			  <div class="form-group">
			    <label for="exampleInputEmail1">Email address</label>
			    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange = {this.onFieldChange}/>
			    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">Password</label>
			    <input type="password" class="form-control" id="exampleInputPassword1" onChange = {this.onPasswordhange}/>
			  </div>
			  <div class="form-group form-check">
			    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
			    <label class="form-check-label" for="exampleCheck1">Check me out</label>
			  </div>
			  <button type="submit" class="btn btn-primary" onClick = {this.onSubmitSignIn} >Submit</button>
			</form>
		</div>
			);
	}
}
export default signin;
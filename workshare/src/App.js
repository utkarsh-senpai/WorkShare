import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from './Nav';
import Signin from './signin';

class App extends Component {
  constructor () {
    super();
    this.state ={
      route: '/',
      user: {
          id: '',
          fname: '',
          lname: '',
          email: '',
          password: '',
          pnum: '',
          linkedin: '',
          github: '',
          skill1: '',
          skill2: '',
          skill3: ''
      }  
    }
  }
  onRouteChange = (route) => {
    this.setState({route: route})
  }
  render () {
    if (this.state.route === 'signin'){
      return(
        <Signin onRouteChange = {this.onRouteChange}/>
        );
    }
    else {
      return (
          <div>
            <Nav onRouteChange = {this.onRouteChange} />
          </div>
        );
    }
  }

}

export default App;

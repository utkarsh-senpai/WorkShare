import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from './Nav';
import Signin from './signin';
import About from './about';
import Home from './home';
import Skill from './skill';
import Register from './register';
import Interest from './interest';


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
    this.setState({route: String(route)})
    console.log(this.state.route);
  }
  render () {
    if (this.state.route === 'signin'){
      return(
        <Signin onRouteChange = {this.onRouteChange}/>
        );
    }

    else if (this.state.route === 'register'){
      return (
          <div>
            <Register onRouteChange = {this.onRouteChange}/>
          </div>
        );
    }
    else if (this.state.route === 'home'){
      return (
          <div>
            <Home/>
          </div>
        );
    }
    else if (this.state.route === 'interest'){
      return (
          <div>
            <Interest/>
          </div>
        );
    }
    else if (this.state.route === 'skills'){
      return (
          <div>
            <Skill/>
          </div>
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

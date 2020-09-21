import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from './Nav';
import Signin from './signin';
<<<<<<< HEAD
import Home from './home';
import Skill from './skill';
import Register from './register';
import Interest from './interest';
=======

>>>>>>> 07de71fe5269f6c517cb3b5ee124676d42a5b078
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
<<<<<<< HEAD
    this.setState({route: '/'})
    this.setState({route: String(route)})
    console.log(this.state.route);
  }

=======
    this.setState({route: route})
  }
>>>>>>> 07de71fe5269f6c517cb3b5ee124676d42a5b078
  render () {
    if (this.state.route === 'signin'){
      return(
        <Signin onRouteChange = {this.onRouteChange}/>
        );
    }
<<<<<<< HEAD
    else if (this.state.route === 'register'){
      return (
          <div>
            <Register onRouteChange = {this.onRouteChange}/>
          </div>
        );
    }
    else if (this.state.route === 'root'){
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
=======
>>>>>>> 07de71fe5269f6c517cb3b5ee124676d42a5b078
    else {
      return (
          <div>
            <Nav onRouteChange = {this.onRouteChange} />
          </div>
        );
<<<<<<< HEAD

=======
>>>>>>> 07de71fe5269f6c517cb3b5ee124676d42a5b078
    }
  }

}

export default App;

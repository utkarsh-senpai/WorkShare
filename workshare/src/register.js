import React from "react";
// import Demo from "./Demo";
import "./index.css";
// import Interest from "./Interest";
// import Register from "./Register";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import { Button } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
class Testing extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
        fname: "",
        password: '',
        pass2: '',
        lname: '',
        username: '',
        email: '',
        city: '',
        mobile: '',
        github: '',
        linkedin: '',
        showPassword: false,
        showPassword2: false,
        skill1: '',
        skill2: '',
        skill3: '',

      }

    }
     handleChange = (event) => {
      this.setState({[event.target.name]: event.target.value });
    };
  
     handleClickShowPassword = () => {
      this.setState({ 'showPassword': !this.state.showPassword });
    };
     jesse = () => {
      this.setState({'showPassword2': !this.state.showPassword2 });
    }
  
     handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
     mySubmitHandler = (event) =>{
      
      fetch('http://localhost:3000/register',{
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        fname: this.state.fname,
        password: this.state.password,
        lname: this.state.lname,
        username: this.state.username,
        email: this.state.email,
        pnum: this.state.mobile,
        github: this.state.github,
        linkedin: this.state.linkedin,
        skill1: this.state.skill1,
        skill2: this.state.skill2,
        skill3: this.state.skill3
      })
    })
    .then(response => response.json())
    .then(user => { 
      if(user){
        alert("Welcome to the WorkShare Community!!");
        this.props.onRouteChange("/");
      }
      else{
        alert("Wrong Credentials")
      }
    })
    }

  useStyles = makeStyles((theme) => ({
   
    textField: {
      marginLeft: theme.spacing(5),
      marginRight: theme.spacing(2),
      width: '40ch',
    },
    pass: {
        marginLeft: theme.spacing(5),
      marginRight: theme.spacing(2),
      width: '38ch',
    },
    formControl: {
        marginLeft: theme.spacing(5),
        marginRight: theme.spacing(2),
        width: '24ch'
        
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
  })); 

    render(){
       
      const classes = this.useStyles;
      
        
      return(<div className="root">
  
          <form autoComplete="off">
          <div className="middle"><h1><strong>Sign Up</strong></h1></div>
          <div>
          <TextField
                    label="First Name"
                    id="outlined-margin-dense"
                    defaultValue=""
                   placeholder="Enter Your First Name"
                    margin="dense"
                    variant="outlined"
                    name="fname"
                    className="textField padl padr" 
                    color="primary"
                    onChange={this.handleChange}
                    
                  />
                  <TextField
                    label="Last Name"
                    id="outlined-margin-dense"
                    defaultValue=""
                    name="lname"
                   placeholder="Enter Your Last Name"
                    margin="dense"
                    variant="outlined"
                    className="textField padl padr"
                    onChange={this.handleChange}
                    color="primary"
                  />
                  </div>
                  <div></div>
                  <div>
                  <TextField
                    label="Mobile No."
                    id="outlined-margin-dense"
                    defaultValue=""
                   placeholder="Enter Your Mobile No."
                    margin="dense"
                    name="mobile"
                    variant="outlined"
                    className="textField"
                    onChange={this.handleChange}
                    color="primary"
                  />
                  <TextField
                    label="Linkedin Link"
                    id="outlined-margin-dense"
                    defaultValue=""
                    name="linkedin"
                   placeholder="Enter Your Linkedin Link"
                    margin="dense"
                    variant="outlined"
                    className="textField"
                    onChange={this.handleChange}
                    color="primary"
                  />
                  </div>
                  <div></div>
                  <div>
                  <TextField
                    label="User Name"
                    id="outlined-margin-dense"
                    defaultValue=""
                   placeholder="Enter Your User Name"
                    margin="dense"
                    name="username"
                    variant="outlined"
                    className="textField"
                    onChange={this.handleChange}
                    color="primary"
                  />
                  <TextField
                    label="GitHub Link"
                    id="outlined-margin-dense"
                    defaultValue=""
                   placeholder="Enter Your Github Link"
                    margin="dense"
                    name="github"
                    variant="outlined"
                    className="textField"
                    color="primary"
                    onChange={this.handleChange}
                    
                  />
                  </div>
                  <div></div>
                  <div>
                  <TextField
                    label="City"
                    id="outlined-margin-dense"
                    defaultValue=""
                   placeholder="Enter Your City"
                    margin="dense"
                    name="city"
                    variant="outlined"
                    className="textField"
                    onChange={this.handleChange}
                    color="primary"
                  />
                  <TextField
                    label="Email"
                    id="outlined-margin-dense"
                    defaultValue=""
                   placeholder="Enter Your Email"
                    margin="dense"
                    name="email"
                    variant="outlined"
                    className="textField"
                    onChange={this.handleChange}
                    color="primary"
                  />
                  </div>
          <div></div>
          <div>
          <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel>Skill 1</InputLabel>
                  <Select
                    native
                    name="skill1"
                    
                    onChange={this.handleChange}
                    label="Skills"
                    margin="dense"
                    color="primary"
                  >
                    <option aria-label="None" value="" />
                    <option value="Java">Java</option>
                    <option value="Python">Python</option>
                    <option value="Cpp">C++</option>
                    <option value="ML">Machine Learning</option>
                    <option value="AI">Artificial Intelligence</option>
                    <option value="WD">Web Development</option>
                  </Select>
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel>Skill 2</InputLabel>
                  <Select
                    native
                    name="skill2"
                    onChange={this.handleChange}
                    label="Skills"
                    margin="dense"
                    color="primary"
                  >
                    <option aria-label="None" value="" />
                    <option value="Java">Java</option>
                    <option value="Python">Python</option>
                    <option value="Cpp">C++</option>
                    <option value="ML">Machine Learning</option>
                    <option value="AI">Artificial Intelligence</option>
                    <option value="WD">Web Development</option>
                  </Select>
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel>Skill 3</InputLabel>
                  <Select
                    native
                    name="skill3"
                    onChange={this.handleChange}
                    label="Skills"
                    margin="dense"
                    color="primary"
                  >
                    <option aria-label="None" value="" />
                    <option value="Java">Java</option>
                    <option value="Python">Python</option>
                    <option value="Cpp">C++</option>
                    <option value="ML">Machine Learning</option>
                    <option value="AI">Artificial Intelligence</option>
                    <option value="WD">Web Development</option>
                  </Select>
                </FormControl>
               
          </div><div></div>
          <div>
          <FormControl variant="outlined">
                 
                    <OutlinedInput
                      type={this.state.showPassword ? 'text' : 'password'}
                      value={this.state.password}
                      color="primary"
                      margin="dense"
                      placeholder="Password"
                      className={classes.pass}
                      name="password"
                      onChange={this.handleChange}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={this.handleClickShowPassword}
                            onMouseDown={this.handleMouseDownPassword}
                            edge="end"
                          >
                            {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                      labelWidth={70}
                    />
                    </FormControl>
                    <FormControl variant="outlined">
                   
                    <OutlinedInput
                      type={this.state.showPassword2 ? 'text' : 'password'}
                      value={this.state.pass2}
                      margin="dense"
                      color="primary"
                      placeholder="Confirm Password"
                      className={classes.pass}
                      name="pass2"
                      onChange={this.handleChange}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={this.jesse}
                            onMouseDown={this.handleMouseDownPassword}
                            edge="end"
                          >
                            {this.state.showPassword2 ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                      labelWidth={70}
                    />
                    </FormControl>
                 
          </div><div></div>
         
          <div></div>
          <div className="noob">
                      <Button variant="contained" color="primary" onClick={this.mySubmitHandler}>Submit</Button>
                  </div>
                 
          </form>
          </div>
              );

    }
}
export default Testing;



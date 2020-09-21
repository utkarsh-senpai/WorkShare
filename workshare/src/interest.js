<<<<<<< HEAD
import React from 'react';
import Switch from '@material-ui/core/Switch';
import { Button } from '@material-ui/core';


export default function Switches() {
    const [state, setState] = React.useState({
      checkedA: false,
      checkedB: false,
      checkedC: false,
      checkedD: false,
      checkedE: false,
      checkedF: false,
    });
  
    const handleChange = (event) => {
      setState({ ...state, [event.target.name]: event.target.checked });
    };
    const mySubmitHandler = (event) =>{
        alert("Successfull!!");
    }
  
    return (<>
      <div><label className=" padl padr"><strong>Interests 1    :-  </strong></label>
        <Switch
        className="padr"
          checked={state.checkedA}
          onChange={handleChange}
          name="checkedA"
         
        />
        <label className="padr padl"><strong>Interests 4    :-  </strong></label>
        <Switch
        className="padl"
          checked={state.checkedD}
          onChange={handleChange}
          color="primary"
          name="checkedD"
          
        />
        
        </div>
        <div><label className=" padl padr"><strong>Interests 2   :-  </strong></label>
        <Switch
        className="padr"
          checked={state.checkedB}
          onChange={handleChange}
          color="primary"
          name="checkedB"
          
        />
        <label className="padr padl"><strong>Interests 5    :-  </strong></label>
        <Switch
        className="padl"
          checked={state.checkedE}
          onChange={handleChange}
          name="checkedE"
         
        />
    
      </div>
      <div><label className="padl padr"><strong>Interests 3    :-  </strong></label>
        <Switch
        className="padr"
          checked={state.checkedC}
          onChange={handleChange}
          name="checkedC"
          
        />
        <label className="padr padl"><strong>Interests 6    :-  </strong></label>
        <Switch
        className="padl"
          checked={state.checkedF}
          color="primary"
          onChange={handleChange}
          name="checkedF"
          
        />
        
        </div>
        <div className="noob">
            <Button variant="contained" color="primary" onClick={mySubmitHandler}>Submit</Button>
        </div>
      </> 
    );
=======
import React from 'react';
import Switch from '@material-ui/core/Switch';
import { Button } from '@material-ui/core';


export default function Switches() {
    const [state, setState] = React.useState({
      checkedA: false,
      checkedB: false,
      checkedC: false,
      checkedD: false,
      checkedE: false,
      checkedF: false,
    });
  
    const handleChange = (event) => {
      setState({ ...state, [event.target.name]: event.target.checked });
    };
    const mySubmitHandler = (event) =>{
        alert("Successfull!!");
    }
  
    return (<>
      <div><label className=" padl padr"><strong>Interests 1    :-  </strong></label>
        <Switch
        className="padr"
          checked={state.checkedA}
          onChange={handleChange}
          name="checkedA"
         
        />
        <label className="padr padl"><strong>Interests 4    :-  </strong></label>
        <Switch
        className="padl"
          checked={state.checkedD}
          onChange={handleChange}
          color="primary"
          name="checkedD"
          
        />
        
        </div>
        <div><label className=" padl padr"><strong>Interests 2   :-  </strong></label>
        <Switch
        className="padr"
          checked={state.checkedB}
          onChange={handleChange}
          color="primary"
          name="checkedB"
          
        />
        <label className="padr padl"><strong>Interests 5    :-  </strong></label>
        <Switch
        className="padl"
          checked={state.checkedE}
          onChange={handleChange}
          name="checkedE"
         
        />
    
      </div>
      <div><label className="padl padr"><strong>Interests 3    :-  </strong></label>
        <Switch
        className="padr"
          checked={state.checkedC}
          onChange={handleChange}
          name="checkedC"
          
        />
        <label className="padr padl"><strong>Interests 6    :-  </strong></label>
        <Switch
        className="padl"
          checked={state.checkedF}
          color="primary"
          onChange={handleChange}
          name="checkedF"
          
        />
        
        </div>
        <div className="noob">
            <Button variant="contained" color="primary" onClick={mySubmitHandler}>Submit</Button>
        </div>
      </> 
    );
>>>>>>> 07de71fe5269f6c517cb3b5ee124676d42a5b078
  }
import React, {Fragment, useState} from 'react';
import { FaAlignLeft } from 'react-icons/fa';
import { useHistory, withRouter } from 'react-router-dom';

export function Search(){

  const [state, setState] = useState();
  const history = useHistory();
  
  const submitHandler = (e) => {
      e.target.reset();
      e.preventDefault();
      history.push('/?q=' + state);
      
  };

      return (
        
        <form onSubmit ={submitHandler} className="d-flex" style={{position: "absolute", top:"1px", left:"700px"}}>
        <input className="form-control me-2" 
        type="search" placeholder="Search" 
        aria-label="Search"
        onChange={(e) => setState(e.target.value)}
        />
        <button className="btn btn-outline-success" type="submit">
        Search
        </button>
      </form>
      
    );

}
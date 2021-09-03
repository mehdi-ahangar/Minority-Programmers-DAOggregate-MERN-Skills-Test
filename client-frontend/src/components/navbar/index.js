
import React, {Component} from 'react';
import {Search} from './search';

//export function NavBar(){
  export class Navbar extends Component{

    render(){

    return (
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light" >
    <div className="container-fluid">
      
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div  className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
                    
            <a className="nav-link active" style={{position:"absolute",fontSize:20, top:"1px", left:"618px"}}  aria-current="page" href="/">Home</a>
          
          </li>  
                   
        </ul>
        <Search />
      </div>
    </div>
  </nav>
    );
    }

}
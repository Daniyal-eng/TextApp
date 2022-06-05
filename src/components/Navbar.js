import React from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";


export default function Navbar(props) {
  return (
  <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/About">{props.about}</Link>
            {/* <a className="nav-link active" aria-current="page" href="/About.js">{props.about}</a> */}
          </li>
         
          
        </ul>
       
                    <div className="d-flex">

                       <div className=" bg-primary rounded mx-2  border border-dark" onClick={()=>{props.toggleMode('primary')}} style={{height:'30px', width:'30px',border:'5px black'}}></div>
                       <div className=" bg-secondary rounded mx-2  border border-dark" onClick={()=>{props.toggleMode('secondary')}} style={{height:'30px', width:'30px'}}></div>
                       <div className=" bg-success rounded mx-2  border border-dark" onClick={()=>{props.toggleMode('success')}} style={{height:'30px', width:'30px'}}></div>
                       <div className=" bg-danger rounded mx-2  border border-dark" onClick={()=>{props.toggleMode('danger')}} style={{height:'30px', width:'30px'}}></div>
                       <div className=" bg-warning rounded mx-2  border border-dark" onClick={()=>{props.toggleMode('warning')}} style={{height:'30px', width:'30px'}}></div>
                       <div className=" bg-info rounded mx-2  border border-dark" onClick={()=>{props.toggleMode('info')}} style={{height:'30px', width:'30px'}}></div>
                   
                    </div>


                    
           
      {/* <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" id="lbID">Enable Light mode</label>
</div> */}
          {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button> */}
            
      
      </div>
    </div>
  </nav>
  );

}
Navbar.propTypes={
    title:PropTypes.string,
    about:PropTypes.string
}

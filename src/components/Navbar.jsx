import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

class NavbarComponent extends React.Component {
  static defaultProps = {
    title: 'stranger',
    a1: "laiba"
  }

  render(){
    return (
      <nav className={`navbar navbar-expand-lg navbar-${this.props.mode} bg-${this.props.mode}`} style={{color:this.props.mode === 'dark' ? 'white' : 'black'}}>
  <div className="container-fluid">
    <a className="navbar-brand " href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
         <Link to="/">Home</Link> |{" "}
        </li>
        <li className="nav-item">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">Pricing</a>
        </li>
       
      </ul>
    </div>
    <div className={`form-check form-switch text-${this.props.mode === 'light' ? 'dark' : 'light'}`}>
  <input className="form-check-input" type="checkbox"  onChange={this.props.toggleMode} role="switch" id="switchCheckDefault"  />
  <label className="form-check-label" htmlFor="switchCheckDefault">Enable Dark Mode</label>
</div>
 <div className={`form-check form-switch text-${this.props.mode === 'light' ? 'dark' : 'light'}`}>
  <input className="form-check-input" type="checkbox"  onChange={this.props.greentoggleMode} role="switch" id="switchCheckDefault"  />
  <label className="form-check-label" htmlFor="switchCheckDefault">Enable grey Mode</label>
</div>
<div className={`form-check form-switch text-${this.props.mode === 'light' ? 'dark' : 'light'}`}>
  <input className="form-check-input" type="checkbox"  onChange={this.props.redtoggleMode} role="switch" id="switchCheckDefault"  />
  <label className="form-check-label" htmlFor="switchCheckDefault">Enable red  Mode</label>
</div>
<div className={`form-check form-switch text-${this.props.mode === 'light' ? 'dark' : 'light'}`}>
  <input className="form-check-input" type="checkbox"  onChange={this.props.bluetoggleMode} role="switch" id="switchCheckDefault"  />
  <label className="form-check-label" htmlFor="switchCheckDefault">Enable blue Mode</label>
</div>
  </div>
 

</nav>
    );
  }
}
NavbarComponent.PropTypes={
  title:PropTypes.string
}
export default NavbarComponent;

import React,{Component} from 'react';
import './css/header.css';
import {Link} from 'react-router-dom';

export default class Header extends Component{
	render(){
	return (
		<React.Fragment>
			<nav className="navbar mynavbar fixed-top navbar-expand-lg navbar-light bg-dark">
						  <Link className="navbar-brand" to="/">ReadLn</Link>
						  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
						    <span className="oi oi-menu"></span>
						  </button>

						  <div className="collapse navbar-collapse show" id="navbarsExample07">
						    <ul className="navbar-nav ml-auto">
						      <li className="nav-item df-elx active">
						        <Link to="/" className="nav-link d-flex align-items-center" >
						        Home 
						        <span className="sr-only">(current)</span></Link>
						      </li>
						      <li className="nav-item df-elx">
						        <Link to="/stories" className="nav-link d-flex align-items-center">
						        	Stories
						        </Link>
						      </li>
						     
						       <li className="nav-item d-flex">
			                    <Link to="/settings" className="nav-link d-flex align-items-center icon"><i className="fa fa-cog"></i></Link>
			                  </li>
						    </ul>
						  </div>
						</nav>
						<nav className="navbar navphone fixed-bottom navbar-expand-lg navbar-light bg-dark">
						  <a className="navbar-brand" href="#">ReadLn</a>
						  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
						    <span className="oi oi-menu"></span>
						  </button>
						  <div className="collapse navbar-collapse ml-auto show" id="navbarsExample02">
						    <ul className="navbar-nav ml-auto">
			                  <li className="nav-item d-flex">
			                    <Link to="/" className="nav-link d-flex align-items-center icon"><i className="fa fa-home"></i></Link>
			                  </li>
			                  <li className="nav-item d-flex">
			                    <Link to="/stories" className="nav-link d-flex align-items-center icon"><i className="fa fa-server"></i></Link>
			                  </li>
			                
			                   <li className="nav-item d-flex">
			                    <Link to="/settings" className="nav-link d-flex align-items-center icon"><i className="fa fa-cog"></i></Link>
			                  </li>
			                </ul>
						  </div>
						</nav>
						</React.Fragment>
	)
	}
}
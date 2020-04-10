import React,{Component} from 'react';
import Footer from './footer';
import {Link} from 'react-router-dom';

class Hot extends Component{
		
		render(){
		return (
			<React.Fragment>
			<section className="ftco-section ftco-section-2 bg-light" id="cards">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<h2 className="heading-section mb-4 pb-md-3 " style={{"color":"#303a40","fontFamily":"abel"}}>
							Hot Reads Hand-Picked for you
						</h2>
					</div>
				</div>
				<div className="row">
					
					<div className="col-md-4">
						<Link to="/stories/the-living-waters">
						<div className="card text-center">
						
						  <img src="./image.jpg" className="card-img-top" alt="story name"/>
						  <div className="card-body">
						  	<h5 className="card-title">The Living Waters</h5>
						  	
						    <p className="card-text">
						    This is a story of two kids who left to find a greener pasture</p>
						  </div>
						   <div className="card-footer text-muted timer">
						    2 days ago
						  </div>

						</div>
						  </Link>
					</div>
					


				</div>
			</div>
	  </section>
	  <Footer/>
	  </React.Fragment>
		)
		}
}
export default Hot;
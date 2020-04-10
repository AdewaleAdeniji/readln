import React,{Component} from 'react';
import './css/stories.css';
import Stories from './stories.json';
import Card from './card';
import {Link} from 'react-router-dom';
class Series extends Component {
	render(){
	return (
		<section className="ftco-section ftco-section-2 bg-light" id="cards">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						
					</div>
				</div>
				<div className="row">
					
					<div className="col-md-12">
					
						<div className="card cardt text-center">
						  <h5 className="card-header bg-dark py-4">
						   On-going stories
						  </h5>
						  <div className="card-body">
						  
						    <p className="card-text">

						    {
						Stories.map((story,index)=>{
							const link = "/stories/"+story.name;
							if(!story.completed){
							return <React.Fragment>
								{
									<Link to={link} className="btn btn-dark btn-link" role="button">
									{story.name}</Link>
								}
							</React.Fragment>
						}
						})
					}
						    
						    </p>
						    
						  </div>
						  <div className="card-footer text-muted">
						  <a href="#" className="btn btn-primary btn-dark bg-dark">See More <i className="fa fa-angle-double-right"></i></a>
						  </div>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						
					</div>
				</div>
				<div className="row">
					
					<div className="col-md-12">
						<div className="card cardt text-center">
						  <h5 className="card-header bg-dark py-4">
						   Completed Stories
						  </h5>
						  <div className="card-body">
						  
						    <p className="card-text">
						       {
						Stories.map((story,index)=>{
							const link = "/stories/"+story.name;
							if(story.completed){
							return <React.Fragment>
								{
									<Link to={link} className="btn btn-dark btn-link" role="button">
									{story.name}</Link>
								}
							</React.Fragment>
						}
						})
					}
						    
						    </p>
						    
						  </div>
						  <div className="card-footer text-muted">
						  <a href="#" className="btn btn-primary btn-dark bg-dark">See More <i className="fa fa-angle-double-right"></i></a>
						  </div>
						</div>
					</div>
				</div>
			</div>
	  </section>
	)
	}
}
export default Series;
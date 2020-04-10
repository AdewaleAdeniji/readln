import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Card extends Component{
	
	render(){
		if(this.props.episode===""){
			var e  = '';
		}
		else {
			var e = 'Episode';
		}
		const disp = e +" "+ this.props.episode;
	return (
		<div className="col-md-4">
						<Link to={this.props.link}>
						<div className="card text-center">
						
						  <img src={this.props.image} className="card-img-top" alt="..."/>
						  <div className="card-body">
						  	<h5 className="card-title">{this.props.name}</h5>
						  	<h6 className="card-episode">{
						  		disp
						  	}</h6>
						    <p className="card-text">
						    {this.props.story}
						    </p>
						  </div>
						   <div className="card-footer text-muted timer">
						    {this.props.ago}
						  </div>

						</div>
						  </Link>
					</div>
	)
	}
}
export default Card;
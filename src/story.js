import React,{Component} from 'react';
import Footer from './footer';
import Stories from './stories.json';
import Stos from './story.json';
import Card from './card';

class Story extends Component{
	state = {
		storyname:'',
		intro:'',
		id:'',
		image:'',
	}
componentDidMount(){
	try{
	const nam = this.props.match.params.story;
	const name = nam.split("_")[1];
	const id =  nam.split("_")[0];
	const story = Stories[id];

	this.setState({id:id});
	let intro = story.intro;
	let image = story.image;
	this.setState({image:image});
	this.setState({intro:intro});
	if(name==undefined){
		throw "name not found";
	}
	let k = name.split("-");
	let stor = k.join(" ");
	this.setState({storyname:stor});
}
catch(err){
	this.props.history.push("/");	
}
}
	render(){
	return (
		<React.Fragment>
			<section className="hero-wrap js-fullheight">
		  		<div className="container">
		  			<div className="row description js-fullheight align-items-center justify-content-center">
		  				<div className="col-md-8 text-center">
		  					<div className="text">
		  						<h1>{this.state.storyname}</h1>
		  						<h4 className="mb-5">
		  						{this.state.intro}
		  						</h4>
		  						
		  					</div>
		  				</div>
		  			</div>
		  		</div>
		  	</section>
		  	<section className="ftco-section ftco-section-2 bg-light" id="cards">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<h2 className="heading-section mb-4 pb-md-3 " style={{"color":"#303a40","fontFamily":"abel"}}>
							Episodes of {this.state.storyname}
						</h2>
					</div>
				</div>
				<div className="row">
				{
					Stos.map((story,index)=>{
						const sto = Stories[story.storyid];

						let image = "../"+this.state.image;
						let link = "/episode/"+story.storyid+"/"+parseInt(index+1);
						if(story.date==undefined){
							var g = "6 hours ago";
						}
						else {
							var g = story.date;
						}
						if(story.storyid==this.state.id){
			return <React.Fragment>{
					<Card name={story.storyname} link={link} image={image} episode={story.episode} story={story.story.substr(0,100)} ago={g}/>
				}
				</React.Fragment>
			}
					})
				}


					

				</div>
			</div>
	  </section>
		  	</React.Fragment>
	)
	}
}
export default Story;
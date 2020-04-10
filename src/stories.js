import React,{Component} from 'react';
import './css/stories.css';
import {Link} from 'react-router-dom';
import Stos from './story.json';
import Card from './card';
import Store from './stories.json';

class Stories extends Component {
	
	render(){
	return (
		<section className="ftco-section ftco-section-2 bg-light" id="cards">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<h2 className="heading-section mb-4 pb-md-3 " style={{"color":"#303a40","fontFamily":"abel"}}>
							New Reads
						</h2>
					</div>
				</div>
				<div className="row">
				{
					Stos.slice(0,6).map((story,index)=>{
						const sto = Store[story.storyid];
						let image = sto.image;
						let link = "episode/"+story.storyid+"/"+parseInt(index+1);
						if(story.date==undefined){
							var g = "6 hours ago";
						}
						else {
							var g = story.date;
						}
			return <React.Fragment>{
					<Card name={story.storyname} link={link} image={image} episode={story.episode} story={story.story.substr(0,40)} ago={g}/>
				}
				</React.Fragment>
					})
				}


					

				</div>
			</div>
	  </section>
	)
	}
}
export default Stories;
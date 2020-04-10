import React,{Component} from 'react';
import Footer from './footer';
import {Link} from 'react-router-dom';
import Stos from './stories.json';
import Card from './card';

class All extends Component{
		
		render(){
		return (
			<React.Fragment>
			<section className="ftco-section ftco-section-2 bg-light" id="cards">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<h2 className="heading-section mb-4 pb-md-3 " style={{"color":"#303a40","fontFamily":"abel"}}>
							Stories
						</h2>
					</div>
				</div>
				<div className="row">
				{
					Stos.map((story,index)=>{
						const link = 'stories/'+index+'_'+story.name;
			return <React.Fragment>{
					<Card name={story.name} link={link} image={story.image} episode={''} story={story.intro.substr(0,200)} ago={''}/>
				}
				</React.Fragment>
					})
				}


					

				</div>
			</div>
	  </section>
	  <Footer/>
	  </React.Fragment>
		)
		}
}
export default All;
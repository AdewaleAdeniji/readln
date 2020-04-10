import React,{Component} from 'react';
import Card from './card';
import Stories from './stories.json';
import Story from './story.json';


class StoryPoint extends Component	{
	state =  {
		story:'',
		next:false,
		prev:false,
		episode:'Loading',
		storyname:'',
		episodes:0,
		prevd:'none',
		nextd:'none',
		arrnum:[],
		storyid:0,
	}
componentDidMount(){
	if(this.props.match.params.storyid==undefined||this.props.match.params.episode==undefined||this.props.match.params.storyid==""||this.props.match.params.episode==""){
		this.props.history.push("/");
		 //console.log('bad');
	}
	else {
		const storyid = this.props.match.params.storyid;
		var episod = this.props.match.params.episode-1;
		const storyepisode = Story[episod];
		var {episode,story} = storyepisode;
		this.setState({storyid:storyid});
		//console.log(storyid,episode);
		this.setState({episode:episode});
		const arr = Stories[storyid];
		var {name,episodes} = arr;
		this.setState({storyname:name,episodes:episodes})
		if(episodes==episode){
			this.setState({next:false,prevd:'block'});
			if(episode==1){
				this.setState({prev:false,prevd:'none'});
			}
		}
		else if(episodes>episode){
			this.setState({next:true,nextd:'block'});
			if(episode>1){
				this.setState({prevd:'block'});
			}
		}
		else {
			console.log('error');
		}
		var count = 0;
		var arrnum = [];
		var nepi = episodes;
		while(episodes>0){
			if(count<10){
				arrnum.push(episodes);
				nepi--;
			}
			count++;
			episodes--;
		}
		//console.log(arrnum);
		this.setState({arrnum:arrnum.reverse()})

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
		  						Episode {this.state.episode}
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
							Episode {this.state.episode} of {this.state.storyname}
						</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<div className="typo" style={{"paddingLeft":"0%","fontFamily":"abel"}}>
			              <p>
			                
			                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that&#x2019;s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that&#x2019;s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that&#x2019;s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that&#x2019;s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.
			                </p>
			                <div class="pagination pagination-2"  style={{"paddingTop":"20%"}}>
								<Link
									 to="episode/"+{this.state.storyid}+"/"+{this.state.episode-1} 
										class="pageitem"
											 style={{"float":"left","display":this.state.prevd}}
								>Previous
								</Link>
					          
					              {
					              	this.state.arrnum.map((item,index)=>{
					              		let link = "episode/"+this.state.storyid+"/"+parseInt(item+!);
					              		if(item==this.state.episode){
					              			var active ='active';
					              		}
					              		else {
					              			var active = '';
					              		}
					              		return  <Link to={link} className={active}>{item}</Link>
					              	})
					              }
					             
					             <Link
									 to="episode/"+{this.state.storyid}+"/"+{this.state.episode+1}
									  className="pageitem" style={{"float":"right","display":this.state.nextd}}>
									  Next
									  </a>
							</div>
			            </div>
					</div>
				</div>

			</div>
			</section>

			</React.Fragment>
		)
	}
}
export default StoryPoint;
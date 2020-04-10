import React,{Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import App from './App';
import Header from './header';
import All from './all';
import Hot from './hot';
import Story from './story';
import Episode from './episode';

class Main extends Component{
	render(){
		return (
			<BrowserRouter>
			<Header/>
			<Route exact path="/" component={App}/>
			<Route exact path="/stories" component={All}/>
			<Route path="/episode/:storyid/:episode" component={Episode}/>
			<Route path="/stories/:story" component={Story}/>
			
			</BrowserRouter>
		)
	}
}
export default Main;
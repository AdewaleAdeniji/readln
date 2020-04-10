import React from 'react';
import logo from './logo.svg';
import './css/App.css';
import Intro from './intro';
import Footer from  './footer';
import Quote from './quote';
import Stories from './stories';
import Series from './series';

function App() {
  return (
  	<div>
   
   <Intro />
   <Stories />
   <Series/>
   <Footer/>
   </div>
  );
}

export default App;

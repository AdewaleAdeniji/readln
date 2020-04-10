import React,{Component} from 'react';

export default class Footer extends Component{
  render(){
  return (
     <footer className="ftco-section ftco-section-2 bg-dark">
      <div className="col-md-12 text-center">
      
     
          <p className="mb-0 text-white">
        
          <a href="#" className="btn btn-dark btn-link text-white" role="button">Home/ReadLn</a>
         <a href="#" className="btn btn-dark btn-link text-white" role="button">Stories</a>
          <a href="#" className="btn btn-dark btn-link text-white" role="button">About</a>
       
           <br/>
            Copyright &copy;<script>
              document.write(new Date().getFullYear());

            </script> All rights reserved | Developed with <i className="fa fa-heart text-white" aria-hidden="true"></i> by <a href="https://bit.ly/feranmidev" target="_blank" rel="noopener noreferrer">DevFeranmi</a>
     
          </p>
        </div>
    </footer>
  )
}
}
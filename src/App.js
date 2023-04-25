import React, { useEffect } from 'react'
import ReactGA from 'react-ga'
import $ from 'jquery'
import Header from './Components/Header'
import Footer from './Components/Footer'
import About from './Components/About'
import Contact from './Components/Contact'
import Resume from './Components/Resume'
import Portfolio from './Components/Portfolio'
import resume from './resumeData.json';

function App() {

  ReactGA.initialize('UA-110570651-1');
  ReactGA.pageview(window.location.pathname);


  // const getResumeData = () => {
  //   $.ajax({
  //     url:'/resumeData.json',
  //     dataType:'json',
  //     cache: false,
  //     success: function(data){
  //       setResumeData({resumeData: data});
  //     }.bind(this),
  //     error: function(xhr, status, err){
  //       console.log(err);
  //       alert(err);
  //     }
  //   });
  // }

  // useEffect(() => {
  //   getResumeData();
  // });

  
  return (
    <div className="App">
      <Header data={resume.main}/>
      {/* <Portfolio title="HI" description="grabba ooooooo" imageSrc="images/profilepic.jpg"/> */}
      <About data={resume.main}/>
      <Resume data={resume.resume}/>
      <Footer data={resume.main}/>
    </div>
  );
};

export default App;

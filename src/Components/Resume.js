import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var education = this.props.data.education.map((education)=>{
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <ul><li>{education.description}</li></ul></div>
      })
      var work = this.props.data.work.map((work, i)=>{
        return <div key={i}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <ul>
              <li>{work.description[0]}</li>
              {(work.company === "Digital Extremes") && <li><a target="_blank" rel="noopener noreferrer" href="https://www.digitalextremes.com/">Check out the site here!</a></li>}
              <li>{work.description[1]}</li>
              <li>{work.description[2]}</li>
            </ul>
        </div>
      })
      var projects = this.props.data.projects.map((project, i)=>{
        return <div key={i}>
            <a target="_blank" rel="noopener noreferrer" href={project.link}><h3>{project.project}</h3></a>
            <p className="info">{project.caption}<span>&bull;</span> <em className="date">{project.date}</em></p>
            <ul>
              {project.description.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
        </div>
      })
    }

    return (
      <section id="resume">

      <div className="row education" id="education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work" id="work">
         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
            {work}
        </div>
      </div>

      <div className="row" id="projects">
         <div className="three columns header-col">
            <h1><span>Projects</span></h1>
         </div>

         <div className="nine columns main-col">
            {projects}
        </div>
      </div>
   </section>
    );
  }
}

export default Resume;

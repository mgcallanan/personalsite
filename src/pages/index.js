import React from "react"

import Header from "../components/header"
import Navigation from "../components/navigation"
import headshot from "../images/headshot.png"
import envelope from "../images/envelope.png"
import githublogo from "../images/githublogo.png"
import linkedinlogo from "../images/linkedinlogo.png"
import "../styles/home.css"


export default function Home() {

  return (
    <React.Fragment>
      <div className="total_header">
        <Header/>
      </div>
      <div className="navigation">
        <Navigation/>
      </div>
      <div className="page-content">
        <div className="background1">
          <div className="layer">
            <div className="tech-intro">
              <div className="image-cropper">
                <img className="headshot" src={headshot} alt=""/>
              </div>
              <div className="bio">
                <p>
                
                  Hi, I'm Mary! I am a rising junior at <span className="yale">Yale University</span> studying Computer Science. I was a SWE intern at <span className="oracle">Oracle Cloud Infrastructure</span> last summer, and I'm returning there for another internship next year.
                  <br></br>
                  <br></br>
                  I'm very passionate about striving for gender and racial equality in tech. I was first introduced to coding through an after school Girls Who Code club. Now, I help in leading a student-run organization on campus that teaches students from local middle schools computer science.  
                  <br></br>
                  <br></br>
                  I have extensive experience building applications using Java and C, but I am using my gap year to learn more about frontend languages (hence, the creation of this made-from-scratch website!).
                  <br></br>
                  <br></br>
                  In my free time, I enjoy captaining my residential college's intramural teams (who are three-time champions of <a className="non-header" href="https://intramurals.yale.edu/">Yale's Tyng Cup</a>) and running a <a href="https://www.instagram.com/milkwaukee/">dairy-themed Instagram</a> based in my hometown of Milwaukee, WI.
                  <br></br>
                  <br></br>
                </p>
              </div>
            </div> 
          </div>
        </div>
        <div className="background2">
          <div className="layer">
            <div className="tech-intro">
              <div className="subheader">
                <h2>CONTACT ME</h2>
              </div>
              <div className="contactme">
                <img src={envelope} alt="Envelope"></img>
                <p>mary.callanan \at\ yale.edu</p>
              </div>
              <div className="contactme">
                <img src={githublogo} alt="GitHub Logo"></img>
                <p><a href="https://github.com/mgcallanan">@mgcallanan</a></p>
              </div>
              <div className="contactme">
                <img src={linkedinlogo} alt="LinkedIn Logo"></img>
                <p><a href="https://www.linkedin.com/in/mary-callanan-203694172/">Mary Callanan</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}


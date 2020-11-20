import React, { useEffect, useState } from "react"

import "../styles/portfolio.css"

function Slideshow() {

    function handleClick() {
        console.log("hello");
    }

    /*var slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        useEffect(() => {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("dot");
            if (n > slides.length) {slideIndex = 1}
            if (n < 1) {slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex-1].style.display = "block";
            dots[slideIndex-1].className += " active";
        }, []);
    }*/

    const [count, setCount] = useState(0);
  
    return (
        <React.Fragment>
        <div className="slideshow-container">
            
            <div className="mySlides fade">
            <div className="numbertext">1 / 3</div>
            <iframe className="d3-sample" src="/genderinmovies.html" title="test" style={{width:'725px',height:'625px'}}></iframe>
            <div className="caption">A visual representation of the gender divide in Hollywood. The blue in all of the visualizations represents male figures, and the red represents female figures. The data was scraped from <a href="https://github.com/taubergm/HollywoodGenderData">https://github.com/taubergm/HollywoodGenderData</a></div>
            </div>

            <div className="mySlides fade">
            <div className="numbertext">2 / 3</div>
            <iframe className="d3-sample" src="/court.html" title="test" style={{width:'500px',height:'325px'}}></iframe>
            <div className="caption">A graphic showing the connections between various cases and the Supreme Court Justices who voted "Yes" on those particular cases.</div>
            </div>

            <div className="mySlides fade">
            <div className="numbertext">3 / 3</div>
            <iframe className="d3-sample" src="/looped_bars.html" title="test" style={{width:'625px',height:'325px'}}></iframe>
            <div className="caption">An animation with bar graphs showing arbitrary data in various formats. Click within the white frame to rotate views.</div>
            </div>

            <a className="prev" onClick={handleClick}>&#10094;</a>
            <a className="next" onClick={handleClick}>&#10095;</a>

        </div>
        <br/>

        <div style={{textAlign: "center"}}>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
        </div>
    </React.Fragment>
    );
}

export default Slideshow;

/*export default function Portfolio() {


  handleClick = (e) => {
    e.preventDefault();
    console.log('The link was clicked');
  }
  var slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  plusSlides = (n) => {
    showSlides(slideIndex += n);
  }

  // Thumbnail image controls
  currentSlide = (n) => {
    showSlides(slideIndex = n);
  }

  showSlides = (n) => {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }

  return (
    <React.Fragment>
      <div className="total_header">
        <Header/>
      </div>
      <div className="navigation">
        <Navigation/>
      </div>
      <div className="content">
        <div className="portfolio-section">
          <p className="section-title">&nbsp;Work from CPSC 446: Data Visualization&nbsp;</p>

          <div class="slideshow-container">
            
            <div className="mySlides fade">
              <div className="numbertext">1 / 3</div>
              <iframe className="d3-sample" src="/genderinmovies.html" title="test" style={{width:'725px',height:'625px'}}></iframe>
              <div className="caption">A visual representation of the gender divide in Hollywood. The blue in all of the visualizations represents male figures, and the red represents female figures. The data was scraped from <a href="https://github.com/taubergm/HollywoodGenderData">https://github.com/taubergm/HollywoodGenderData</a></div>
            </div>

            <div className="mySlides fade">
            <div className="numbertext">2 / 3</div>
              <iframe className="d3-sample" src="/court.html" title="test" style={{width:'500px',height:'325px'}}></iframe>
              <div className="caption">A graphic showing the connections between various cases and the Supreme Court Justices who voted "Yes" on those particular cases.</div>
            </div>

            <div className="mySlides fade">
              <div className="numbertext">3 / 3</div>
              <iframe className="d3-sample" src="/looped_bars.html" title="test" style={{width:'625px',height:'325px'}}></iframe>
              <div className="caption">An animation with bar graphs showing arbitrary data in various formats. Click within the white frame to rotate views.</div>
            </div>

            <a class="prev" onClick={this.handleClick}>&#10094;</a>
            <a class="next" onClick={this.handleClick}>&#10095;</a>

          </div>
          <br/>

          <div style={{textAlign: "center"}}>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </div>

        </div>
      </div>
    </React.Fragment>

  )
}*/
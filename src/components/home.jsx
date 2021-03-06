import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
<div>
<section id="colorlib-hero" className="js-fullheight" data-section="home">
  <div className="flexslider js-fullheight">
    <ul className="slides">
      <li style={{backgroundImage: 'url(images/img_bg_1.jpg)'}}>
        <div className="overlay" />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
              <div className="slider-text-inner js-fullheight">
                <div className="desc">
                  <h1>Hi! <br />I'm Varun</h1>
                  <h2>I love creating Apis </h2>
                  <p><a className="btn btn-primary btn-learn" href="https://docs.google.com/document/d/1Z5gUwK5Df-TzRBAuYtTM_FxqbZ7Hp7nYP7WDA_psgj0/edit?usp=sharing" target="_blank" rel="noopener noreferrer">View CV<i className="icon-download4" /></a></p>
 
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li style={{backgroundImage: 'url(images/img_bg_2.jpg)'}}>
        <div className="overlay" />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
              <div className="slider-text-inner">
                <div className="desc">
                  <h1>I am <br />a Backend Developer</h1>
                  <h2>100% html5 bootstrap templates Made by <a href="https://colorlib.com/" target="_blank">colorlib.com</a></h2>
                  <p><a className="btn btn-primary btn-learn">View Portfolio <i className="icon-briefcase3" /></a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</section>
	
</div>

    )


}

}
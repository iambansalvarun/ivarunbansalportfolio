import React, { Component } from 'react'

export default  class Skills extends Component{

render(){
return(

<div>

<section className="colorlib-skills" data-section="skills">
  <div className="colorlib-narrow-content">
    <div className="row">
      <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
        <span className="heading-meta">My Specialty</span>
        <h2 className="colorlib-heading animate-box">My Skills</h2>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
        <p></p>
      </div>
      <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
        <div className="progress-wrap">
          <h3>Scala</h3>
          <div className="progress">
            <div className="progress-bar color-1" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{width: '75%'}}>
              <span>75%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
        <div className="progress-wrap">
          <h3>Java</h3>
          <div className="progress">
            <div className="progress-bar color-2" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}}>
              <span>60%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
        <div className="progress-wrap">
          <h3>MySql</h3>
          <div className="progress">
            <div className="progress-bar color-3" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '50%'}}>
              <span>50%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
        <div className="progress-wrap">
          <h3>Mongo</h3>
          <div className="progress">
            <div className="progress-bar color-4" role="progressbar" aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} style={{width: '65%'}}>
              <span>65%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
        <div className="progress-wrap">
          <h3>Akka</h3>
          <div className="progress">
            <div className="progress-bar color-5" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '70%'}}>
              <span>70%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
        <div className="progress-wrap">
          <h3>Akka Http</h3>
          <div className="progress">
            <div className="progress-bar color-6" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '70%'}}>
              <span>70%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</div>


)


}


}
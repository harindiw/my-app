import React from 'react';
import './Review.css';
import image from "../../assets/img/img20.png"
import img from "./Home_imgs/review_bg.png"

import Wikum from "./Home_imgs/Wikum.png"
import Oshade from "./Home_imgs/Oshade.jpeg"
import uditha from "./Home_imgs/uditha.png"

export const Review = () => {
 
  return (
    <div className='re'>
      <h1 className="project_h1">Reviews</h1>
    <div className="review-container">

            

      <figure className="snip1157">
        <blockquote>I highly recommend IOT Solutions for their exceptional expertise in
          automation solutions. With a proven track record of successful
          projects across various industries, they have consistently
          demonstrated a deep understanding of automation technologies
          and a commitment to delivering top-tier service.
          <div className="arrow"></div>
        </blockquote>
        <img src={Wikum} alt="sq-sample3" />
        <div className="author">
          <h5>Wikum Wijesinghe<span>            </span></h5>
        </div>
      </figure>
      <figure className="snip1157 hover">
        <blockquote>IOT Solutions Pvt Ltd is a standout automation company that excels in delivering customized, scalable, and secure automation
           solutions. Their technical expertise, combined with a client-centric approach, makes them a top choice for businesses seeking to 
           optimize their operations through automation.
          <div className="arrow"></div>
        </blockquote>
        <img src={Oshade} alt="sq-sample27" />
        <div className="author">
          <h5>Oshade Ranawaka<span>            </span></h5>
        </div>
      </figure>
      <figure className="snip1157">
        <blockquote>In terms of technical expertise, IOT Solutions Pvt Ltd boasts a team of highly skilled engineers who stay at the 
          forefront of automation technologies. Whether it's PLC programming, SCADA design, or integration with IoT and Industry 4.0 concepts, 
          their team has consistently demonstrated proficiency and innovation.
          <div className="arrow"></div>
        </blockquote>
        <img src={uditha} alt="sq-sample17" />
        <div className="author">
          <h5>Uditha Meththananda<span>            </span></h5>
        </div>
      </figure>
    </div>
    </div>
    
  )
}

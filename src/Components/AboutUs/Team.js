import "./Team.css";
import React from 'react';


  export const Team = () => {

  return (
<div>
    <h1 className="About-h">Meet Our Team</h1>
    {/* <h1 className="work-h1">We are with Awesome people</h1> */}
<div class="row">
        <div class="about-column">
        <div class="flip-card">
          <div class="card-ab">
          <div class="flip-front-team-card-img img-1" > </div>
          <div class="flip-card-back">
            <div className="blue1">Rachitha Muthukumarana </div>
            <div className="blue1">Director </div>
            <p className="blue2">BSc.Eng(Hons) Mechanical Engineering - University of Moratuwa</p>
            <div className="blue2">M.Eng - USA</div>
            <div className="blue2">Ph.D. - USA</div>
           </div>
        </div>
        </div>
         </div>
      
        <div class="about-column">
          <div class="flip-card">
            <div class="card-ab">
              <div class="flip-front-team-card-img img-2"> </div>
              <div class="flip-card-back">
              <div className="blue1">Nishal Dayarathna </div>
            <div className="blue1">Director </div>
            <p className="blue2">BSc.Eng(Hons) Electrical Engineering - University of Moratuwa</p>
            <div className="blue2">MBA - University of Wales Trinity Saint David</div>
            </div>
          </div>
        </div>
         </div>
        
        <div class="about-column">
          <div class="flip-card">
            <div class="card-ab">
              <div class="flip-front-team-card-img img-3"></div>
            <div class="flip-card-back">
            <div className="blue1">Nuwan Prasanna </div>
            <div className="blue1">Software Engineer </div>
            <p className="blue2">BET(Hons) Mechatronics Engineering Technology - University of Sri Jayewardenepura</p>
            </div>
          </div>
        </div>
        </div>
      </div>
      
      <div class="row">
        <div class="about-column">
          <div class="flip-card">
          <div class="card-ab">
          <div class="flip-front-team-card-img img-4"> </div>
            <div class = "flip-card-back">
            <div className="blue1">Rashintha Welgama </div>
            <div className="blue1">Automation Engineer </div>
            <p className="blue2">BSc.Eng(Hons) Mechanical Engineering (Mechatronics Specialisation) - SLIIT</p>
              </div>
          </div>
        </div>
        </div>
      
        <div class="about-column">
          <div class = "flip-card">
          <div class="card-ab">
          <div class="flip-front-team-card-img img-5"> </div>
              <div class = "flip-card-back">
            <div className="blue1">Santhush Wijerathne </div>
            <div className="blue1">Automation Engineer </div>
            <p className="blue2">BSc.Eng(Hons) Mechanical Engineering (Mechatronics Specialisation) - SLIIT</p>
              </div>
          </div>
        </div>
        </div>
        
        <div class="about-column">
          <div class= "flip-card">
          <div class="card-ab">
          <div class="flip-front-team-card-img img-6"> </div>
            <div class = "flip-card-back">
            <div className="blue1">Chamara Yaparathne</div>
            <div className="blue1">Software Process Engineer </div>
            <p className="blue2">BSc. Textile and Apparel Engineering - University of Moratuwa</p>
            <div className="blue2"> Msc.IT and Strategic Innovation - Kingston University, UK </div>
            </div>
          </div>
        </div>
        </div>
        </div> 



</div>
  );
};
import React , { useEffect, SVGProps } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { BsFillGridFill } from "react-icons/bs";
//import type { SVGProps } from 'react';
import './Stat.css';

export const Stat = (props:SVGProps<SVGSVGElement>) => {

    useEffect(() => {
        const elements = Array.from(document.querySelectorAll("h2[data-count]"));
        const observer = new IntersectionObserver(
            function (entries) {
                entries.forEach((entry) => {
                    if (entry.intersectionRatio >= 0.5) {
                        const index = elements.indexOf(entry.target);
                        const delay = index * 250;
                        setTimeout(() => startCounter(entry.target), delay);
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 1
            }
        );
        elements.forEach((element) => observer.observe(element));

        function startCounter(element) {
            const target = parseInt(element.getAttribute("data-count"));
            const additionalData = element.getAttribute("additional-data") || "";
            const totalFrames = 480;
            let frame = 300;

            function easeOut(t, b, c, d) {
                return c * ((t = t / d - 1) * t * t + 1) + b;
            }

            function counter() {
                if (frame >= totalFrames) {
                    element.textContent = target + additionalData;
                    return;
                }
                frame++;
                const easedValue = easeOut(frame, 0, target, totalFrames);
                element.textContent = Math.floor(easedValue) + additionalData;
                requestAnimationFrame(counter);
            }
            counter();
        }
    }, []);



    return (
<div className="stat_bg">
   <div class="row-stat">
  <div class="column-stat">
  {/* <div class="animated-border-box-glow"></div> */}
    <div class="card-stat">

    {/* <div class=""> */}
    {/* <div className="colorful-line"></div>  */}
          <h3><FaCalendarAlt /></h3>
      <h2 data-count="2022">2022</h2>
      <p>Year of foundation</p>
      {/* </div> */}
    </div>
  </div>

 

  <div class="column-stat">
    <div class="card-stat">
      <h3><TbWorld /></h3>
      <h2 data-count="5" additional-data="+">0+</h2>
      <p>Countries</p>
    </div>
  </div>
  
  <div class="column-stat">
    <div class="card-stat">
      <h3><BsFillGridFill /></h3>
      <h2 data-count="100" additional-data="+">0+</h2>
      <p>Successfull Projects</p>
    </div>
  </div>
  
  <div class="column-stat">
    <div class="card-stat">
      <h3><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M18 15h-2v2h2m0-6h-2v2h2m2 6h-8v-2h2v-2h-2v-2h2v-2h-2V9h8M10 7H8V5h2m0 6H8V9h2m0 6H8v-2h2m0 6H8v-2h2M6 7H4V5h2m0 6H4V9h2m0 6H4v-2h2m0 6H4v-2h2m6-10V3H2v18h20V7z"></path></svg></h3>
      <h2 data-count="50" additional-data="+">0+</h2>
      <p>Companies</p>
    </div>
  </div>
</div>
</div>
       
    );
}
export default Stat;

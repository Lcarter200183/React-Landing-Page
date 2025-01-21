import React, { useState } from "react";
import { handleContactForm } from "../controllers/handleContactForm";
import { handleEmailForm } from "../controllers/handleEmailForm";

export function ReactLandingPage() {
    const center = { width: "fit-content", justifySelf: "center"};
    return (
    <>
   <header>
    <h1><b>Instant Pot Duo Plus</b></h1>
   </header>
    <main>

        <h3><i>Description</i></h3>
        <div>
          <p>
            Instant Pot Duo is a multi-functional electric pressure cooker that combines several kitchen appliances into one.
            It has one-touch controls and stainless steel inner pot that allow you to cook a variety of dishes with versatile cooking options.
            It has 15 Smart Programs to help you get started quickly and easily.
            With a redesigned control panel, you see cooking status at-a-glance, and easily control every step.
          </p>   
          </div>
          
            <br />
        <h4><i>Features</i></h4> 
           <div style={{textAlign: center}}>
            <ul className="list-group, list-group-flush">
               <li className="list-group-item">Multiple cooking functions: Pressure cook, slow cook, rice cook, yogurt make, steam, sauté, and keep warm.</li>
               <li className="list-group-item">One-touch Keep Warm program keeps food ready for serving on your schedule.</li>
               <li className="list-group-item">15 customizable Smart Programs for quick one-touch cooking: pressure cook, soup, broth, cake, egg, slow cook, sauté, rice, bean, grain, porridge, oatmeal, sterilize, yogurt and sous vide.</li>
               <li className="list-group-item">Digital display and controls: Easy-to-use interface with customizable programs for different types of food.</li>
               <li className="list-group-item">Contemporary black-on-white display is easy-to-read, shows full cooking progress and includes dedicated Start button.</li>
               <li className="list-group-item">Separate Pressure and Temperature indicators to view at-a-glance, plus dual Fahrenheit and Celsius indicators.</li>
               <li className="list-group-item">Steel inner pot: Dishwasher-safe pot with a tri-ply bottom for even heat distribution.</li>
               <li className="list-group-item">Easy-close lid automatically seals when the lid is closed.</li>
               <li className="list-group-item">Stainless-steel (18/8) inner pot with tri-ply bottom for perfect sautéing.</li>
               <li className="list-group-item">Intuitive remote steam release button makes venting simple and stress-free, plus automatically resets when lid is closed.</li>
               <li className="list-group-item">Quick release valve: Allows for rapid steam release when needed.</li>
               <li className="list-group-item">Safety features: Includes safety locking lid, pressure release mechanisms, and overheat protection.</li>
               <li className="list-group-item">Anti-spin design keeps inner pot in place for easy sautéing.</li>
               <li className="list-group-item">Up to 70% faster and more energy efficient than traditional cooking methods.</li>
               <li className="list-group-item">10+ proven safety features, including Overheat Protection™ and safe locking lid.</li>
               <li className="list-group-item">Dishwasher-safe lid and inner pot for quick and easy clean-up.</li>
               <li className="list-group-item">Detachable power cord makes storage easier.</li>
               <li className="list-group-item">Accessories:includes 2 sealing rings and stainless-steel steam rack.</li>
            </ul>
             </div>
             <hr />
           
          <h2><i>Join Now</i></h2>
             <p>Join our email list and receive a exlusive <b>20% off</b> on your first purchase.</p>
          <form  onSubmit={handleEmailForm}>
         
            <div>
           <input required name="email" type="email" placeholder="Email" id="email" /> 
            </div>
           <input type="submit" value="Submit" />
          </form>
   
           <br /> 
           <hr />
           
           <div style={center}>
           <iframe
              width="560" 
              height="315"
              src="https://www.youtube.com/embed/YPfggwCqfVE?si=rCb4ICO_k63BEuAv" 
              title="YouTube video player" 
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen > 
           </iframe>
           </div>
             

        <h2>Contact Form</h2>
        <form onSubmit={handleContactForm}>
           <div>
            <input required name="name" type="name" placeholder="First Name" id="name" />
             <br />
            <input required name="name" type="name" placeholder="Last Name" id="name" />
            <br />
            <input required name="tel" type="tel" placeholder="###-###-####"  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" id="tel" />
            <br />
            <input required name="text" type="text" placeholder="Message" id="text" />
           </div>
            <input type="submit" value="Submit" /> 
         </form>
         <output id="outputTag"></output>
    </main>

         <br />
    <footer style={{textAlign: "center"}}><pre>Website created by <b>Lydia Carter</b> </pre></footer> 
    </>
    );
    }

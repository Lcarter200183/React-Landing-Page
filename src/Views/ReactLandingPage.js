import React, { useState } from "react";
import { YouTube } from "./YouTube";
import { handleContactForm } from "../controllers/handleContactForm";
import { handleEmailForm } from "../controllers/handleEmailForm";


const {email ,setEmail} = useState;

export function ReactLandingPage() {
    return (
    < >
   <header>
    <h1>Instant Pot Duo Plus</h1>
   </header>
    <main>

        <h3 className=" fs: italic, fw: bold">Description</h3>
          <pre>
            Instant Pot Duo is a multi-functional electric pressure cooker that combines several kitchen appliances into one.
            It has one-touch controls and stainless steel inner pot that allow you to cook a variety of dishes with versatile cooking options.
            It has 15 Smart Programs to help you get started quickly and easily.
            With a redesigned control panel, you see cooking status at-a-glance, and easily control every step.
          </pre>   
            <br />
        <h4 className=" fs: italic, fw: bold">Features</h4> 
         <section>
          Multiple cooking functions: Pressure cook, slow cook, rice cook, yogurt make, steam, sauté, and keep warm 
          One-touch Keep Warm program keeps food ready for serving on your schedule
          15 customizable Smart Programs for quick one-touch cooking: pressure cook, soup, broth, cake, egg, slow cook, sauté, rice, bean, grain, porridge, oatmeal, sterilize, yogurt and sous vide
          Digital display and controls: Easy-to-use interface with customizable programs for different types of food 
          Contemporary black-on-white display is easy-to-read, shows full cooking progress and includes dedicated Start button
          Separate Pressure and Temperature indicators to view at-a-glance, plus dual Fahrenheit and Celsius indicators
          Steel inner pot: Dishwasher-safe pot with a tri-ply bottom for even heat distribution 
          Easy-close lid automatically seals when the lid is closed
          Stainless-steel (18/8) inner pot with tri-ply bottom for perfect sautéing
          Intuitive remote steam release button makes venting simple and stress-free, plus automatically resets when lid is closed
          Quick release valve: Allows for rapid steam release when needed 
          Safety features: Includes safety locking lid, pressure release mechanisms, and overheat protection 
          Anti-spin design keeps inner pot in place for easy sautéing
          Up to 70% faster and more energy efficient than traditional cooking methods
          10+ proven safety features, including Overheat Protection™ and safe locking lid
          Dishwasher-safe lid and inner pot for quick and easy clean-up
          Detachable power cord makes storage easier
          Accessories: includes 2 sealing rings and stainless-steel steam rack 
         </section>
             <hr />

          <h2 className=" fs: italic, fw: bold" >Join Now</h2>
             <p>Join our email list and receive a exlusive <b>20% off</b> on your first purchase. </p>
          <form  onSubmit={handleEmailForm}>
           <input required name="email" type="email" placeholder="Email" id="email" /> 
           <input type="submit" value="Submit" />
          </form>
        
           <br />
           <hr />
           
          <YouTube
            src="https://www.youtube.com/embed/YPfggwCqfVE?si=rCb4ICO_k63BEuAv" 
            >
          </YouTube>
           

        <h2>Contact Form</h2>
        <form onSubmit={handleContactForm}>
            <input required name="name" type="name" placeholder="First Name" id="name" />
            <input required name="name" type="name" placeholder="Last Name" id="name" />
            <input required name="tel" type="tel" placeholder="###-###-####"  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" id="tel" />
            <input required name="text" type="text" placeholder="Message" id="text" />
            
            <input type="submit" value="Submit" /> 
         </form>
         <output id="outputTag"></output>
    </main>

         <br />
    <footer style="text-align: center; "><pre>Website created by <code>Lydia Carter</code></pre></footer> 
    </>
    );
    }

import React from "react";
import { useState } from "react";
import "./Footer.css";
function Footer() {
  return (
    <>
      <footer>
        <div>
          <h4>Find us</h4>
          <address>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2250.558385096977!2d12.53858741565306!3d55.66188960646785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465253832f5f32f7%3A0xaeff0e7466c2981b!2sEnghavevej%2080c%2C%202450%20K%C3%B8benhavn!5e0!3m2!1sen!2sdk!4v1623179617484!5m2!1sen!2sdk"
              width="200"
              height="200"
              allowfullscreen=""
              loading="lazy"
            ></iframe>{" "}
          </address>
          <h5>Meal shARING</h5>
          <p> M-Th: 7am - 4pm</p>
          <p>Fri-Sat: 9am - 8pm</p>
        </div>
        <div>
          <h4>About this page</h4>
          <p>This is a footer of the page for MealSharing </p>
        </div>

        <div>
          <h4>Navigation</h4>
          <p class="dates-footer">
            <a href="#">Home</a>
          </p>
          <p class="dates-footer">
            <a href="#"> About</a>
          </p>
          <p class="dates-footer">
            <a href="#">Histori</a>
          </p>
          <p class="dates-footer">
            <a href="#"> Content</a>
          </p>
          <p class="dates-footer">
            <a href="#">Blog</a>
          </p>
        </div>
      </footer>
    </>
  );
}
export default Footer;

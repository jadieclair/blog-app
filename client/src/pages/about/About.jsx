import React from "react";
import { Link } from "react-router-dom";
import "./about.css";

function About() {
  return (
    <div className="about-us">
      <header>
        <h1>About Us</h1>
      </header>
      <section className="about-content">
        <div className="author">
          <img
            src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
            alt="Johnny Howl's Profile Picture"
          />
          <h2>Johnny Howl</h2>
          <p>Passionate Blogger</p>
          <p>
            Johnny is a dedicated blogger with a love for technology and
            gadgets. He has been sharing his insights and reviews for over five
            years, helping readers make informed choices.
          </p>
          <p>
            Recipient of the <br />
            <strong>Best Tech Blogger Award</strong> - 2020
          </p>
        </div>
        <div className="author">
          <img
            src="https://images.unsplash.com/photo-1602465528357-ee742c488c2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Kathy, the author of The Dome stands with her book"
          />
          <h2>Kathy Smith</h2>
          <p>Travel Enthusiast</p>
          <p>
            Kathy's book has taken her to various corners of the globe. She
            believes that travel broadens horizons and is on a mission to
            inspire others to explore the world.
          </p>
          <p>
            Author of the acclaimed novel <br />"<strong>The Dome</strong>"
          </p>
        </div>
      </section>
      <section className="blog-history">
        <h2 className="about-title">Our Story...</h2>
        <p>
          Welcome to <i>The Best of You</i> Blog, your ultimate destination for
          all things sport, lifestyle, food, travel, DIY, and music! Established
          in 2015, our blog was born out of a shared passion for sharing
          valuable information and insights with our readers. Over the years,
          we've nurtured our vision and expanded our horizons to provide a
          diverse range of content that caters to a wide variety of interests.
          Our blog is not just a platform; it's a thriving community. With over
          20,000 dedicated bloggers and readers, you'll find an abundance of
          information, inspiration, and a strong sense of belonging.
          <br />
        </p>
      </section>
    </div>
  );
}

export default About;

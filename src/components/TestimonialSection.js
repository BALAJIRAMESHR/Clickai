import React from 'react';
import './TestimonialSection.css';

const App = () => {
  return (
    <div className="container">
      <div className="header">
        <span className="line">Over <span className="highlight-orange">100+</span> people have</span>
        <span className="line">enriched their events and</span>
        <span className="line">persevered special moments</span>
        <span className="line">with <span className="highlight-yellow">Click Ai</span></span>
      </div>
      <div className="cards-container">
        {testimonials.map((testimonial, index) => (
          <div className={`card ${testimonial.className}`} key={index}>
            <h3 className={testimonial.h3Class}>{testimonial.quote}</h3>
            <p>{testimonial.text}</p>
            <div className="author">
              <img src={testimonial.image} alt={testimonial.author} />
              <div>
                <div>{testimonial.author}</div>
                <div>{testimonial.location}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="stats-container">
        <div className="stat stat-orange">
          34 <span>Successful Events</span>
        </div>
        <div className="stat stat-blue">
          95% <span>Guests Engagement</span>
        </div>
        <div className="stat stat-purple">
          500+ <span>Happy Customers</span>
        </div>
      </div>
    </div>
  );
};

const testimonials = [
  {
    quote: "Figma ipsum component variant main layer",
    text: "Office ipsum you must be muted. High-level revision lunch able would. Due management 4-blocker low after while land message.",
    author: "Wade Warren",
    location: "Banglore",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    className: "card-green",
    h3Class: "orange"
  },
  {
    quote: "Figma ipsum component variant main layer",
    text: "Office ipsum you must be muted. High-level revision lunch able would. Due management 4-blocker low after while land message.",
    author: "Wade Warren",
    location: "Banglore",
    image: "https://randomuser.me/api/portraits/men/34.jpg",
    className: "card-light-green",
    h3Class: "yellow"
  },
  {
    quote: "Figma ipsum component variant main layer",
    text: "Office ipsum you must be muted. High-level revision lunch able would. Due management 4-blocker low after while land message.",
    author: "Wade Warren",
    location: "Banglore",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    className: "card-light-purple",
    h3Class: "purple"
  }
];

export default App;

import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h2>Welcome to Our Blog!</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
        </p>
        <p>
          Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
          mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum
          lacinia arcu eget nulla.
        </p>
        <p>
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim
          lacinia nunc.
        </p>
      </div>
      <div className="about-image">
        <img src="https://images.pexels.com/photos/2364701/pexels-photo-2364701.jpeg?auto=compress&cs=tinysrgb&w=600" alt="About Us" />
      </div>
    </div>
  );
}

export default About;

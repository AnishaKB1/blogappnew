import React from 'react';
import './Header.css';


const Header = () => {
  return (
    <div className="header">
    <div className="headerTitles">
      <span className="headerTitleSm">Express & Experience</span>
      <span className="headerTitleLg">BLOG</span>
    </div>
    <img className="headerImg"
      src="https://img.freepik.com/free-photo/beautiful-shot-mountains-reflecting-cold-lake-cloudy-sky_181624-4446.jpg?size=626&ext=jpg&ga=GA1.1.104040272.1698242580&semt=ais"
    />
  </div>
  );
}

export default Header;

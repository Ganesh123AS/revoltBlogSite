import React from 'react';

const About = () => {
  const func = () => {
    console.log("hello");
  }
  return (
    <div>
      <h1 onClick={func}>Hello</h1>
    </div>
  )
}

export default About;
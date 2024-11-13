import React from 'react';

function About({ image, about }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>
        {about}
        <br />
        I'm also passionate about YouTube automation, where I explore content creation, monetization strategies, and SEO. 
        Additionally, I have built an anime search site using HTML, CSS, and JavaScript to provide anime enthusiasts with a seamless search and filtering experience. 
        I aim to further develop these projects with more advanced features in the future.
      </p>
    </aside>
  );
}

export default About;

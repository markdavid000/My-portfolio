import React from 'react';
import img from './Screenshot 2023-01-20 185007.png';

const Body = () => {
  return (
    <div
      className='background'
      style={{
        borderRadius: '15px',
        paddingBottom: '2rem',
      }}
    >
      <div>
        <img
          src={img}
          alt=''
          style={{
            width: '100%',
            borderTopLeftRadius: '15px',
            borderTopRightRadius: '15px',
          }}
        />
      </div>
      <div style={{ margin: '0 1rem' }}>
        <h3>Mark-David Ojukwu</h3>
        <p style={{ fontSize: '0.8rem' }}>Frontend Developer</p>
        <div class='social_media'>
          <a
            href='https://github.com/markdavid000'
            target='_blank'
            rel='noreferrer'
          >
            <i class='ri-github-fill'></i>
          </a>
          <a
            href='https://twitter.com/mark_ojukwu'
            target='_blank'
            rel='noreferrer'
          >
            <i class='ri-twitter-fill'></i>
          </a>
          <a
            href='https://www.linkedin.com/in/mark-david-ojukwu-7841a2249/'
            target='_blank'
            rel='noreferrer'
          >
            <i class='ri-linkedin-fill'></i>
          </a>
          <a href='https://wa.me/09165135178' target='_blank' rel='noreferrer'>
            <i class='ri-whatsapp-fill'></i>
          </a>
        </div>
        <div className='flex'>
          <a
            href='mailto:davidojukwu59@gmail.com'
            target='_blank'
            rel='noreferrer'
            class='btn btn1'
          >
            Let's Talk
          </a>
          <a
            href='https://drive.google.com/file/d/1isb5B0RJgHlCnXs_xTyKNrBsJThhzV1L/view?usp=sharing'
            target='_blank'
            rel='noreferrer'
            class='btn btn1'
          >
            Download CV
          </a>
        </div>
        <h3>About</h3>
        <p style={{ fontSize: '0.8rem' }}>
          I'm a Frontend Web Developer, using cutting edge technologies to
          develop clean and elegant website. I'm currently working on the web2
          field. I love doing research and solving problems especially with my
          colleagues. I'm more curious to learn, work and have more experience
          as a Frontend Developer.
        </p>
      </div>
    </div>
  );
};

export default Body;

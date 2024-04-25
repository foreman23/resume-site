import React from 'react'

const ApiBlog = () => {
  return (
    <div className='BlogContainer'>
      {/* <img style={{
        width: '100%',
        display: 'flex',
        margin: 'auto',
        boxShadow: '0 6px 8px rgba(0, 0, 0, 0.2)',
        marginBottom: '10px',
      }} 
      src='/images/projects/aircraft-api/portfolio-api.webp'
      alt='api element'
      ></img> */}
      <p>This RESTful API contains endpoints for creating, reading, updating, and deleting fictional aircraft and can (cargo containers) entities. Some of the key elements of this project include JWT authorization, user to entity relations, entity to entity relations, and status codes. I have tested the API against a suite of Postman tests that cover the full functionality of the API using multiple different JWTs that I have generated using multiple different accounts. Full documentation with all supported endpoints and status codes can be found <a target='_blank' rel='noreferrer' href='https://docs.google.com/document/d/1oyYeudSGPyIQ91cN6Y7VEYlYz3MJ9OKT0avWXMO7bqw/edit?usp=sharing'>here</a> or by following the link at the top of the blog.</p>
      <p>By following the <a target='_blank' rel='noreferrer' href='https://portfolio-407508.uw.r.appspot.com/'>link to the hosted site</a> you should be able to click a second link, “Login here”, which will take you to a portal handled by auth0 that allows for you to sign up for an account using either your preferred email address or via your Google account. After you have signed in, you should be presented with a basic page that displays a JWT for your account. You will need to use this JWT as a bearer token for certain endpoints within the API such as aircraft creation and deletion. Created aircraft entities will belong to the user in which the passed JWT belongs to, and will only be able to be modified or deleted by their respective owners.</p>
    </div>
  )
}

export default ApiBlog
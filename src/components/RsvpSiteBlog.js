import React from 'react'

const RsvpSiteBlog = () => {
  return (
    <div className='BlogContainer'>
        <p>This project was part of a gig that I did with my video production crew, <a target='_blank' rel='noreferrer' href='https://www.youtube.com/@stall7studios'>Stall7 Studios</a>. We were hired by a client to film a video for their daughter’s quinceanera, and part of the deal was that we would also create an online RSVP portal for reservations available in both English and Spanish. I decided that this would be a great opportunity to practice using Firebase alongside Firestore for data and user management. But first I needed to create a nice looking user interface that would be viewable on both mobile and desktop devices.</p>
        <p>I created the layout in React.js, making sure that everything was mobile responsive as I went along. To help with this, I used Bootstrap for my grid system. While reservations were still open, the site had a form that visitors could fill out with their name, party size, and email which could then be submitted to complete their RSVP. There also used to be a countdown component that would count the days:hours:minutes until the time of the event, but this currently displays ‘00:00:00:00’ as the event has since passed.</p>
        <p>To store the reservation responses, I used Firestore as my database. After a user would fill and submit the RSVP form, the code would first check for correct party sizes and valid email addresses before being pushed to Firestore. The Firestore schema itself was very simple. There was one main collection, ‘guests’, that held two documents, ‘attending’ and ‘not_attending’. These documents each held an array that would store the guest party data objects as its elements.</p>
        <p>Lastly, I needed a secure way to display the RSVP responses to my client. To do this, I created a simple web panel that would display the names, party size, email/phone#, and attending status of each party that submitted a reservation. It also displayed how many seats out of the 200 maximum reserved were taken. In order to protect the personal information of the attendees I used Firebase to create an admin user profile that my client could use to access the web panel using a simple email and password login form. This provided a sufficient form of user authentication.</p>
    </div>
  )
}

export default RsvpSiteBlog
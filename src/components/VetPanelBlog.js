import React from 'react'
import { List, ListItem } from 'semantic-ui-react'

const VetPanelBlog = () => {
  return (
    <div className='BlogContainer'>
      <p>My senior capstone project for Oregon State involved working with a team of 3 other computer science students to create a full stack mobile application for a client. Our client, a local Veterinarian in Corvallis, wished for us to develop a mobile app that she and her peers could use for calculating drug dosages for different species of animals. The project was split into 4 different parts: a PostgreSQL database, a web panel, a REST API, and a mobile application. I was mainly involved with working on the web panel but I also did some work on the API.</p>
      <p>This project was a full school year long endeavor that started in Fall 2022 and ended during Spring 2023. Throughout the 3 terms that my group worked on this project, we would maintain regular contact through Discord either via voice or text communication in order to stay updated on the current progress of the project. On top of this, we would try to meet with our Veterinarian client every month or so to relay our progress to her as schedules allowed. Our group also used Asana to manage tasks and to track progress.</p>
      <p style={{ textIndent: '0px', marginTop: '25px' }}><b>Mobile Client Demo:</b><br></br><a target='_blank' rel='noreferrer' href='https://www.youtube.com/watch?v=yugMQLUtl20'>https://www.youtube.com/watch?v=yugMQLUtl20</a></p>
      <h3 style={{ textIndent: '0px', marginTop: '30px' }}>GitHub Repos:</h3>
      <List style={{ justifyContent: 'center', textIndent: '0px' }}>
        <ListItem>Admin Panel: <a target='_blank' rel='noreferrer' href='https://github.com/katieschaum/vetwebapp'>https://github.com/katieschaum/vetwebapp</a></ListItem>
        <ListItem>REST API: <a target='_blank' rel='noreferrer' href='https://github.com/foreman23/server_script462'>https://github.com/foreman23/server_script462</a></ListItem>
        <ListItem>Mobile Client: <a target='_blank' rel='noreferrer' href='https://github.com/ledbetni/CS461/tree/nick-beta'>https://github.com/ledbetni/CS461/tree/nick-beta</a></ListItem>
      </List>
    </div>
  )
}

export default VetPanelBlog
import React from 'react'

const SpotterSiteBlog = () => {
    return (
        <div style={{ width: '60%', justifyContent: 'center', margin: 'auto', fontSize: '15px', textIndent: '20px', marginBottom: '20px' }}>
            <p>I designed this simple React website for a friend who was looking for a portfolio to host their aviation photography photos. The plan was to integrate my <a href='/blog-portal' target='_blank' rel='noreferrer'>Blog Portal</a> project to work with this client React app to display blogs and images created using the former, but I have put the project on hold so only static blog cards are displayed currently. As a result, this website acts more as a proof of concept/prototype to what can be accomplished using React.js.</p>
            <p>Before I started coding this project, I worked with my client to design a <a href='https://www.figma.com/proto/gXB4YRhRPIO5y84B1jWpfR/Julian-website?node-id=1-2&t=lqEEdT1M5wi1Taav-1' target='_blank' rel='noreferrer'>UI using figma</a>. After coming to a good design approved by them, I turned to VScode to create the layout in code. Someday I hope to return to this project and finish fleshing it out and integrate it with Blog Portal.</p>
        </div>
    )
}

export default SpotterSiteBlog
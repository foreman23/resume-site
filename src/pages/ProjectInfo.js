import React from 'react'
import { useParams } from 'react-router-dom'

const ProjectInfo = () => {
    // Get projectId from url
    let { projectId } = useParams();


  return (
    <div>    
        ProjectInfo
        {projectId}
    </div>
  )
}

export default ProjectInfo
import React from 'react'
import { useParams } from 'react-router-dom'
import { projectData } from '../data/ProjectData';

const ProjectInfo = () => {
    // Get projectId from url
    let { projectId } = useParams();

    const projectObj = projectData.projects.find(project => project.id === projectId);
    console.log(projectObj)

    return (
        <div>
            {projectObj.description}
        </div>
    )
}

export default ProjectInfo
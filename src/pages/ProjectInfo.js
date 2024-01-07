import React from 'react'
import { useParams } from 'react-router-dom'
import { projectData } from '../data/ProjectData';
import { Row, Col, Container } from 'react-bootstrap';
import Navbar from '../components/Navbar';

const ProjectInfo = () => {
    // Get projectId from url
    let { projectId } = useParams();

    const projectObj = projectData.projects.find(project => project.id === projectId);
    console.log(projectObj)

    return (
        <div>

            <Navbar></Navbar>

            <Row>
                {projectObj.name}
            </Row>
            <Row>
                {projectObj.description}
            </Row>
            <Row>
                {projectObj.technologies}
            </Row>
            <Row>
                <a href={projectObj.git_link} target='_blank' rel='noreferrer'>{projectObj.git_link}</a>
            </Row>
        </div>
    )
}

export default ProjectInfo
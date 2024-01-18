import React from 'react'
import { useParams } from 'react-router-dom'
import { projectData } from '../data/ProjectData';
import { Row, Col, Container } from 'react-bootstrap';
import { List, ListItem } from 'semantic-ui-react';
import Navbar from '../components/Navbar';
import Slider from "react-slick";
import YouTube from 'react-youtube';
import ApiBlog from '../components/ApiBlog';
import BlogPortalBlog from '../components/BlogPortalBlog';

const ProjectInfo = () => {

    window.scrollTo(0, 0);

    // Get projectId from url
    let { projectId } = useParams();

    const projectObj = projectData.projects.find(project => project.id === projectId);
    console.log(projectObj)

    // Slider Settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: 'anticipated'
    };

    // Youtube player settings
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };


    return (
        <div>
            <Navbar></Navbar>
            <Container style={{ justifyContent: 'center', flexDirection: 'column', paddingBottom: '50px', marginTop: '7vh' }}>
                <Row>
                    {projectObj.has_video === true ? (
                        <YouTube style={{ display: 'flex', justifyContent: 'center' }} videoId={`${projectObj.video_id}`} opts={opts}></YouTube>
                    ) : projectObj.has_carousel === true ? (
                        <Slider style={{ width: '65%', margin: 'auto' }} {...settings}>
                            {Array.from({ length: projectObj.screenshot_count }, (_, index) => (
                                <div key={index}>
                                    <img
                                        style={{
                                            width: '100%',
                                            display: 'flex',
                                            margin: 'auto',
                                            boxShadow: '0 6px 8px rgba(0, 0, 0, 0.2)',
                                            marginBottom: '10px',
                                        }}
                                        alt={`screenshot ${index + 1}`}
                                        src={`/images/projects/${projectId}/Screenshot_${index + 1}.webp`}
                                    />
                                </div>
                            ))}
                        </Slider>
                    ) : (
                        <div></div>
                    )
                    }
                </Row>
            </Container>

            <Container style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', margin: 'auto', alignItems: 'center', paddingBottom: '120px' }}>

                <Row>
                    <Col>
                        <Row style={{ textAlign: 'center', marginBottom: '20px' }}>
                            <h1>{projectObj.name}</h1>
                        </Row>

                        <Row style={{ textAlign: 'center', marginBottom: '5px' }}>
                            <List divided horizontal>
                                {projectObj.technologies.map((technology) => (
                                    <ListItem style={{ fontSize: '14px', fontWeight: 'bold' }}>{technology}</ListItem>
                                ))}
                            </List>
                        </Row>

                        <Row style={{ textAlign: 'center', flexDirection: 'row', marginBottom: '15px' }}>
                            <List divided horizontal>
                                <ListItem><a href={projectObj.host_link} target='_blank' rel='noreferrer'>Hosted Site</a></ListItem>
                                <ListItem><a href={projectObj.git_link} target='_blank' rel='noreferrer'>GitHub Repo</a></ListItem>
                            </List>
                        </Row>

                        {/* Project blogs go here */}
                        <Row>
                            <BlogPortalBlog></BlogPortalBlog>
                        </Row>

                    </Col>
                </Row>

                <Row style={{ marginTop: '20px' }}>
                    <Col>
                        {projectObj.has_carousel === false && projectObj.has_video === false ? (
                            <ApiBlog></ApiBlog>
                        ) : (
                            <div></div>
                        )}
                    </Col>
                </Row>

            </Container>

        </div>
    )
}

export default ProjectInfo
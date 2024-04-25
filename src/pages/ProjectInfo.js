import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { projectData } from '../data/ProjectData';
import { Row, Col, Container } from 'react-bootstrap';
import { List, ListItem, Divider } from 'semantic-ui-react';
import Navbar from '../components/Navbar';
import Slider from "react-slick";
import YouTube from 'react-youtube';
import ApiBlog from '../components/ApiBlog';
import BlogPortalBlog from '../components/BlogPortalBlog';
import SpotterSiteBlog from '../components/SpotterSiteBlog';
import RsvpSiteBlog from '../components/RsvpSiteBlog';
import TwitterBlog from '../components/TwitterBlog';
import VetPanelBlog from '../components/VetPanelBlog';

const ProjectInfo = () => {

    // Get projectId from url
    let { projectId } = useParams();

    const projectObj = projectData.projects.find(project => project.id === projectId);
    // console.log(projectObj)

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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div>
            <Navbar></Navbar>
            <Divider></Divider>
            <Container style={{ justifyContent: 'center', flexDirection: 'column', paddingBottom: '50px', marginTop: '35px' }}>
                <Row>
                    {projectObj.has_video === true ? (
                            <div>
                                <YouTube style={{ display: 'flex', justifyContent: 'center' }} videoId={`${projectObj.video_id}`} opts={opts}></YouTube>
                            </div>
                    ) : projectObj.has_carousel === true ? (
                        <Slider fade style={{ width: '65%', margin: 'auto' }} {...settings}>
                            {Array.from({ length: projectObj.screenshot_count }, (_, index) => (
                                <div key={index}>
                                    <img className='ProjectBlogImage'
                                        // style={{
                                        //     width: '100%',
                                        //     display: 'flex',
                                        //     margin: 'auto',
                                        //     boxShadow: '0 6px 8px rgba(0, 0, 0, 0.2)',
                                        //     marginBottom: '10px',
                                        // }}
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
                                    <ListItem key={projectObj.name + technology} style={{ fontSize: '12px', fontWeight: 'bold' }}>{technology}</ListItem>
                                ))}
                            </List>
                        </Row>
                        <Row style={{ textAlign: 'center', flexDirection: 'row', marginBottom: '15px' }}>
                            <List divided horizontal>
                                {projectObj.host_link ? (
                                    <ListItem key={projectObj.name}><a href={projectObj.host_link} target='_blank' rel='noreferrer'>Deployed Project</a></ListItem>
                                ) : (
                                    <ListItem><a href={'https://www.youtube.com/watch?v=yugMQLUtl20'} target='_blank' rel='noreferrer'>Mobile Client Demo</a></ListItem>
                                )}
                                <ListItem><a href={projectObj.git_link} target='_blank' rel='noreferrer'>GitHub Repo</a></ListItem>
                                {projectObj.documentation_link ? (
                                    <ListItem><a href={projectObj.documentation_link} target='_blank' rel='noreferrer'>Documentation</a></ListItem>
                                ) : (
                                    <div></div>
                                )}
                            </List>
                        </Row>
                        {/* Project blogs go here */}
                        <Row>
                            {projectObj.id === 'blog-portal' ? (
                                <BlogPortalBlog></BlogPortalBlog>
                            ) : projectObj.id === 'spotter-site' ? (
                                <SpotterSiteBlog></SpotterSiteBlog>
                            ) : projectObj.id === 'rsvp-site' ? (
                                <RsvpSiteBlog></RsvpSiteBlog>
                            ) : projectObj.id === 'aircraft-api' ? (
                                <ApiBlog></ApiBlog>
                            ) : projectObj.id === 'twitter-bot' ? (
                                <TwitterBlog></TwitterBlog>
                            ) : projectObj.id === 'vet-panel' ? (
                                <VetPanelBlog></VetPanelBlog>
                            ) : (
                                <div></div>
                            )}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProjectInfo
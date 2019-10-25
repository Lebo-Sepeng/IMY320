import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import Project from '../project/Project';
import styles from './Projects.module.css';

const Projects = ({ match }) => {
    const project = {
        project1: {
            name: 'Inforgraphic Game on Makeup and Animal Cruelty',
            description0: `
                This was a project for a 2nd Year Visual
                Design Module Called VIO202. It is an interactive 
                game based on an inforgraphic about make up and 
                how certain make up products are tested on animals
                This Is also to promote cruelty free products
            `,
           
            imageGallery: [
                {
                    src: '/images/AnimalCrualty.jpg',
                    alt: '',
                }
            ]
        },
        project2: {
            name: 'Interactive Lyric Video For Chris Brown Album',
            description0: `
                This was a project for a 2nd Year Visual
                Design Module Called VIO202. It is an interactive 
                lyrics video based on Chris Brown's Album 
                "Heartbreak on a Full Moon"
            `,
            
            imageGallery: [
                {
                    src: '/images/LyricVideoScreenshot.jpg',
                    alt: '',
                }
            ]
        },
        project3: {
            name: 'Portfolio Project for VIO Module 2018',
            description0: `
                This was a project for a 2nd Year Visual
                Design Module Called VIO202. It is an interactive 
                portfolio  used to showcase all of my work for  
                the module that I had done that year
            `,
            
            imageGallery: [
                {
                    src: '/images/VIOExamScreenShot.jpg',
                    alt: '',
                }
            ]
        },
        project4: {
            name: 'Logo Redesign for Princess Hair',
            description0: `
                This is a logo which I revamped and redesigned
                for a hair salon called Princess Hair Salon for 
                the module VIO202 as a student project in 2018
            `,
            
            imageGallery: [
                {
                    src: '/images/Princess.jpg',
                    alt: '',
                }
            ]
        },
        project5: {
            name: 'Childrens Book Suburb illustration',
            description0: `
                One of the drawings I created for a childrens 
                book, this is simply a suburb that the history
                was set in
            `,
            
            imageGallery: [
                {
                    src: '/images/suburb.jpg',
                    alt: '',
                }
            ]
        },
    }

    if (match.params.name === undefined) {
        return(
            <div>
                <div className={styles.Grid}>
                    <div className={styles.Item}>
                        <Link to="/projects/project1">
                            <div className={styles.Inner}>
                                <img src={project.project1.imageGallery[0].src} />
                                <div className={styles.AltText}>
                                    <span>{project.project1.imageGallery[0].alt}</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className={styles.Item}>
                        <Link to="/projects/project2">
                            <div className={styles.Inner}>
                                <img src={project.project2.imageGallery[0].src} />
                                <div className={styles.AltText}>
                                    <span>{project.project2.imageGallery[0].alt}</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className={styles.Item}>
                        <Link to="/projects/project3">
                        <div className={styles.Inner}>
                            <img src={project.project3.imageGallery[0].src} />
                            <div className={styles.AltText}>
                                <span>{project.project3.imageGallery[0].alt}</span>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className={styles.Item}>
                        <Link to="/projects/project4">
                        <div className={styles.Inner}>
                            <img src={project.project4.imageGallery[0].src} />
                            <div className={styles.AltText}>
                                <span>{project.project4.imageGallery[0].alt}</span>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className={styles.Item}>
                        <Link to="/projects/project5">
                        <div className={styles.Inner}>
                            <img src={project.project5.imageGallery[0].src} />
                            <div className={styles.AltText}>
                                <span>{project.project5.imageGallery[0].alt}</span>
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
        );    
    }
    else {
        return(
            <div>
                <Project project={project[match.params.name]} />
            </div>
        );
    }
}

export default withRouter(Projects);
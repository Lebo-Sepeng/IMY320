import React from 'react';
import styles from './Project.module.css';
import Carousel from '../../components/carousel/Carousel';

const Project = ({ project }) => {
    return(
        <div className={styles.ProjectContainer}>
            <div className={styles.ProjectImage}>
                <Carousel images={project.imageGallery} />
            </div>
            <div className={styles.Project}>
                <div className={styles.ProjectName}>
                    <p>
                        {project.name}
                    </p>
                </div>
                <div className={styles.ProjectDescription}>
                    <p>
                        {project.description0}
                    </p>
                    <p>
                        {project.description1}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Project;
import React from 'react';
import styles from './Member.module.css';
import Carousel from './../../components/carousel/Carousel';

const Member = ({ member }) => {
    return(
        <div className={styles.MemberContainer}>
            <div className={styles.Member}>
                <div className={styles.MemberImage}>
                    <img src={member.image[0].src} alt={member.image[0].alt} />
                    <h1>{member.name}</h1>
                </div>
                <div className={styles.MemberProjects}>
                    <h2>Projects</h2>
                    <Carousel images={member.image} />
                </div>
            </div>
            <div className={styles.MemberInformation}>
                <div className={styles.MemberDescription}>
                    <p>{member.bio}</p>
                </div>
                <div className={styles.MemberDescription}>
                    <p>{member.interests}</p>
                </div>
                <div className={styles.MemberDescription}>
                    <p>{member.remarks}</p>
                </div>
            </div>
        </div>
    );
}

export default Member;
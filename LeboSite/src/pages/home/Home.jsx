import React from 'react';
import styles from './Home.module.css';
import Carousel from './../../components/carousel/Carousel';
import { makeClass } from '../../utils';

const Home = () => {
    const images = [
        {
            src: "/images/VIOExamScreenShot.jpg",
            alt: '',
        },
        {
            src: "/images/LyricVideoScreenshot.jpg",
            alt: '',
        },
        {
            src: "/images/AnimalCrualty.jpg",
            alt: '',
        },
        {
            src: "/images/Princess.jpg",
            alt: '',
        },
    ]

    return (
        <div className={styles.Home}>
            <span className={makeClass(styles.Welcome, "montserrat bold")}>Hi, I'm</span>
            <span className={makeClass(styles.Header, "montserrat bold green")}>Lebo Sepeng</span>
            <p>
                I am a visual artist, as well as a web developer<br/>
                with the ability to create any digital design or<br/>
                artwork of your choice. Logo's, posters, digital <br/>
                illustartions and artworks, web designs, you name it<br/>
            
                Along with visual arts, I also do radio braodcasting<br/>
                Come in, look around to see some of my best works
            </p>
            <Carousel images={images} />
            <div className={styles.imageDiv}>
                <img className={styles.Einstein} src="/images/Lebo1.jpg" alt="Lebo"></img>
            </div>
        </div>
    );
}

export default Home;
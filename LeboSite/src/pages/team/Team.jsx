import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import Member from '../member/Member';
import Carousel from './../../components/carousel/Carousel';
import styles from './Team.module.css';

const Team = () => {
   const images = [
        {
            src: "/images/Lebo1.jpg",
            alt: '',
        },
        {
            src: "/images/Lebo2.jpg",
            alt: '',
        },
       
    ]
   
   return (
        <div className={styles.Home}>
            
            
            <Carousel images={images} />
            <div className={styles.imageDiv}>
               
            </div>
           
           <p className="lato">
                I, Molebogeng (Lebo) Sepeng am a 21 year old BIS Multimedia <br/>
                student at the University of Pretoria studying <br/>
                towards my bachelors degree <br/>
                
           
                I am also a broadcaster at Tuks FM which is the <br/>
                campus radio station
           
                I Grew up in Pretoria, studied at President C.R Swart <br/>
                High School which is where I learned how to draw. <br/>
                I then graduated high school and went to study at <br/>
                University of Pretoria, which is where I learned how <br/>
                to create art digitally 
            </p>
           
        </div>
    );
   }

export default withRouter(Team);
import React from 'react';
import { RiTrophyLine, RiAwardLine } from 'react-icons/ri';

const AboutBox = () => {
    return (
        <div className="about__boxes grid">
            <div className="about__box">
                <RiTrophyLine className='about__icon' />
                <div>
                    <h3 className="about__title">INOVA 2024</h3>
                    <span className="about__subtitle">Gold Award - Intelligent Oil-Collecting Robot</span>
                </div>
            </div>

            <div className="about__box">
                <RiTrophyLine className='about__icon' />
                <div>
                    <h3 className="about__title">INTARG 2024</h3>
                    <span className="about__subtitle">Gold Award - Automatic Waste Classifying Trash Can</span>
                </div>
            </div>

            <div className="about__box">
                <RiTrophyLine className='about__icon' />
                <div>
                    <h3 className="about__title">AI JAM US 2024</h3>
                    <span className="about__subtitle">Gold Award - AIot Air Quality Monitoring</span>
                </div>
            </div>

            <div className="about__box">
                <RiAwardLine className='about__icon' />
                <div>
                    <h3 className="about__title">Student of the Month</h3>
                    <span className="about__subtitle">Hanoi High School for Gifted Students</span>
                </div>
            </div>
        </div>
    )
}

export default AboutBox;

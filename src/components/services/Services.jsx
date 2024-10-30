import React from 'react';
import './Services.css';
import Image1 from '../../assets/service-1.svg';
import Image2 from '../../assets/service-2.svg';
import Image3 from '../../assets/service-3.svg';

const data = [
    {
        id: 1,
        image: Image2,
        title: "Publications/Research",
        description: "International Journal of Advanced Research in Computer Science - Article: CLASSIFICATION OF PLANT LEAVES AND FLOWERS USING IMAGE PROCESSING AND DEEP NEURAL NETWORKS. DOI: http://dx.doi.org/10.26483/ijarcs.v15i5.7137",
    },
    {
        id: 2,
        image: Image1,
        title: "ACADEMIC ACHIEVEMENT",
        description: "Global Link Singapore, Nanyang Technological University, Singapore - Summer 2024: Developed a web-based project for diagnosing diseases through X-ray image analysis. Attended a science workshop with over 150 student projects and participated in a meeting with a professor to learn advanced research methodologies.",
    },
    {
        id: 3,
        image: Image3,
        title: "INOVA 2024, 48th International Invention Show",
        description: "Developed the autonomous 'OilSweep' robot designed to efficiently collect oil spills in marine environments, generating ideas and conceptualizing the robot, and creating the functional block diagram for clear hardware and software integration.",
    },
    {
        id: 4,
        image: Image2, // Thêm hình ảnh cho mục thứ tư nếu có
        title: "LEADERSHIP",
        description: "Community Service - Social Support Center II Hanoi: Led donations of necessities to 180 elderly individuals and people with disabilities, awarded scholarships with books and backpacks to 20 underprivileged students at Viên An Secondary School, and lit incense in memory of over 50 martyrs at the Viên An Martyrs' Cemetery to express gratitude for their sacrifices.",
    },
];

const Services = () => {
    return (
        <section className="services container section" id="services">
            <h2 className="section__title">Project-Research</h2>
            <div className="services__container grid">
                {data.map(({ id, image, title, description }) => (
                    <div className="services__card" key={id}>
                        {image && <img src={image} alt='' className='services__img' width="80" />}
                        <h3 className="services__title" style={{ textAlign: 'left' }}>{title}</h3>
                        <p className="services__description" style={{ textAlign: 'left' }}>{description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;

import React from 'react';
import japan from '../Assets/japan.jpeg';
const id = '1jMAfdIYWomKJf6khY9Eq-3pVWVmoXH82';
const embed = `https://drive.google.com/file/d/${id}/preview`;
const open = `https://drive.google.com/file/d/${id}/view?usp=sharing`;
const download = `https://drive.google.com/uc?export=download&id=${id}`;

function Resume() {
    return (
        <div className="resume-page flex-col align-ctr" style={{ backgroundImage: `url(${japan})` }}>
            <div className="resume-inner-container set-top">
                <iframe
                    title="resume"
                    className="resume-iframe"
                    src={embed}
                    allowFullScreen={true}
                    allow="true"
                ></iframe>
            </div>
            <div className="resume-links-container">
                <a className="resume-link open-link" href={open} target="_blank" rel="noopener noreferrer">View Resume</a>
                <a className="resume-link downloadable-link" href={download}>Download Resume</a>
            </div>
        </div>
    )
}

export default Resume;
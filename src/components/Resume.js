import React from 'react';
import bako from '../assets/bako.jpg';
const id = '1_MzAF6uXKsBsqrPZOjxg44XXDQ08oS7M';
const embed = `https://drive.google.com/file/d/${id}/preview`;
const open = `https://drive.google.com/file/d/${id}/view?usp=sharing`;
const download = `https://drive.google.com/uc?export=download&id=${id}`;

function Resume() {
    return (
        <div className="resume-page flex-col align-ctr" style={{ backgroundImage: `url(${bako})` }}>
            <div className="resume-inner-container set-top">
                <iframe
                    title="resume"
                    className="resume-iframe"
                    src={embed}
                    allowFullScreen={true}
                    allow
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
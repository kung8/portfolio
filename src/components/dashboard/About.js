import React from 'react';

export const About = ({ id }) => {
    return (
        <div id={id} className='about-container section-container'>
            <h4 className='label'>About</h4>
            <p className='passion'>
                I have a passion for <span>education</span> and <span>doing good</span>. Web development allows me to combine these two passions through the ever-changing nature of the tech industry and provide the opportunities and resources to <span>build products</span> and <span>problem solve</span>.
            </p>
            <p className='interests'>
                When I am not coding, you can find me biking, serenading my neighbors on my balcony, playing games, reading, listening to T-Swift, learning about something, watching a show, or failing at dating. Ever since my time in Southeast Asia, I have been intrigued with different cultures, delicious cuisines, and traveling. If you have any recommendations, please let me know!
            </p>
            <p className='employ'>
                I like to keep myself busy and always looking to <span>try my hands</span> at something if it means I can grow. During the day I am working at my engineering job, and in the evenings and weekends building my <span>startup company</span>. 
            </p>
        </div>
    )
}
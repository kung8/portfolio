const { cloneDeep } = require('lodash');
const cookbook = require('./cookbook');

const formatCookbookExperience = () => {
    const newCookbook = cloneDeep(cookbook);
    delete newCookbook.images
    return newCookbook;
}

const experiences = [
    {
        title: 'Talent / HR Admin',
        organization: 'THG',
        description: 'Health and beauty ecommerce',
        location: 'Lindon, UT',
        dateRange: ['May 2017', 'Jan 2019'],
        bullets: [
            'Recruited for 100+ various roles within marketing, studio, and customer service departments by improving and centralizing the process of posting, screening, interviewing, and extending offers',
            'Juggled all HR responsibilities at location of 100 employees to ensure a happy work environment, employee safety, and positive employee-employer relations',
            'Managed many of the HR systems to maintain ease of tracking performance and benefits',
        ],
        chips: [
            'DocuSign',
            'Adobe Acrobat',
            '2017 Best Newcomer Award'
        ]
    },
    {
        title: 'Mentor',
        organization: 'DevMountain',
        description: '13-week coding bootcamp',
        location: 'Lehi, UT',
        dateRange: ['May 2019', 'Sep 2019'],
        bullets: [
            'Instructed and created learning and review material covering various JavaScript, HTML, CSS and React principles to enhance and tailor to the students’ learning and understanding',
            'Debugged student code quickly and helped students think out their questions to guide their learning and improve their problem-solving abilities',
            'Handled many of the technical support with class lectures to permit students with remote access',
        ],
        chips: [
            'React JS',
            'HTML',
            'CSS',
            'Javascript',
            'AWS S3',
            'Socket.io',
            'Node',
            'Express',
            'Massive',
            'PostgreSQL',
            'Redux',
            'Axios',
            'Bcrypt',
            'dotenv',
            'Twilio',
            'Nodemailer',
            'GitHub',
            'Git',
        ]
    },
    {
        title: 'Software Engineer',
        organization: 'Purple',
        description: 'Mattress and bedding ecommerce',
        location: 'Lehi, UT',
        dateRange: ['Sep 2019', 'Jul 2021'],
        bullets: [
            'Increased attachment rates and improved user experience by building new components and features using Vue and vanilla JavaScript for various promotions and product launches with relatively quick turnaround times',
            'Improved dynamic functionality of PDP pages by restructuring and refactoring Vue components to the amount of hardcoded data and free up dev bandwidth',
            'Learned and managed third party tools to help set up A/B Test, store and compress assets, deploy code, and test browser compatibility',
            'Led deployments, implemented new processes, and established documentation to help onboard and train incoming developers and other team members, and mentored 8 new developers in the code base and other aspects of the site'
        ],
        chips: [
            'Vue JS',
            'Vanilla JS',
            'Bootstrap',
            'SCSS',
            'PHP',
            'Twig',
            'Craft CMS',
            'WordPress',
            'Buddy Works',
            'Figma',
            'Optimizely',
            'Cloudinary',
            'BrowserStack',
            'SourceTree',
            'GitHub',
            'Jira',
        ],
        url: 'https://purple.com',
        hosted: true,
        show: true,
    },
    {
        title: 'Software Engineer (Contract)',
        organization: 'Fat Boy Catering',
        description: 'Food catering business',
        location: 'Highland, UT',
        dateRange: ['Mar 2021', 'Jun 2021'],
        bullets: [
            'Designed and built client app using basic component-based architecture using React Hooks and applied good UX principles for better overall usability and increased customization for client needs',
            'Implemented Twilio and Sockets to update admin messaging, allowing menu updates, and texting all in real-time',
        ],
        chips: [
            'React JS',
            'Sass',
            'Figma',
            'Twilio',
            'Socket.io',
            'Node',
            'Express',
            'Massive',
            'PostgreSQL',
            'Redux',
            'Axios',
            'Bcrypt',
            'dotenv',
        ],
        url: 'http://159.65.98.93:8586/#/',
        hosted: true,
        show: true,
    },
    {
        title: 'Senior Software Engineer',
        organization: 'Weave',
        description: 'Software company',
        location: 'Lehi, UT',
        dateRange: ['Jul 2021', 'Present'],
        bullets: [
            'Engaged with cross-functional team members with different disciplines to build, migrate, deprecate, and maintain various Automated and Manual Messaging features to provide a more robust and reliable experience for customers',
            'Refactored components to use new or updated RESTful API contracts and standardize dependencies to more modern tech',
            'Created and utilized feature flags to slow-release new features or drastic changes to API contracts',
        ],
        chips: [
            'React JS',
            'Typescript',
            'React Query',
            'React Location',
            'Emotion JS',
            'Storybook',
            'Figma',
            'Postman',
            'Cypress',
            'Linear',
            'Dayjs',
            'React Virtuoso',
            'Craft JS',
            'Use Debounced'
        ],
        url: 'https://www.getweave.com/',
        hosted: true,
        show: true,
    },
    {
        title: 'Business Owner / Tabletop Game Designer',
        organization: 'Budding Acorn',
        description: 'Board game company',
        location: 'American Fork, UT',
        dateRange: ['Oct 2022', 'Present'],
        bullets: [
            'Coordinated all aspects of the product journey including product ideation, prototyping, product testing, and final product delivery',
            'Negotiated with vendors to manufacture the products and hired freelance designers to create the final artwork and renderings',
            'Established the LLC, attained a business license and set up various accounts, and developed all aspects of the ecommerce website',
        ],
        chips: [
            'React',
            'Sass',
            'Node',
            'Express',
            'Massive',
            'Nodemailer',
            'Dayjs',
            'Sockets',
            'Crypto JS'
        ],
        url: 'https://buddingacorn.dev',
        hosted: true,
        show: true,
    },
    formatCookbookExperience(),
];

module.exports = experiences;
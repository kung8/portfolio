const eden = '../assets/Products/eden.jpeg';
const games = '../assets/Products/full-set.png';
const cookbook = '../assets/Products/cookbook.png';
const recommendations = '../assets/Products/recommendations.png';

const products = [
    {
        organization: 'Recommendations / Reviews',
        images: [recommendations],
        bullets: [
            'I was tired of storing these recommendations and my reviews about random things in a bunch of places. I hope you find them useful!',
        ],
        url: 'https://kevinung8.com/#/recommendations',
        localUrl: 'http://localhost:3000/#/recommendations',
        hosted: true,
        show: true,
    },
    {
        organization: 'Songs',
        images: [eden],
        bullets: [
            'Meet Eden, my guitar! I dabble with music production and songwriting. T-Swift among many other country/pop artists have been my inspiration. I love serenading my neighbors in the evenings on my balcony.',
        ],
        url: 'https://kevinung8.com/#/music',
        localUrl: 'http://localhost:3000/#/music',
        hosted: true,
        show: true,
    },
    {
        organization: 'Cookbook',
        images: [cookbook],
        bullets: [
            'I love to cook and almost as much as I love to eat. Here are some of my favorite recipes that I have collected over the years.',
        ],
        url: 'https://kevinung8.com/#/recipes',
        localUrl: 'http://localhost:3000/#/recipes',
        hosted: true,
        show: true,
    },
    {
        organization: 'Tabletop Games',
        images: [games],
        bullets: [
            'I grew up playing games with my family and friends, and I want to create games that will also bring people together. As a part of my side hustle, I am working on designing games that employ strategy.',
        ],
        url: 'https://buddingacorn.dev/#/products/games/1',
        hosted: true,
        show: true,
    },
];

module.exports = products;
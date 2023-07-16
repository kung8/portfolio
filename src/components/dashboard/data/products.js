import playingCard from '../../../assets/Components/8-of-hearts.png';
import games from '../../../assets/Products/full-set.png';

const baseUrl = process.env.NODE_ENV === 'production' ? 'https://kevinung8.com/#' : 'http://localhost:3000/#';

export const products = [
    {
        organization: 'Songs',
        images: [playingCard],
        bullets: [
            'Meet Eden, my guitar! I dabble with music production and songwriting. T-Swift among many other country/pop artists have been my inspiration. I am hoping to work on more music over the next half of the year.',
        ],
        url: baseUrl + '/music',
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
]
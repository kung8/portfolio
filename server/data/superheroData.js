const apogee = '../assets/superhero/Apogee.png';
const blazestone = '../assets/superhero/Blazestone.jpeg';
const blitzerman = '../assets/superhero/Blitzerman.jpeg';
const downburst = '../assets/superhero/Downburst.jpeg';
const everseer = '../assets/superhero/Everseer.jpeg';
const gammaJack = '../assets/superhero/GammaJack.jpeg';
const gazerbeam = '../assets/superhero/Gazerbeam.jpeg';
const hypershock = '../assets/superhero/Hypershock.jpeg';
const macroburst = '../assets/superhero/Macroburst.jpeg';
const mrIncredible = '../assets/superhero/MrIncredible.jpg';
const phylange = '../assets/superhero/Phylange.jpeg';
const psycwave = '../assets/superhero/Psycwave.jpeg';
const stormicide = '../assets/superhero/Stormicide.jpeg';
const universalMan = '../assets/superhero/UniversalMan.jpeg';
const vectress = '../assets/superhero/Vectress.jpeg';
const team = '../assets/superhero/the-incredibles-and-frozone.jpeg';
const metaMan = '../assets/superhero/MetaMan.jpeg';

const omnidroid = require('./omnidroidData');

const superheroes = [
    {
        name: 'Universal Man',
        image: universalMan,
        power: 'Atomic density manipulation',
        omnidroid: omnidroid[0], 
        terminated: true, 
        rating: 2.9
    },
    {
        name: 'Psycwave',
        image: psycwave,
        power: 'Psychic Foresight, thought control, telekinesis',
        omnidroid: omnidroid[0], 
        terminated: true,
        rating: null
    },
    {
        name: 'Everseer',
        image: everseer,
        power: 'Telepathy, clairvoyance, and magnoscopic vision',
        omnidroid: omnidroid[0], 
        terminated: true,
        rating: null
    },
    {
        name: 'Macroburst',
        image: macroburst,
        power: 'High density force projection',
        omnidroid: omnidroid[0], 
        terminated: false,
        rating: null
    },
    {
        name: 'Macroburst',
        image: macroburst,
        power: 'High density force projection',
        omnidroid: omnidroid[1], 
        terminated: true,
        rating: null
    },
    {
        name: 'Phylange',
        image: phylange,
        power: 'Sonic field projection',
        omnidroid: omnidroid[1], 
        terminated: true,
        rating: null
    },
    {
        name: 'Blazestone',
        image: blazestone,
        power: 'Pyrotechnic discharge, fire control',
        omnidroid: omnidroid[1], 
        terminated: true,
        rating: null
    },
    {
        name: 'Downburst',
        image: downburst,
        power: 'Flight, gaseous expulsion',
        omnidroid: omnidroid[1], 
        terminated: false,
        rating: null
    },
    {
        name: 'Downburst',
        image: downburst,
        power: 'Flight, gaseous expulsion',
        omnidroid: omnidroid[2], 
        terminated: true,
        rating: null
    },
    {
        name: 'Hypershock',
        image: hypershock,
        power: 'Seismic wave generation',
        omnidroid: omnidroid[2], 
        terminated: false,
        rating: null
    },
    {
        name: 'Hypershock',
        image: hypershock,
        power: 'Seismic wave generation',
        omnidroid: omnidroid[3], 
        terminated: true,
        rating: null
    },
    {
        name: 'Apogee',
        image: apogee,
        power: 'Gravity control levitation',
        omnidroid: omnidroid[3], 
        terminated: true,
        rating: null
    },
    {
        name: 'Blitzerman',
        image: blitzerman,
        power: 'High-powered locomotion, blitz through obstacles',
        omnidroid: omnidroid[3], 
        terminated: true,
        rating: null
    },
    {
        name: 'Tradewind',
        image: metaMan,
        power: 'Elemental control',
        omnidroid: omnidroid[3], 
        terminated: true,
        rating: null
    },
    {
        name: 'Vectress',
        image: vectress,
        power: 'Generate sub-sonic bursts',
        omnidroid: omnidroid[3], 
        terminated: true,
        rating: null
    },
    {
        name: 'Gazerbeam',
        image: gazerbeam,
        power: 'Generate laser blasts',
        omnidroid: omnidroid[3], 
        terminated: false,
        rating: null
    },
    {
        name: 'Gazerbeam',
        image: gazerbeam,
        power: 'Generate laser blasts',
        omnidroid: omnidroid[4], 
        terminated: true,
        rating: null
    },
    {
        name: 'Stormicide',
        image: stormicide,
        power: 'Electrical discharge, gale bursts',
        omnidroid: omnidroid[4], 
        terminated: true,
        rating: null
    },
    {
        name: 'Gamma Jack',
        image: gammaJack,
        power: 'Controlled bursts of radiation',
        omnidroid: omnidroid[4], 
        terminated: false,
        rating: null
    },
    {
        name: 'Gamma Jack',
        image: gammaJack,
        power: 'Controlled bursts of radiation',
        omnidroid: omnidroid[5], 
        terminated: true,
        rating: null
    },
    {
        name: 'Mr. Incredible',
        image: mrIncredible,
        power: 'Superhuman strength capable of lifting weight in excess of 66 tons, invulnerability to high levels of physical injury',
        omnidroid: omnidroid[7], 
        terminated: false
    },
    {
        name: 'Mr. Incredible',
        image: mrIncredible,
        power: 'Superhuman strength capable of lifting weight in excess of 66 tons, invulnerability to high levels of physical injury',
        omnidroid: omnidroid[8], 
        terminated: true
    },
    {
        name: 'The Incredibles + Frozone',
        image: team,
        power: 'Teamwork makes the dream work ;)',
        omnidroid: omnidroid[9], 
        terminated: false
    },
];



module.exports = superheroes;
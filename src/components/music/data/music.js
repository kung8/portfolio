import AccidentallyInLove from "./Songs/AccidentallyInLove";
import Fearless from "./Songs/Fearless";
// import FragileHeart from "./Songs/FragileHeart";
// import HeroToMe from "./Songs/HeroToMe";
import HomecomingQueen from "./Songs/HomecomingQueen";
// import KeepOnKeepingOn from "./Songs/KeepOnKeepingOn";
import ProdigalSon from "./Songs/ProdigalSon";
import SearchingForYou from "./Songs/SearchingForYou";
import SparksFly from "./Songs/SparksFly";
// import Strong from "./Songs/Strong";
// import TheGame from "./Songs/TheGame";
import YouBelongWithMe from "./Songs/YouBelongWithMe";

const baseUrl = 'https://docs.google.com/uc?id='

const music = [
    // {
    //     id: 1,
    //     name: 'Keep On, Keeping On',
    //     artist: 'Kevin Ung',
    //     addedAt: '07/16/23',
    //     createdAt: '2017',
    //     time: '1:57',
    //     url: baseUrl + '1htoIJiGHzon5qEqNUTBhl9URCQDXpk5u',
    //     lyrics: KeepOnKeepingOn,
    // },
    {
        id: 2,
        name: 'Searching For You',
        artist: 'Kevin Ung',
        addedAt: '07/16/23',
        createdAt: '2017',
        time: '1:53',
        url: baseUrl + '1mDLkC2hj6FgNANtL9-dwvH12EzkE-5nx',
        lyrics: SearchingForYou,
    },
    // {
    //     id: 3,
    //     name: 'Fragile Heart',
    //     artist: 'Kevin Ung',
    //     addedAt: '07/16/23',
    //     createdAt: '2017',
    //     time: '3:12',
    //     url: baseUrl + '1piobuUmoL6PS2OVEf26jkSz56lbQziR3',
    //     lyrics: FragileHeart,
    // },
    // {
    //     id: 4,
    //     name: 'Strong',
    //     artist: 'Kevin Ung',
    //     addedAt: '07/16/23',
    //     createdAt: '2017',
    //     time: '1:43',
    //     url: baseUrl + '1u_3_tW1anTRgBGOABO9RhTzwSDGJZfOY',
    //     lyrics: Strong,
    // },
    // {
    //     id: 5,
    //     name: 'The Game',
    //     artist: 'Kevin Ung',
    //     addedAt: '07/16/23',
    //     createdAt: '2017',
    //     time: '3:52',
    //     url: baseUrl + '1uquwDj3iJCx3sLXcYR_iXZ4ddWajNETl',
    //     lyrics: TheGame,
    // },
    // {
    //     id: 6,
    //     name: 'Hero To Me',
    //     artist: 'Kevin Ung',
    //     addedAt: '07/16/23',
    //     createdAt: '2018',
    //     time: '2:16',
    //     url: baseUrl + '1iWKzcqV8OIpJPvgG716bt9pJjvsJtmAU',
    //     lyrics: HeroToMe,
    // },
    {
        id: 7,
        name: 'Prodigal Son',
        artist: 'Kevin Ung',
        addedAt: '07/16/23',
        createdAt: '2019',
        time: '3:28',
        url: baseUrl + '1DpeIRnIWUBgUl6mtgDR94xyibSptS6tH',
        lyrics: ProdigalSon,
    },
    {
        id: 8,
        name: 'Fearless (cover)',
        artist: 'Taylor Swift',
        addedAt: '08/8/23',
        createdAt: '2023',
        time: '2:57',
        url: baseUrl + '1Y0XkgpPLhYZL2C5FX6J5qRE7l-4u6fsR',
        lyrics: Fearless,
    },
    {
        id: 9,
        name: 'You Belong With Me (cover)',
        artist: 'Taylor Swift',
        addedAt: '08/11/23',
        createdAt: '2023',
        time: '4:02',
        url: baseUrl + '1mZbnOWwK78W3peiM7-7brASFSn66XehQ',
        lyrics: YouBelongWithMe,
    },
    {
        id: 10,
        name: 'Homecoming Queen (cover)',
        artist: 'Kelsea Ballerini',
        addedAt: '08/11/23',
        createdAt: '2023',
        time: '2:56',
        url: baseUrl + '1qQnHB8I3dgkmB-UoB36Zgc49YMLpQQfx',
        lyrics: HomecomingQueen,
    },
    {
        id: 11,
        name: 'Sparks Fly (cover)',
        artist: 'Taylor Swift',
        addedAt: '08/11/23',
        createdAt: '2023',
        time: '3:56',
        url: baseUrl + '1h5aP1nwf4l3FrrKgkYtCoxg8j-RIPVoA',
        lyrics: SparksFly,
    },
    {
        id: 12,
        name: 'Accidentally In Love (cover)',
        artist: 'Counting Crow',
        addedAt: '08/11/23',
        createdAt: '2023',
        time: '2:39',
        url: baseUrl + '1aqbn3poZXkhIpbk3pDzM2VlVQ0yuhMLq',
        lyrics: AccidentallyInLove,
    },
];

export const reversedSongs = music.reverse();
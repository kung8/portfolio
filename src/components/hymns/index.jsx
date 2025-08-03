import { cloneDeep } from 'lodash';
import { useGetData } from '../../hooks';
import { Table } from './Table';

export const Hymns = ({ history }) => {
    const { data: songs = [] } = useGetData('hymns');

    const formattedData = cloneDeep(songs).map(song => {
        // delete song.songNumber;
        // delete song.tags;
        // delete song.arrangers;
        // delete song.artists;
        // delete song.composers;
        // delete song.authors;
        return Object.values(song).map(value => ({ value })).filter(item => item.value);
    });

    const headings = cloneDeep(songs).map(song => Object.keys(song));

    // const formattedSong = songs.map(song => {
    //     delete song.assets;
    //     delete song.voicings;
    //     delete song.instrumentations;
    //     delete song.slug;
    //     delete song.bookSlug;
    //     delete song.musicalFeatures;
    //     delete song.recordingAvailable;
    //     delete song.sheetMusicAvailable;
    //     delete song.bookSectionTitle;

    //     // if (song.bookSectionTitle) {
    //     //     song.title = song.title + ' (' + song.bookSectionTitle + ')';
    //     //     delete song.bookSectionTitle;
    //     // } 
    //     const formatAttr = (attr) => {
    //         if (song[attr] && song[attr].length) {
    //             return song[attr].map(item => {    
    //                 if (typeof item === 'object' && item.hasOwnProperty('preferredName')) {
    //                     return item.preferredName;
    //                 }
    //                 return item;
    //             })
    //         }
    //         return song[attr];
    //     }
    //     song.authors = formatAttr('authors');
    //     song.composers = formatAttr('composers');
    //     song.artists = formatAttr('artists');
    //     song.arrangers = formatAttr('arrangers');
    //     return song;
    // });

    return (
        <div className='music page'>
            <div className="heading-container">
                <span className='back-btn' onClick={() => history.push('/')}>Back Home</span>
                <h1 className="music-heading">Hymns</h1>
            </div>
            <Table data={formattedData} headings={headings} />
            {/* <Cursor /> */}
        </div>
    )
}
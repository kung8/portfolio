import { useEffect } from 'react';

import closeBtn from '../../Assets/x.png';

export const LyricsModal = ({
    show,
    handleClose,
    selectedLyric,
}) => {
    const Lyrics = selectedLyric?.lyrics ?? null;

    useEffect(() => {
        if (show) {
            document.querySelector('.lyrics-modal').classList.remove('opened');
            document.querySelector('.lyrics-modal').classList.remove('closed');
            setTimeout(() => {
                document.querySelector('.lyrics-modal').classList.add('opened');
            }, 50);
        }
    }, [show]);

    useEffect(() => {
        setTimeout(() => {
            document.querySelector('.lyrics-container').scrollTo({
                top: 0,
                behavior: 'smooth',
            })
        }, 100);
    }, [selectedLyric])

    return (
        <div className="lyrics-modal">
            <div className='heading-container'>
                <h2>{selectedLyric?.name}</h2>
                <button className="close-btn">
                    <img src={closeBtn} alt="close" onClick={handleClose} />
                </button>
            </div>
            <div className="lyrics-container">
                {selectedLyric && selectedLyric.lyrics ? Lyrics() : null}
            </div>
        </div>
    )
}
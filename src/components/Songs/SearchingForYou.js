import React from 'react';

function SearchingForYou() {
    // const id = '1mDLkC2hj6FgNANtL9-dwvH12EzkE-5nx';
    // const song = 'https://docs.google.com/uc?id=' + id;
    // const download = 'https://drive.google.com/uc?export=download&id=' + id;
    return (
        <>
            <h4>Searching For You</h4>
            {/* <audio id="searching-for-you" className="audio-control" controls>
                <source src={song} type="audio/mp4" />
                <source src={song} type="audio/mp3" />
                <source src={song} type="audio/mpeg" />
                <source src={song} type="audio/m4a" />
                <p>Your browser does not support HTML5 audio, but you can download my music at <a href={download}>here</a></p>
            </audio> */}
            <div className="music-card">
                <p>
                    <strong>Intro:</strong> <span className="ind-chord">G</span>&nbsp;&nbsp;&nbsp;<span className="ind-chord">G/F<sup>#</sup></span>&nbsp;&nbsp;&nbsp;<span className="ind-chord">Cadd9</span>&nbsp;&nbsp;&nbsp;<span className="ind-chord">D</span>
                </p>
                <p>
                    <strong>Verse 1:</strong><br /><br />
                    <span className="p-rel">I'm<span className="p-abs beginning">G</span></span> still <span className="p-rel">searching<span className="p-abs beginning">G/F<sup>#</sup></span></span> for you<br /><br />
                    <span className="p-rel">Even<span className="p-abs beginning">Cadd9</span></span> if I'm <span className="p-rel">unsure<span className="p-abs beginning">D</span></span> what to do<br /><br />
                    <span className="p-rel">You<span className="p-abs beginning">G</span></span> keep my head up, <span className="p-rel">not<span className="p-abs beginning">G/F<sup>#</sup></span></span> giving in<br /><br />
                    <span className="p-rel">Looking<span className="p-abs beginning">Cadd9</span></span> at life by <span className="p-rel">its<span className="p-abs beginning">D</span></span> short wins<br /><br />
                    <span className="p-rel">I<span className="p-abs beginning">G</span></span> thought it'd work out <span className="p-rel">time<span className="p-abs beginning">G/F<sup>#</sup></span></span> and again<br /><br />
                    <span className="p-rel">Feelings<span className="p-abs beginning">Cadd9</span></span> unmeasured, <span className="p-rel">we're<span className="p-abs beginning">D</span></span> just friends<br /><br />
                    <span className="p-rel">Driven<span className="p-abs beginning">G</span></span> to learn from <span className="p-rel">all<span className="p-abs beginning">G/F<sup>#</sup></span></span> my mistakes<br /><br />
                    <span className="p-rel">Countless<span className="p-abs beginning">Cadd9</span></span> times I just <span className="p-rel">wanna<span className="p-abs beginning">D</span></span> say
                </p>
                <p>
                    <strong>Chorus:</strong><br /><br />
                    <span className="p-rel">I<span className="p-abs beginning">G</span></span> can change, <span className="p-rel">give<span className="p-abs beginning">G/F<sup>#</sup></span></span> me another <span className="p-rel">shot<span className="p-abs beginning">Cadd9</span></span><br /><br />
                    I'd give it all, <span className="p-rel">all<span className="p-abs beginning">D</span></span> I've got.<br /><br />
                    <span className="p-rel">All<span className="p-abs beginning">G</span></span> this regret <span className="p-rel">lingers<span className="p-abs beginning">G/F<sup>#</sup></span></span> there,<br /><br />
                    <span className="p-rel">Of<span className="p-abs beginning">Cadd9</span></span> life without you <span className="p-rel">here.<span className="p-abs beginning">D</span></span>
                </p>
                <p>
                    <strong>Interlude:</strong> <span className="ind-chord">G</span>&nbsp;&nbsp;&nbsp;<span className="ind-chord">G/F<sup>#</sup></span>&nbsp;&nbsp;&nbsp;<span className="ind-chord">Cadd9</span>&nbsp;&nbsp;&nbsp;<span className="ind-chord">D</span>
                </p>
                <p>
                    <strong>Verse 2:</strong><br /><br />
                    <span className="p-rel">It<span className="p-abs beginning">G</span></span> comes and goes, <span className="p-rel">thinking<span className="p-abs beginning">G/F<sup>#</sup></span></span> of you.<br /><br />
                    <span className="p-rel">My<span className="p-abs beginning">Cadd9</span></span> mind fades, <span className="p-rel">I<span className="p-abs beginning">D</span></span> haven't a clue<br /><br />
                    <span className="p-rel">Struggle<span className="p-abs beginning">G</span></span> to keep my <span className="p-rel">heart<span className="p-abs beginning">G/F<sup>#</sup></span></span> from the burn<br /><br />
                    <span className="p-rel">I<span className="p-abs beginning">Cadd9</span></span> thought I would have <span className="p-rel">learned<span className="p-abs beginning">D</span></span>
                </p>
                <p>
                    <strong>(Chorus x 2)</strong>
                </p>
                <p>
                    <strong>Outro:</strong> <span className="ind-chord">G</span> (single strum)
                </p>
            </div>
        </>
    )
}

export default SearchingForYou;
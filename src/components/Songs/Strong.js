import React from 'react';

function Strong() {
    const id = '1u_3_tW1anTRgBGOABO9RhTzwSDGJZfOY';
    const song = 'https://docs.google.com/uc?id=' + id;
    const download = 'https://drive.google.com/uc?export=download&id=' + id;
    return (
        <>
            <h4>Strong</h4>
            <audio id="strong" className="audio-control" controls>
                <source src={song} type="audio/mp4" />
                <source src={song} type="audio/mp3" />
                <source src={song} type="audio/mpeg" />
                <source src={song} type="audio/m4a" />
                <p>Your browser does not support HTML5 audio, but you can download my music at <a href={download}>here</a></p>
            </audio>
            <div className="music-card">
                <p>
                    <strong>Intro:</strong> <span className="ind-chord">G</span>&nbsp;&nbsp;&nbsp;<span className="ind-chord">C</span>&nbsp;&nbsp;&nbsp;<span className="ind-chord">Am</span>&nbsp;&nbsp;&nbsp;<span className="ind-chord">D7</span>
                </p>
                <p>
                    <strong>Verse 1:</strong><br /><br />
                    <span className="p-rel">We<span className="p-abs beginning">G</span></span> are all good <span className="p-rel">people<span className="p-abs beginning">C</span></span><br /><br />
                    <span className="p-rel">No<span className="p-abs beginning">Am</span></span> matter what they <span className="p-rel">say<span className="p-abs beginning">D7</span></span><br /><br />
                    <span className="p-rel">Each<span className="p-abs beginning">G</span></span> has a <span className="p-rel">light<span className="p-abs beginning">C</span></span> to show<br /><br />
                    <span className="p-rel">To<span className="p-abs beginning">Am</span></span> brighten each new <span className="p-rel">day<span className="p-abs beginning">D7</span></span><br /><br />
                    <span className="p-rel">Don't<span className="p-abs beginning">G</span></span> listen to those <span className="p-rel">lies<span className="p-abs beginning">Em</span></span><br /><br />
                    <span className="p-rel">That<span className="p-abs beginning">Am</span></span> say you're not <span className="p-rel">enough<span className="p-abs beginning">D7</span></span><br /><br />
                    <span className="p-rel">As<span className="p-abs beginning">G</span></span> long as you <span className="p-rel">look<span className="p-abs beginning">C</span></span> inside<br /><br />
                    <span className="p-rel">To<span className="p-abs beginning">Am</span></span> see you're strong and <span className="p-rel">tough<span className="p-abs beginning">G</span></span>
                </p>
                <p>
                    <strong>Chorus:</strong><br /><br />
                    <span className="p-rel">You<span className="p-abs beginning">G</span></span> are <span className="p-rel">strong<span className="p-abs beginning">C</span></span><br /><br />
                    <span className="p-rel">And<span className="p-abs beginning">Am</span></span> can be <span className="p-rel">brave<span className="p-abs beginning">D7</span></span><br /><br />
                    <span className="p-rel">Others<span className="p-abs beginning">G</span></span> have <span className="p-rel">led<span className="p-abs beginning">C</span></span> the way<br /><br />
                    <span className="p-rel">Think<span className="p-abs beginning">Am</span></span> of paths they <span className="p-rel">paved<span className="p-abs beginning">D7</span></span><br /><br />
                    <span className="p-rel">Take<span className="p-abs beginning">G</span></span> cour<span className="p-rel">age<span className="p-abs beginning">C</span></span> <span className="p-rel">to<span className="p-abs beginning">Am</span></span> stand <span className="p-rel">tall<span className="p-abs beginning">D7</span></span><br /><br />
                    <span className="p-rel">No<span className="p-abs beginning">G</span></span> matter <span className="p-rel">what<span className="p-abs beginning">C</span></span> the price<br /><br />
                    <span className="p-rel">Strong<span className="p-abs beginning">Am</span></span> is <span className="p-rel">worth<span className="p-abs beginning">D7</span></span> it <span className="p-rel">all<span className="p-abs beginning">G</span></span>
                </p>
                <p>
                    <strong>Verse 2:</strong><br /><br />
                    <span className="p-rel">In<span className="p-abs beginning">G</span></span> mirrors they reflect <span className="p-rel">ourselves<span className="p-abs beginning">C</span></span><br /><br />
                    <span className="p-rel">Worse<span className="p-abs beginning">Am</span></span> critics of us <span className="p-rel">all<span className="p-abs beginning">D7</span></span><br /><br />
                    <span className="p-rel">Lie<span className="p-abs beginning">G</span></span> piercing, <span className="p-rel">binding<span className="p-abs beginning">C</span></span> us<br /><br />
                    <span className="p-rel">Our<span className="p-abs beginning">Am</span></span> confidence will <span className="p-rel">fall<span className="p-abs beginning">D7</span></span><br /><br />
                    <span className="p-rel">Stifling<span className="p-abs beginning">G</span></span> potential <span className="p-rel">growth<span className="p-abs beginning">C</span></span><br /><br />
                    <span className="p-rel">If<span className="p-abs beginning">Am</span></span> these thoughts are kept <span className="p-rel">around<span className="p-abs beginning">D7</span></span><br /><br />
                    <span className="p-rel">The<span className="p-abs beginning">G</span></span> truth will <span className="p-rel">sets<span className="p-abs beginning">C</span></span> us free<br /><br />
                    <span className="p-rel">It's<span className="p-abs beginning">Am</span></span> stronger than it <span className="p-rel">sounds<span className="p-abs beginning">G</span></span>
                </p>
                <p>
                    <strong>(Chorus)</strong>
                </p>
            </div>
        </>
    )
}

export default Strong;
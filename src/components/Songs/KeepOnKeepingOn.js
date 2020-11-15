import React from 'react';

function KeepOnKeepingOn() {
    const song = 'https://docs.google.com/uc?id=1htoIJiGHzon5qEqNUTBhl9URCQDXpk5u';
    return (
        <>
            <h4>Keep On Keeping On</h4>
            <audio id="keep-on-keeping-on" className="audio-control" controls>
                <source src={song} type="audio/mp3"/>
            </audio>
            <div className="music-card">
                <p>
                    <strong>Intro:</strong> <span className="ind-chord">G</span>&nbsp;&nbsp;&nbsp;<span className="ind-chord">G/F<sup>#</sup></span>&nbsp;&nbsp;&nbsp;<span className="ind-chord">Em</span>&nbsp;&nbsp;&nbsp;<span className="ind-chord">C</span>
                </p>
                <p>
                    <strong>Verse 1:</strong><br /><br />
                    If <span className="p-rel">you're<span className="p-abs beginning">G</span></span> lost and <span className="p-rel">afraid<span className="p-abs beginning">G/F<sup>#</sup></span></span><br /><br />
                    You've been <span className="p-rel">pushed<span className="p-abs beginning">Em</span></span>  <span className="p-rel">away<span className="p-abs beginning">C</span></span><br /><br />
                    <span className="p-rel">Too<span className="p-abs beginning">G</span></span> many <span className="p-rel">times<span className="p-abs beginning">G/F<sup>#</sup></span></span> <span className="p-rel">before.<span className="p-abs beginning">C</span></span><br /><br />
                    I know <span className="p-rel">life<span className="p-abs beginning">G</span></span> can get <span className="p-rel">hard<span className="p-abs beginning">G/F<sup>#</sup></span></span><br /><br />
                    And the <span className="p-rel">emotional<span className="p-abs beginning">Em</span></span> <span className="p-rel">scars<span className="p-abs beginning">C</span></span><br /><br />
                    <span className="p-rel">Don't<span className="p-abs beginning">G</span></span> get me <span className="p-rel">started<span className="p-abs beginning">G/F<sup>#</sup></span></span> on <span className="p-rel">it.<span className="p-abs beginning">C</span></span>
                </p>
                <p>
                    <strong>Chorus:</strong><br /><br />
                    <span className="p-rel">Just<span className="p-abs beginning">G</span></span> keep smiling <span className="p-rel">(eh,<span className="p-abs beginning">C</span></span> eh)<br /><br />
                    It'll <span className="p-rel">get<span className="p-abs beginning">Am</span></span> better <span className="p-rel">someday.<span className="p-abs beginning">Dm</span></span><br /><br />            <span className="p-rel">Keep<span className="p-abs beginning">G</span></span> telling <span className="p-rel">yourself<span className="p-abs beginning">C</span></span><br /><br />
                    It'll <span className="p-rel">work<span className="p-abs beginning">Am</span></span> itself <span className="p-rel">out,<span className="p-abs beginning">Dm</span></span> <span className="p-rel">somehow.<span className="p-abs beginning">G</span></span>
                </p>
                <p>
                    <strong>Interlude:</strong> <span className="ind-chord">G</span>&nbsp;&nbsp;&nbsp;<span className="ind-chord">G/F<sup>#</sup></span>&nbsp;&nbsp;&nbsp;<span className="ind-chord">Em</span>&nbsp;&nbsp;&nbsp;<span className="ind-chord">C</span>
                </p>
                <p>
                    <strong>Verse 2:</strong><br /><br />
                    If you <span className="p-rel">feel<span className="p-abs beginning">G</span></span> all <span className="p-rel">alone<span className="p-abs beginning">G/F<sup>#</sup></span></span><br /><br />
                    Without a <span className="p-rel">friend<span className="p-abs beginning">Em</span></span> to call your <span className="p-rel">own,<span className="p-abs beginning">C</span></span><br /><br />
                    <span className="p-rel">Know<span className="p-abs beginning">G</span></span> that <span className="p-rel">I'll<span className="p-abs beginning">G/F<sup>#</sup></span></span> be <span className="p-rel">there.<span className="p-abs beginning">C</span></span><br /><br />
                    The <span className="p-rel">pain<span className="p-abs beginning">G</span></span> when <span className="p-rel">hearts<span className="p-abs beginning">G/F<sup>#</sup></span></span> break<br /><br />
                    The <span className="p-rel">chill<span className="p-abs beginning">Em</span></span> from our <span className="p-rel">mistakes<span className="p-abs beginning">C</span></span><br /><br />
                    <span className="p-rel">Memories<span className="p-abs beginning">G</span></span> that <span className="p-rel">last<span className="p-abs beginning">G/F<sup>#</sup></span></span> a <span className="p-rel">while.<span className="p-abs beginning">C</span></span>
                </p>
                <p>
                    <strong>(Chorus)</strong>
                </p>
                <p>
                    <strong>Bridge:</strong><br /><br />
                    <span className="p-rel">Even<span className="p-abs beginning">C</span></span> when you <span className="p-rel">feel<span className="p-abs beginning">Am7</span></span> this <span className="p-rel">way.<span className="p-abs beginning">G</span></span><br /><br />
                    <span className="p-rel">You<span className="p-abs beginning">C</span></span> don't have to <span className="p-rel">let<span className="p-abs beginning">Am7</span></span> it <span className="p-rel">stay.<span className="p-abs beginning">Dm</span></span><br /><br />
                    <span className="p-rel">We<span className="p-abs beginning">C</span></span> can <span className="p-rel">overcome<span className="p-abs beginning">Am7</span></span> the <span className="p-rel">pain.<span className="p-abs beginning">Dm</span></span><br /><br />
                    <span className="p-rel">We<span className="p-abs beginning">C</span></span> are people <span className="p-rel">prone<span className="p-abs beginning">Am7</span></span> to <span className="p-rel">change.<span className="p-abs beginning">G</span></span>
                </p>
                <p>
                    <strong>(Chorus)</strong>
                </p>
            </div>
        </>
    )
}

export default KeepOnKeepingOn
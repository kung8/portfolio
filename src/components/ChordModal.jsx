function ChordModal(props) {
    return (
        <div className="chords-modal">
            <button className="close-modal-btn p-abs" onClick={() => props.closeModal()}>X</button>
            {determineChordDisplay(props.selectedChord)}
        </div>
    )
}

export default ChordModal;

function determineChordDisplay(chordName) {
    let chords = {
        'Am': [0, 1, 2, 2, 0, 'x'],
        'Am7': [0, 1, 0, 2, 0, 'x'],
        'C': [0, 1, 0, 2, 3, 'x'],
        'Cadd9': [3, 3, 0, 2, 3, 'x'],
        'D': [2, 3, 2, 0, 'x', 'x'],
        'D7': [2, 1, 2, 0, 'x', 'x'],
        'Dm': [1, 3, 2, 0, 'x', 'x'],
        'G': [3, 0, 0, 0, 2, 3],
        'D/F#': [0, 3, 0, 4, 5, 0],
        'F': [1, 1, 2, 3, 3, 1],
        'Em': [0, 0, 0, 2, 2, 0],
        'G/F#': [3, 3, 0, 0, 0, 2]
    }

    let foundChord = chords[chordName];
    let [first, second, third, fourth, fifth, sixth] = foundChord;
    let filled = <div className="filled"></div>
    let closed = 'X';
    let opened = <div className="opened"></div>
    let fretOne;
    let fretTwo;
    let fretThree;
    let fretFour;

    if (first > 4 || second > 4 || third > 4 || fourth > 4 || fifth > 4 || sixth > 4) {
        let nonZeroNumbers = foundChord.filter(item => Number.isInteger(item) && item > 0);
        fretFour = Math.max(...nonZeroNumbers);
        fretThree = fretFour - 1;
        fretTwo = fretThree - 1;
        fretOne = fretTwo - 1;
        return (
            <div className="chord-diagram flex-col align-ctr">
                <h4 className="chord-name">{chordName}</h4>
                <div className="fret-board">
                    <div className="string-1 flex p-rel">
                        <div className="outside p-abs">{first === 'x' ? closed : first === 0 ? opened : null}</div>
                        <div className="first">{first === fretOne && filled}</div>
                        <div className="second">{first === fretTwo && filled}</div>
                        <div className="third">{first === fretThree && filled}</div>
                        <div className="fourth">{first === fretFour && filled}</div>
                    </div>
                    <div className="string-2 flex p-rel">
                        <div className="outside p-abs">{second === 'x' ? closed : second === 0 ? opened : null}</div>
                        <div className="first">{second === fretOne && filled}</div>
                        <div className="second">{second === fretTwo && filled}</div>
                        <div className="third">{second === fretThree && filled}</div>
                        <div className="fourth">{second === fretFour && filled}</div>
                    </div>
                    <div className="string-3 flex p-rel">
                        <div className="outside p-abs">{third === 'x' ? closed : third === 0 ? opened : null}</div>
                        <div className="first">{third === fretOne && filled}</div>
                        <div className="second">{third === fretTwo && filled}</div>
                        <div className="third">{third === fretThree && filled}</div>
                        <div className="fourth">{third === fretFour && filled}</div>
                    </div>
                    <div className="string-4 flex p-rel">
                        <div className="outside p-abs">{fourth === 'x' ? closed : fourth === 0 ? opened : null}</div>
                        <div className="first">{fourth === fretOne && filled}</div>
                        <div className="second">{fourth === fretTwo && filled}</div>
                        <div className="third">{fourth === fretThree && filled}</div>
                        <div className="fourth">{fourth === fretFour && filled}</div>
                    </div>
                    <div className="string-5 flex p-rel">
                        <div className="outside p-abs">{fifth === 'x' ? closed : fifth === 0 ? opened : null}</div>
                        <div className="first">{fifth === fretOne && filled}</div>
                        <div className="second">{fifth === fretTwo && filled}</div>
                        <div className="third">{fifth === fretThree && filled}</div>
                        <div className="fourth">{fifth === fretFour && filled}</div>
                    </div>
                    <div className="string-6 flex p-rel">
                        <div className="outside p-abs">{sixth === 'x' ? closed : sixth === 0 ? opened : null}</div>
                        <div className="first p-rel">{sixth === fretOne && filled}{fretOne &&
                            <div className="fret-num p-abs">{fretOne}</div>}
                        </div>
                        <div className="second p-rel">{sixth === fretTwo && filled}{fretTwo &&
                            <div className="fret-num p-abs">{fretTwo}</div>}
                        </div>
                        <div className="third p-rel">{sixth === fretThree && filled}{fretThree &&
                            <div className="fret-num p-abs">{fretThree}</div>}
                        </div>
                        <div className="fourth p-rel">{sixth === fretFour && filled}{fretFour &&
                            <div className="fret-num p-abs">{fretFour}</div>}
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="chord-diagram flex-col align-ctr">
                <h4 className="chord-name">{chordName}</h4>
                <div className="fret-board">
                    <div className="string-1 flex p-rel">
                        <div className="outside p-abs">{first === 'x' ? closed : first === 0 ? opened : null}</div>
                        <div className="first">{(first === fretOne || first === 1) && filled}</div>
                        <div className="second">{first === 2 && filled}</div>
                        <div className="third">{first === 3 && filled}</div>
                        <div className="fourth">{first === 4 && filled}</div>
                    </div>
                    <div className="string-2 flex p-rel">
                        <div className="outside p-abs">{second === 'x' ? closed : second === 0 ? opened : null}</div>
                        <div className="first">{second === 1 && filled}</div>
                        <div className="second">{second === 2 && filled}</div>
                        <div className="third">{second === 3 && filled}</div>
                        <div className="fourth">{second === 4 && filled}</div>
                    </div>
                    <div className="string-3 flex p-rel">
                        <div className="outside p-abs">{third === 'x' ? closed : third === 0 ? opened : null}</div>
                        <div className="first">{third === 1 && filled}</div>
                        <div className="second">{third === 2 && filled}</div>
                        <div className="third">{third === 3 && filled}</div>
                        <div className="fourth">{third === 4 && filled}</div>
                    </div>
                    <div className="string-4 flex p-rel">
                        <div className="outside p-abs">{fourth === 'x' ? closed : fourth === 0 ? opened : null}</div>
                        <div className="first">{fourth === 1 && filled}</div>
                        <div className="second">{fourth === 2 && filled}</div>
                        <div className="third">{fourth === 3 && filled}</div>
                        <div className="fourth">{fourth === 4 && filled}</div>
                    </div>
                    <div className="string-5 flex p-rel">
                        <div className="outside p-abs">{fifth === 'x' ? closed : fifth === 0 ? opened : null}</div>
                        <div className="first">{fifth === 1 && filled}</div>
                        <div className="second">{fifth === 2 && filled}</div>
                        <div className="third">{fifth === 3 && filled}</div>
                        <div className="fourth">{fifth === 4 && filled}</div>
                    </div>
                    <div className="string-6 flex p-rel">
                        <div className="outside p-abs">{sixth === 'x' ? closed : sixth === 0 ? opened : null}</div>
                        <div className="first p-rel">{sixth === 1 && filled}
                            <div className="fret-num p-abs">1</div>
                        </div>
                        <div className="second p-rel">{sixth === 2 && filled}
                            <div className="fret-num p-abs">2</div>
                        </div>
                        <div className="third p-rel">{sixth === 3 && filled}
                            <div className="fret-num p-abs">3</div>
                        </div>
                        <div className="fourth p-rel">{sixth === 4 && filled}
                            <div className="fret-num p-abs">4</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
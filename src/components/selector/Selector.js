import React, { useEffect, useState } from "react";
import deleteIcon from '../../Assets/close.png';
import Wheel from './Wheel';
import { times } from './time';
import { Slide, ToastContainer, toast } from 'react-toastify';

const convertStringToObject = (str) => str.split('&').reduce((acc, item) => {
    const index = item.indexOf('=');
    const key = item.slice(0, index);
    const value = item.slice(index + 1);
    return { ...acc, [key]: value }
}, {});

const resort = (list) => {
    const copy = [...list];
    for (var i = copy.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = copy[i];
        copy[i] = copy[j];
        copy[j] = temp;
    }
    return copy;
}

const getRandomTimes = (list, start, end) => {
    return list.map(_item => {
        const number = Math.floor(Math.random() * (end - start + 1)) + start;
        return times.find(time => time.number === number).time;
    });
}

const Selector = ({ history, location }) => {
    const { type } = convertStringToObject(location?.search.replace('?', ''));
    let list1 = ['Add to Me'];
    if (type === 'work') {
        list1 = resort(['Alo', 'Annalisa', 'Ben', 'Bob', 'Curtis', 'Ethan', 'Kevin', 'Kylir', 'Richard']);
    } else if (type === 'food') {
        list1 = ['Panda', 'CFA', 'McD', 'MoBettahs'];
    }

    const [items, setItems] = useState(list1);
    const [item, setItem] = useState('');
    const [isRevealed, setIsRevealed] = useState(false);
    const decider = ['Choose Own Time', 'Another Engineer Chooses Time', 'I Select Time'];
    const [engineers, setEngineers] = useState([]);
    const [others, setOthers] = useState([]);
    const [startingRange, setStartingRange] = useState(40);
    const [endingRange, setEndingRange] = useState(70);
    const [timesArr, setTimesArr] = useState([]);
    const [selected, setSelected] = useState(undefined);
    const [isReset, setIsReset] = useState(false);

    useEffect(() => {
        let list = ['Add to Me'];
        if (type === 'work') {
            list = resort(['Alo', 'Annalisa', 'Ben', 'Bob', 'Curtis', 'Ethan', 'Kevin', 'Kylir', 'Richard']);
        } else if (type === 'food') {
            list = ['Panda', 'CFA', 'McD', 'MoBettahs'];
        }
        setItems(list);
    }, [type])

    const handleAdd = () => {
        if (items.includes(item)) {
            toast.dismiss();
            toast('This item already exists.', { className: 'error' })
            return;
        }
        if (item && !items.includes(item)) {
            const newItems = [...items];
            newItems.push(item);
            setItems(newItems);
            setItem('');
            toast.dismiss();
            toast('Item added successfully!', { className: 'success' })
        }
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleAdd();
        }
    }

    const handleDelete = (index) => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
    }

    const handleOthers = () => {
        const others = resort(items);
        const checkDifferent = others.every((item, index) => item !== items[index]);
        if (checkDifferent) {
            setOthers(others);
        } else {
            handleOthers();
        }
    }

    const handleUpdateClick = () => {
        setIsRevealed(true);
        if (!isRevealed) {
            setEngineers(items);
            handleOthers();
            const times = getRandomTimes(items, startingRange, endingRange);
            setTimesArr(times);
            setTimeout(() => {
                if (selected !== 'Choose Own Time') {
                    const bottomSectionPosition = document.querySelector('.bottom-section').getBoundingClientRect().bottom;
                    window.scrollTo({
                        top: bottomSectionPosition,
                        behavior: 'smooth',
                    })
                }
            }, 500);
        }
    }

    const handleStartChange = (value) => {
        if (value < endingRange) {
            setStartingRange(Number(value));
        }
    }

    const handleEndChange = (value) => {
        if (startingRange < value) {
            setEndingRange(Number(value));
        }
    }

    const handleResort = () => {
        const newList = resort(list1);
        setItems(newList);
    }

    const resetWork = () => {
        handleOthers();
        setSelected(undefined);
        setIsRevealed(false);
        setIsReset(true);
    }

    return (
        <div className="selector page">
            <div className="heading-container">
                <span className='back-btn' onClick={() => history.push('/')}>Back Home</span>
                <h1 className="heading">Selector</h1>
            </div>
            {(!type || type !== 'work') && (
                <>
                    <div className="items-and-rotator">
                        <div className="item-list-container">
                            {type === 'work' && <span className="list-label">Update Attendance:</span>}
                            <div className="input-and-button-container">
                                <input type="text" value={item} onChange={(e) => setItem(e.target.value)} onKeyDown={e => handleKeyPress(e)} />
                                <button onClick={handleAdd}>Add</button>
                            </div>
                            <ul className="items-container">
                                {items.map((selection, index) => (
                                    <div key={index} className="item-container" onClick={() => handleDelete(index)}>
                                        <li>{selection}</li>
                                        <img src={deleteIcon} alt="delete" />
                                    </div>
                                ))}
                            </ul>
                        </div>
                        <div className="rotator-container">
                            <Wheel items={items} onSelect={setSelected} disabled={selected} isReset={isReset} setIsReset={setIsReset} />
                        </div>
                    </div>
                    {selected && <button className="reset-btn" onClick={resetWork}>RESET</button>}
                </>
            )}
            {type === 'work' && (
                <>
                    <div className="items-and-rotator">
                        <div className="item-list-container">
                            {type === 'work' && <span className="list-label">Update Attendance:</span>}
                            <div className="input-and-button-container">
                                <input type="text" value={item} onChange={(e) => setItem(e.target.value)} onKeyDown={e => handleKeyPress(e)} />
                                <button onClick={handleAdd}>Add</button>
                            </div>
                            <ul className="items-container">
                                {items.map((selection, index) => (
                                    <div key={index} className="item-container" onClick={() => handleDelete(index)}>
                                        <li>{selection}</li>
                                        <img src={deleteIcon} alt="delete" />
                                    </div>
                                ))}
                            </ul>
                            <button className={`resort-btn ${isRevealed ? 'disabled' : undefined}`} disabled={isRevealed} onClick={handleResort}>RESORT</button>
                        </div>
                        <div className="rotator-container">
                            <Wheel items={decider} onSelect={setSelected} disabled={selected} isReset={isReset} setIsReset={setIsReset} />
                        </div>
                    </div>

                    <div className="time-ranges-container">
                        <div className="time-range-container">
                            <span className="range-label">Starting Range: </span>
                            <select name="start" id="starting-time" value={startingRange} onChange={(e) => handleStartChange(e.target.value)}>
                                {times.map(time => <option key={time.number} value={time.number}>{time.time}</option>)}
                            </select>
                        </div>
                        <div className="time-range-container">
                            <span className="range-label">Ending Range: </span>
                            <select name="end" id="ending-time" value={endingRange} onChange={(e) => handleEndChange(e.target.value)}>
                                {times.map(time => <option key={time.number} value={time.number}>{time.time}</option>)}
                            </select>
                        </div>
                    </div>

                    <div className={`btn-container ${selected !== 'Choose Own Time' && isRevealed ? 'space-between' : undefined}`}>
                        {selected && selected !== 'Choose Own Time' && <button onClick={handleUpdateClick} disabled={isRevealed} className={`reveal-btn ${isRevealed ? 'disabled' : undefined}`}>REVEAL</button>}
                        {((selected && selected !== 'Choose Own Time' && isRevealed) || (selected && selected === 'Choose Own Time')) && <button className="reset-btn" onClick={resetWork}>RESET</button>}
                    </div>

                    {isRevealed &&
                        <div className="items-and-rotator bottom-section">
                            <div className="decider-container">
                                {(selected === 'Another Engineer Chooses Time' || selected === 'I Select Time') && (
                                    <div className="item-list-container">
                                        <span className="list-label">Engineer:</span>
                                        <ul className="items-container">
                                            {engineers.map((selection, index) => (
                                                <div key={index} className="item-container">
                                                    <li className="list-item">{selection}</li>
                                                </div>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {selected === 'Another Engineer Chooses Time' && (
                                    <div className="item-list-container">
                                        <span className="list-label">Chosen By:</span>
                                        <ul className="items-container">
                                            {others.map((selection, index) => (
                                                <div key={index} className="item-container">
                                                    <li className="list-item">{selection}</li>
                                                </div>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {selected === 'I Select Time' && (
                                    <div className="item-list-container">
                                        <span className="list-label">Assigned Time:</span>
                                        <ul className="items-container">
                                            {timesArr.map((selection, index) => (
                                                <div key={index} className="item-container">
                                                    <li className="list-item">{selection}</li>
                                                </div>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    }
                </>
            )}
            <ToastContainer
                position="top-right"
                hideProgressBar={true}
                closeOnClick={true}
                autoClose={1500}
                transition={Slide}
                draggable={true}
                draggablePercent={80}
            />
        </div>
    )
}

export default Selector;
const interval = 10;

const hourRatio = 1000 * 60 * 60 / interval;
const minuteRatio = 1000 * 60 / interval;
const secondRatio = 1000 / interval;

export const formatTime = (time) => {
    const hours = Math.floor(time / hourRatio);
    let remaining = time - (hours * hourRatio);
    const minutes = Math.floor(remaining / minuteRatio);
    remaining = remaining - (minutes * minuteRatio);
    const seconds = Math.floor(remaining / secondRatio);
    remaining = remaining - (seconds * secondRatio);
    const milliseconds = Math.floor(remaining);

    return hours + ':' + minutes.toString().padStart(2, "0") + ':' +
        seconds.toString().padStart(2, "0") + ':' +
        milliseconds.toString().padStart(2, "0");
}

export const formatNumber = ({ hours, minutes, seconds }) => {
    let number = hours * hourRatio + minutes * minuteRatio + seconds * secondRatio;
    return number;
}


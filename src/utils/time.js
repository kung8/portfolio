export const convertNumberToTime = (num) => {
    if (num === 0) return '0:00';
    const minutes = Math.floor(num / 60);
    const remaining = Math.floor(num - (minutes * 60));
    const seconds = remaining.toFixed(0);
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}

export const convertTimeToNumber = (time) => {
    if (!time) return 0;
    const [minutes, seconds] = time.split(':');
    return parseInt(minutes) * 60 + parseInt(seconds);
}
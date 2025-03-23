export const formatTime = ({ amount, unit }) => {
    if (!amount) return null;

    const formattedUnit = unit.s;

    if (formattedUnit === 'h') {
        // whole hours only
        if (amount % 1 === 0) return `${amount} h`;
        // hours and partial minutes
        const hours = Math.floor(amount);
        const minutes = Math.round((amount - hours) * 60);
        return `${hours} h ${minutes} m`;
    }
    
    if (formattedUnit === 'm') {
        const hours = Math.floor(amount / 60);
        const minutes = amount % 60;
        // whole minutes only
        if (hours === 0) return `${minutes} m`;
        // whole hours only
        if (minutes === 0) return `${hours} h`;
        // hours and partial minutes
        return `${hours} h ${minutes} m`;
    }

    return `${amount} ${formattedUnit}`;
}
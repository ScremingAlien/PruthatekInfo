export function timeAgo(timestamp) {
    const seconds = Math.floor((Date.now() - timestamp) / 1000);

    const intervals = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1
    };

    for (let unit in intervals) {
        const interval = Math.floor(seconds / intervals[unit]);
        if (interval >= 1) {
            return `${interval} ${unit}${interval !== 1 ? 's' : ''} ago`;
        }
    }

    return "just now";
}



 
// Example usage:
export function removeNbsp(str) {
    return str.replace(/&nbsp;/g, '');
}

// isWeekday.js
function isWeekday(day) {
    const weekendDays = ['Saturday', 'Sunday'];
    return !weekendDays.includes(day);
}

export default isWeekday;

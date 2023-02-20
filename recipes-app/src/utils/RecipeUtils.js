const getTimeString = (timeValueObject) => {
    const hours = `${timeValueObject.hours}${timeValueObject.hours === 1 ? "hr" : "hrs"}`
    const minutes = `${timeValueObject.minutes}${timeValueObject.minutes === 1 ? "min" : "mins"}`
    return `${timeValueObject.hours === 0 ? "" : hours} ${timeValueObject.minutes === 0 ? "" : minutes}`
}

const isTimeZero = (timeValueObject) => {
    return (timeValueObject.hours === 0 && timeValueObject.minutes === 0)
}


export default {
    getTimeString,
    isTimeZero
}
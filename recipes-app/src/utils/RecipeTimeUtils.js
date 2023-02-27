export const getTimeString = (timeValueObject) => {
    const hours = getStringFromValues(timeValueObject.hours, "hr")
    const minutes = getStringFromValues(timeValueObject.minutes, "min")
    return `${timeValueObject.hours === 0 ? "" : hours} ${timeValueObject.minutes === 0 ? "" : minutes}`
}

const getStringFromValues = (timeValue, timeUnit) => {
    return `${timeValue}${timeUnit + getPluralOf(timeValue)}`;
}

const getPluralOf = (timeValue) => {
    return timeValue !== 1 ? "s" : "";
}

export const isTimeZero = (timeValueObject) => {
    return (timeValueObject.hours === 0 && timeValueObject.minutes === 0)
}

export const renderTimings = (timeValueObject, type) => {
    return (
        <div className="col-6">
            <p className="col-12 timing">{type} time:</p>
            <p className="col-12 timing">{getTimeString(timeValueObject)}</p>
        </div>
    )
}
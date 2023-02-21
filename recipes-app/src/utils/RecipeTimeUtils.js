export const getTimeString = (timeValueObject) => {
    const hours = `${timeValueObject.hours}${timeValueObject.hours === 1 ? "hr" : "hrs"}`
    const minutes = `${timeValueObject.minutes}${timeValueObject.minutes === 1 ? "min" : "mins"}`
    return `${timeValueObject.hours === 0 ? "" : hours} ${timeValueObject.minutes === 0 ? "" : minutes}`
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
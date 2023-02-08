import React from 'react'

const RecipeTimes = ({ data }) => {

    const { recipeTimings } = data;

    const renderTime = (timeValueObject, type) => {

        const hours = `${timeValueObject.hours}${timeValueObject.hours === 1 ? "hr" : "hrs"}`
        const minutes = `${timeValueObject.minutes}${timeValueObject.minutes === 1 ? "min" : "mins"}`
        const timeString = `${timeValueObject.hours === 0 ? "" : hours} ${timeValueObject.minutes === 0 ? "" : minutes}`

        return (
            <p>{type} time: {timeString}</p>
        )
    }

    return (
        <div className="timings-section">
            {renderTime(recipeTimings.prepTime, "Prep")}
            {renderTime(recipeTimings.createTime, "Create")}
        </div>
    )
}
export default RecipeTimes;
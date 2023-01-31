import React from 'react'

const RecipePage = () => {
    return (
        <>
            <h1>Example Recipe Layout</h1>
            <h2>Title of Recipe</h2>
            <p>-------------------</p>
            <div>
                <div className="image-div">
                    <img></img>
                </div>
                <div className="ingredient-list-div">
                    <p>400g Plain White Flour</p>
                </div>
                <div className="other-info-div">
                    <p>Prep time: 10 mins</p>
                    <p>Cook time: 20 mins</p>
                </div>
                <div className="instructions-div">
                    <p>Step 1: Pre-heat the oven to...</p>
                </div>
            </div>
        </>
    )
}
export default RecipePage;
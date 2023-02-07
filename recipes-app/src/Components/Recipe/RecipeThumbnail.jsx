// ToDo -> will display a brief summary of the recipe (image, title, prep/cook time) in a thumbnail type layout

import React from 'react'

const RecipeThumbnail = (data) => {
    const { recipe } = data;

    return (
        <div>
            <img></img>
            <h3></h3>
            <div>
                {/* render the prep and cook time on one line */}
                <span></span>
                <span></span>
            </div>
        </div>
    )
}
export default RecipeThumbnail;

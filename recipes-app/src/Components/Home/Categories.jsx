// Will render category options/buttons which the user can select to filter/view recipes based on the category selected

import React from 'react'

const Categories = () => {

    // ToDo: this needs amending - will send the value of category back through the props, back up to Main
    const onClickCategory = (category) => {
        console.log("on click was clicked")
        console.log(category)
    }

    return (
        <div className="mt-3 category row">
            <div className="category-button col-2" onClick={() => onClickCategory("")}>
                <p>All</p>
            </div>
            <div className="category-button col-2" onClick={() => onClickCategory("drink")}>
                <p>Drinks</p>
            </div>
            <div className="category-button col-2" onClick={() => onClickCategory("food")}>
                <p>Food</p>
            </div>
        </div>
    )
}
export default Categories;

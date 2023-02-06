import React from 'react'

const RecipePageInstructions = ({ data }) => {

    const { instructions, recipeId } = data

    const renderInstructions = () => {
        return instructions.map((i) => (
            <>
                {i.recipeId === recipeId ? <p>{i.step}. {i.instruction}</p> : <></>}
            </>
        ))
    }

    return (
        <>
            <h3>Instructions</h3>
            {renderInstructions()}
        </>
    )
}
export default RecipePageInstructions;
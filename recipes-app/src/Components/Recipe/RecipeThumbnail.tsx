import React from 'react';
import { useNavigate } from "react-router-dom";
import RecipeTimes from "./RecipeTimes.tsx";

interface RecipeThumbnailProps {
    data: {
        recipe: {
            id: number,
            title: string,
            image_url: string,
            extraInformation: {
                prepTime: object,
                cookTime: object
            },
        }
    }
}

const RecipeThumbnail: React.FC<RecipeThumbnailProps> = ({ data }) => {
    const { recipe } = data;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/recipe/${recipe.id}`, { state: { recipe } })
    }

    return (
        <div className="col-4 recipe-thumbnail" onClick={handleClick}>
            <img src={recipe.image_url} alt="recipe-url" className="thumbnail-image" />
            <h4>{recipe.title}</h4>
            <RecipeTimes data={{ recipeTimings: recipe.extraInformation, isThumbnail: true }} />
        </div>
    )
}
export default RecipeThumbnail;

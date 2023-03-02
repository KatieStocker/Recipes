import { Link } from 'react-router-dom'

const Categories = () => {

    return (
        <div className="mt-3 category row">
            <Link className="category-button col-2" to="/all-recipes">
                All
            </Link>
            <Link className="category-button col-2" to="/drinks">
                Drinks
            </Link>
            <Link className="category-button col-2" to="/food">
                Test
            </Link>
        </div >
    )
}
export default Categories;

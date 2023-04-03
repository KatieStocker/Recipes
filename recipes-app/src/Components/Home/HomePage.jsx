import '../../CSS/HomePage.css'

import Categories from './Categories.jsx';
import Featured from './Featured.jsx';
import TitleSection from './TitleSection.jsx';

const HomePage = ({ data }) => {

    const { RecipeData } = data;


    return (
        <div>
            <TitleSection />
            <Categories />
            <Featured data={{ RecipeData }} />
        </div>
    )
}
export default HomePage;

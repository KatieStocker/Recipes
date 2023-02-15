import '../../CSS/HomePage.css'

import Categories from './Categories';
import Featured from './Featured';
import TitleSection from './TitleSection';

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

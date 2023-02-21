import HomeIcon from '@mui/icons-material/Home';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import EggSharpIcon from '@mui/icons-material/EggSharp';
import EmojiFoodBeverageRoundedIcon from '@mui/icons-material/EmojiFoodBeverageRounded';
import WidgetsIcon from '@mui/icons-material/Event'
import ExploreIcon from '@mui/icons-material/Explore';

export const navData = [
    {
        id: 0,
        icon: <HomeIcon />,
        text: "Home",
        link: "/"
    },
    {
        id: 1,
        icon: <TravelExploreIcon />,
        text: "All",
        link: "/all-recipes"
    },
    {
        id: 2,
        icon: <EggSharpIcon />,
        text: "Food",
        link: "/food"
    },
    {
        id: 3,
        icon: <EmojiFoodBeverageRoundedIcon />,
        text: "Drink",
        link: "/drinks"
    },
    {
        id: 4,
        icon: <WidgetsIcon />,
        text: "Seasonal",
        link: "/seasonal"
    },
    {
        id: 5,
        icon: <ExploreIcon />,
        text: "About",
        link: "/about"
    }
]
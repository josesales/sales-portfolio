import FoodHelperImg from '../assets/food-helper.jpg';
import OutdoorsKingImg from '../assets/outdoors-king.jpg';
import AwesomeMoviesImg from '../assets/awesome-movies.jpg';
import EasyChatImg from '../assets/easy-chat.jpg';
import FoodHelperLogo from '../assets/food-helper-logo.png';
import OutdoorsKingLogo from '../assets/outdoors-king-logo.png';
import EasyChatLogo from '../assets/easy-chat-logo.png';
import AwesomeMoviesLogo from '../assets/awesome-movies-logo.png';

export const applicationItems = [
    {
        name: 'Food Helper',
        link: 'https://foodhelper.net',
        gitHub: 'https://github.com/josesales/food-helper',
        logo: FoodHelperLogo,
        img: FoodHelperImg,
        description: [
            'Are you hungry at home and have no idea what to prepare but have some ingredients?',
            'Now you can just type your ingredients and it will show you nice and creative recipes you can prepare for you.'
        ],
        stack: ['Javascript', 'React', 'Redux', 'SASS', 'Node', 'Express', 'Mongoose', 'MongoDB'],
        features: ['User Authentication', 'Search Recipe by Multiple Ingredients', 'Search Recipes by Filters',
            'Pagination with Caching Mechanism', 'Image Upload', 'Review and Score System', 'Add Recipes to Favorites'],
    },
    {
        name: 'Outdoors King',
        link: 'https://outdoorsking.net',
        gitHub: 'https://github.com/josesales/outdoors-king',
        img: OutdoorsKingImg,
        logo: OutdoorsKingLogo,
        description: ['ECommerce where you can find Outdoor items for brave and adventurous people.'],
        stack: ['Typescript', 'React', 'Redux', 'Tailwind CSS', 'GraphQL', 'Node', 'Apollo Server', 'Prisma', 'PostgreSQL'],
        features: ['User Authentication', 'User Authorization', 'Password Reset with Verification Code',
            'Image Upload', 'Cart', 'Products Purchase'],
    },
    {
        name: 'Easy Chat',
        link: 'https://easychat.chat/',
        gitHub: 'https://github.com/josesales/easy-chat',
        img: EasyChatImg,
        logo: EasyChatLogo,
        description: ['Chat Application that allows you to chat with people in a room of your choice.'],
        stack: ['Javascript', 'React', 'Redux', 'Styled Components', 'Node', 'Socket.io'],
        features: ['Real Time, Bi-Direction Communication', 'Chat Room', 'Light and Dark Theme'],
    },
    {
        name: 'Awesome Movies',
        link: 'https://awesome-movies.co',
        gitHub: 'https://github.com/josesales/awesome-movies',
        img: AwesomeMoviesImg,
        logo: AwesomeMoviesLogo,
        description: ['Frontend application where you can find awesome movies. You can add movies to your watch list and watched list.'],
        stack: ['Javascript', 'React', 'Context API', 'SASS'],
        features: ['Integration with Third Party API', 'Movies Search', 'Watch List', 'Watched List', 'Trailers'],
    },
]
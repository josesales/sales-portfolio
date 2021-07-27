import FoodHelperImg from '../assets/food-helper.jpg';
import OutdoorsKingImg from '../assets/outdoors-king.jpg';
import FoodHelperLogo from '../assets/food-helper-logo.png';
import OutdoorsKingLogo from '../assets/outdoors-king-logo.png';

export const applicationItems = [
    {
        name: 'Food Helper',
        link: '#latest-works',
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
        link: '#latest-works',
        gitHub: 'https://github.com/josesales/outdoors-king',
        img: OutdoorsKingImg,
        logo: OutdoorsKingLogo,
        description: ['ECommerce which you can find Outdoor items for brave and adventurous people.'],
        stack: ['Typescript', 'React', 'Redux', 'Tailwind CSS', 'GraphQL', 'Node', 'Apollo Server', 'Prisma', 'PostgreSQL'],
        features: ['User Authentication', 'User Authorization', 'Password Reset with Verification Code',
            'Image Upload', 'Cart', 'Products Purchase'],
    },
]
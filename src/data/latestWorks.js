import FoodHelperImg from '../assets/food-helper.jpg';
import OutdoorsKingImg from '../assets/outdoors-king.jpg';

export const applicationItems = [
    {
        name: 'Food Helper',
        link: '#latest-works',
        img: FoodHelperImg,
        description: [
            'Are you hungry at home and have no idea what to prepare but have some ingredients?',
            'With Food Helper you can just type your ingredients and it will show you nice and creative recipes you can prepare for you and your friends!'
        ],
        stack: ['Javascript', 'React', 'SASS', 'Node', 'Express', 'Mongoose', 'MongoDB'],
        features: ['User Authentication', 'Search Recipe by Multiple Ingredients', 'Search Recipes by Filters',
            'Pagination with Caching of Visited Pages', 'Image Upload', 'Review and Score System', 'Add Recipes to Favorites'],
    },
    {
        name: 'Outdoors King',
        link: '#latest-works',
        img: OutdoorsKingImg,
        description: ['ECommerce which you can find Outdoors items for brave and adventurous people'],
        stack: ['Typescript', 'React', 'Tailwind CSS', 'GraphQL', 'Node', 'Apollo Server', 'Prisma', 'PostgreSQL'],
        features: ['User Authentication', 'User Authorization', 'Image Upload', 'Products Categories', 'Cart',
            'Products Purchase'],
    },
]
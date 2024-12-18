import FoodHelperPhoneImg from "../assets/food-helper-phone.png";
import FoodHelperTabPortImg from "../assets/food-helper-tab-port.png";
import FoodHelperTabLandImg from "../assets/food-helper-tab-land.png";
import FoodHelperRegularImg from "../assets/food-helper-regular.png";
import OutdoorsKingPhoneImg from "../assets/outdoors-king-phone.png";
import OutdoorsKingTabPortImg from "../assets/outdoors-king-tab-port.png";
import OutdoorsKingTabLandImg from "../assets/outdoors-king-tab-land.png";
import OutdoorsKingRegularImg from "../assets/outdoors-king-regular.png";
import AwesomeMoviesPhoneImg from "../assets/awesome-movies-phone.png";
import AwesomeMoviesTabPortImg from "../assets/awesome-movies-tab-port.png";
import AwesomeMoviesTabLandImg from "../assets/awesome-movies-tab-land.png";
import AwesomeMoviesRegularImg from "../assets/awesome-movies-regular.png";
import EasyChatPhoneImg from "../assets/easy-chat-phone.png";
import EasyChatTabPortImg from "../assets/easy-chat-tab-port.png";
import EasyChatTabLandImg from "../assets/easy-chat-tab-land.png";
import EasyChatRegularImg from "../assets/easy-chat-regular.png";
import FoodHelperLogo from "../assets/food-helper-logo.png";
import OutdoorsKingLogo from "../assets/outdoors-king-logo.png";
import EasyChatLogo from "../assets/easy-chat-logo.png";
import AwesomeMoviesLogo from "../assets/awesome-movies-logo.png";

export const applicationItems = [
  {
    id: "application-id-1",
    name: "Food Helper",
    link: "https://foodhelper.net",
    gitHub: "https://github.com/josesales/food-helper",
    logo: FoodHelperLogo,
    imgPhone: FoodHelperPhoneImg,
    imgTabPort: FoodHelperTabPortImg,
    imgTabLand: FoodHelperTabLandImg,
    imgRegular: FoodHelperRegularImg,
    imgBasePath: "../assets/easy-chat-",

    description: [
      "Are you hungry at home and have no idea what to prepare but have some ingredients?",
      "Now you can just type your ingredients and it will show you nice and creative recipes you can prepare for you.",
    ],

    stack: [
      "Javascript",
      "React",
      "Redux",
      "SASS",
      "Node",
      "Express",
      "Mongoose",
      "MongoDB",
    ],

    features: [
      "User Authentication",
      "Search Recipes by Multiple Ingredients",
      "Search Recipes by Filters",
      "Pagination with Caching Mechanism",
      "Image Upload",
      "Review and Score System",
      "Add Recipes to Favorites",
    ],
  },
  {
    id: "application-id-2",
    name: "Outdoors King",
    link: "https://outdoorsking.net",
    gitHub: "https://github.com/josesales/outdoors-king",
    imgPhone: OutdoorsKingPhoneImg,
    imgTabPort: OutdoorsKingTabPortImg,
    imgTabLand: OutdoorsKingTabLandImg,
    imgRegular: OutdoorsKingRegularImg,
    logo: OutdoorsKingLogo,

    description: [
      "ECommerce where you can find Outdoor items for brave and adventurous people.",
    ],

    stack: [
      "Typescript",
      "React",
      "Redux",
      "Tailwind CSS",
      "GraphQL",
      "Node",
      "Apollo Server",
      "Prisma",
      "PostgreSQL",
    ],

    features: [
      "User Authentication",
      "User Authorization",
      "Password Reset with Verification Code",
      "Image Upload",
      "Cart",
      "Stripe Integration",
    ],
  },
  {
    id: "application-id-3",
    name: "Awesome Movies",
    link: "https://awesome-movies.co",
    gitHub: "https://github.com/josesales/awesome-movies",
    imgPhone: AwesomeMoviesPhoneImg,
    imgTabPort: AwesomeMoviesTabPortImg,
    imgTabLand: AwesomeMoviesTabLandImg,
    imgRegular: AwesomeMoviesRegularImg,
    logo: AwesomeMoviesLogo,
    isDarkTheme: true,

    description: [
      "Frontend application where you can find awesome movies. You can add movies to your watch list and watched list.",
    ],

    stack: ["Javascript", "React", "Context API", "SASS"],

    features: [
      "Integration with Third Party API",
      "Movies Search",
      "Watch List",
      "Watched List",
      "Trailers",
    ],
  },
  {
    id: "application-id-4",
    name: "Easy Chat",
    link: "https://easychat.chat/",
    gitHub: "https://github.com/josesales/easy-chat",
    imgPhone: EasyChatPhoneImg,
    imgTabPort: EasyChatTabPortImg,
    imgTabLand: EasyChatTabLandImg,
    imgRegular: EasyChatRegularImg,
    logo: EasyChatLogo,

    description: [
      "Chat Application that allows you to chat with people in a room of your choice.",
    ],

    stack: [
      "Javascript",
      "React",
      "Redux",
      "Styled Components",
      "Node",
      "Socket.io",
    ],

    features: [
      "Real Time, Bi-Direction Communication",
      "Chat Room",
      "Light and Dark Theme",
    ],
  },
];

let restaurantData = [ //restaurant data
    {
        "id": 0,
        "name": "Ladies Street Sik Fan Co.",
        "phone": "2685 1618",
        "address": "Shop B, 1/F, Witty Commercial Building, 1A-1L Tung Choi Street, Mong Kok",
        "photo": "images/ladiesStCo.jpg",
    },
    {
        "id": 1,
        "name": "Kam's Roast Goose",
        "phone": "5408 7740",
        "address": "G/F, Po Wah Commercial Centre, 226 Hennessy Road, Wan Chai",
        "photo": "images/kamRoast.jpg",
    },
    {
        "id": 2,
        "name": "Luk On Kui",
        "phone": "2685 1618",
        "address": "2-3/F, 40-50 Des Voeux Road West, Sheung Wan",
        "photo": "images/lukOnKui.jpg",
    },
    {
        "id": 3,
        "name": "Hing Kee Claypot Rice Restaurant",
        "phone": "2384 3647",
        "address": "G/F, 15-19 Temple Street, Yau Ma Tei",
        "photo": "images/hingKee.jpg",
    },
    {
        "id": 4,
        "name": "Red Tea Café",
        "phone": "6513 3838",
        "address": "594-596 Nathan Road, Mong Kok",
        "photo": "images/redTea.jpg",
    },
    {
        "id": 5,
        "name": "Tasty Congee & Noodle Wantun Shop",
        "phone": "2327 2681",
        "address": "Shop 1080-82, 1/F, Wood Zone, ELEMENTS, 1 Austin Road West, Tsim Sha Tsui",
        "photo": "images/tasty.jpg",
    }
];

let lastId = restaurantData.length;

const getNextId = () =>
{
    lastId += 1;
    return lastId;
}

// Get a list of restaurants
const getRestaurants = () =>
{
    return restaurantData;
}


// Get a restaurant by id
const getRestaurant = (id) =>
{
    return restaurantData.find(restaurant => restaurantData.id === id);
}

// Create a new restaurant entry
const createRestaurant = (newRestaurant) =>
{
    const newRestaurantData = {
        id: getNextId(),
        ...data
    }
    restaurantData.push(newRestaurantData);
    return newRestaurantData;
}

// Delete a restaurant by id
const deleteRestaurant = (id) =>
{
    const delRestaurant = restaurantData.find(restaurant => restaurantData.id === id);
    if(!delRestaurant)
        throw Error(`Restaurant ${id} not found!`);
    restaurantData = restaurantData.filter(restaurant => restaurantData.id !== id);
    return delRestaurant;
}

export { getRestaurants, getRestaurant, createRestaurant, deleteRestaurant };
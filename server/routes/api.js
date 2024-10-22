import express from 'express';
import { getRestaurants, getRestaurant, createRestaurant, deleteRestaurant } from "../data/restaurants.js";

const router = express.Router();

router.post("/restaurants", (req, res) =>
{
    const restaurantData = req.body;
    try
    {
        const restaurant = createRestaurant(restaurantData);
        res.status(200).json(restaurant);
    }
    catch(error)
    {
        console.log(error);
        res.status(500).json({"Message": `${error}`});
    }
});

router.delete("/restaurants", (req, res) =>
{
    const id = parseInt(req.params.id);
    try
    {
        const restaurant = deleteRestaurant(id);
        res.status(200).json(restaurant);
    }
    catch(error)
    {
        res.status(500).json({"Message": `${error}`});
    }
})

export { router as backendRouter };
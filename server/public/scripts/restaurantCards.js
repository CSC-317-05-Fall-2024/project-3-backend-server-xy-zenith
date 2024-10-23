document.addEventListener("DOMContentLoaded", function()
{
    deleteButtons = document.querySelectorAll(".deleteButton"); //select all delete buttons
    for(let button of deleteButtons)
    {
        button.addEventListener("click", (event) => 
        {
            let restaurantId = button.id.split("-")[1]; //split = {"delete", "0"}
            fetch(`/api/restaurants/${restaurantId}`, {
                method: "DELETE"
            }).then(res => 
            {
                return res.json();
            }).then(data =>
            {
                console.log(data);
                window.location.reload(); //refresh page to show changes
            }).catch(error => {
                console.error("Error", error);
            })
        })
    }
})

// deleteButtons.forEach(deleteButton => //add click event to delete buttons
// {
//     deleteButton.addEventListener("click", (event) =>
//     {
//         const restaurant = event.target.parentElement.parentElement; //locate restaurant card
//         deleteRestaurantCard(restaurant);
//     });
// });


// function deleteRestaurantCard(card) //function to delete restaurant
// {
//     card.remove();
// }
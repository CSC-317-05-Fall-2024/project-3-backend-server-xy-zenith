const deleteButtons = document.querySelectorAll(".deleteButton"); //select all delete buttons

deleteButtons.forEach(deleteButton => //add click event to delete buttons
{
    deleteButton.addEventListener("click", (event) =>
    {
        const restaurant = event.target.parentElement.parentElement; //locate restaurant card
        deleteRestaurantCard(restaurant);
    });
});


function deleteRestaurantCard(card) //function to delete restaurant
{
    card.remove();
}
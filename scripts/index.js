// Initialize category arrays
const sitDown = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"];
const fastFood = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"];
const quickSitDown = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"];
const delivery = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"];
const allRestaurants = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"];
const special = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"];

// Gets a random integer in a range up to a passed max amount
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

// Gets a random index from the passed array
// sets the result at that index in the options HTML
// Removes that index to avoid duplicate choices 
function getRandomRestaurantsInCategory(categoryArray) {
    let copy = categoryArray.slice();
    for (let i = 1; i <= 3; i++) {
        let randomInt = getRandomInt(copy.length);
        if (copy[randomInt] != null) {
            document.getElementById("option" + i).innerHTML = copy[randomInt];
            copy.splice(randomInt, 1);
        } 
    }
}

// Gets id of the button pressed and calls the 
// function to get restaurant choices from the 
// corresponding category array 
function pickRestaurants(button) {
    switch (button.id) {
        case "sitDown":
            getRandomRestaurantsInCategory(sitDown);
            break;
        case "fastFood":
            getRandomRestaurantsInCategory(fastFood);
            break;
        case "quickSitDown":
            getRandomRestaurantsInCategory(quickSitDown);
            break;
        case "delivery":
            getRandomRestaurantsInCategory(delivery);
            break;
        case "allRestaurants":
            getRandomRestaurantsInCategory(allRestaurants);
            break;
        case "special":
            getRandomRestaurantsInCategory(special);
            break;
        default:
            break;
    }
}
// Initialize category arrays
const sitDown = ["Altoona Family Restaurant","Amber Inn Bar & Grill","Applebee's Neighborhood Grill & Bar","Buffalo Wild Wings","Chick-A-Dee's","Cowboy Jack's",
                 "Do Dodge Inn","Dooley's Pub","Draganetti's Ristorante","Eau Claire Ale House","Famous Dave's","Fuji Sushi & Steak House","Galloway Grille",
                 "Girolamo's Court 'n House Bar & Grill","Godfather's Pizza","Grizzly's Wood-Fired Grill & Steaks","Hangar 54 Grill","Houligans Steak & Seafood Pub",
                 "Johnny's Italian Steakhouse","KFC","Manny's Cocina","Milwaukee Burger Company","Mogie's Pub","Mom's Kitchen","Mona Lisa's","Monk's Bar & Grill",
                 "Northern Tap House","Olive Garden","Perkins Restaurant and Bakery","Pine Meadow Golf Club","Pizza Hut WingStreet East","Princeton Valley Pub & Grill",
                 "Randy's Family Restaurant","Red Lobster","Red Robin","Stella Blues","Texas Roadhouse","The Classic Garage","The District Pub & Grill","The French Press",
                 "The Growler Guys","The Lakely (at The Oxbow Hotel)","The Livery (aka Cowtown Saloon)","The Nucleus Café","The Plus","The VFW","Vs. (Versus) at 44 North","Wisco's"];

const fastFood = ["Arby's","Burger King","Culver's","Dairy Queen","Erberts and Gerberts","Jimmy Johns","McDonald's","Subway","Taco Bell","Taco John's","Wendy's"];

const quickSitDown = ["Acoustic Café","Cabin Coffee Company","Cancun Mexican Grill","Charleys Philly Steaks","China Max","Chipotle","Cousins Subs","Dhimiters","Eau Claire Cheese and Deli",
                      "ECDC Eau Claire Downtown Coffee","Fazoli's","Firehouse Subs","Five Guys","Gyro King Restaurant & Cafe","HyVee","JimBob's Pizza Shop","Johnny's Pizza Shop",
                      "Kobe's Japanese","Noodles & Company","Panera Bread","Roadside Ice Cream and Diner","Rocky Rococo Pizza and Pasta", "Mancino's"];

const delivery = ["Applebee's Neighborhood Grill & Bar","Arby's","Buffalo Wild Wings","Burger King","Chipotle","Domino's","Egg Roll Plus","Fazoli's","Firehouse Subs","Five Guys",
                  "Geno's Pizza","Godfather's Pizza","Golden Dragon","Golden Spike Bar & Grill","Grand Avenue Café","JimBob's Pizza Shop","Johnny's Pizza Shop","KFC","Little Caesar's",
                  "Noodles & Company","Panera Bread","Papa Murphy's","Perkins Restaurant and Bakery","Pizza Hut WingStreet East","Toppers Pizza"];

const allRestaurants = ["29 Pines Family Restaurant and Lodge Bar","4 Mile Restaurant & Bar","400 Club","420 Internet Cafe","44 North Gastropub","Acoustic Café","Akame Sushi",
                        "Altoona Family Restaurant","Amber Inn Bar & Grill","American Legion Post 53","Applebee's Neighborhood Grill & Bar","Arby's","Asia Palace","Azul Tequila",
                        "Beyond Brewed Coffee Shop","Big T's Saloon","Bijou Bistro","Black Bear Bar & Grill","Bowl Winkle's","Brickhouse Pub & Grub","Brothers","Buffalo Wild Wings",
                        "Bull Pen Sports Bar","Burger King","Burrachos","Burrito Xpress","Buzzy's Pizza Emporium","Cabin Coffee Company","Caffe Tempo","Cancun Mexican Grill",
                        "Caribou Coffee & Einstein Bros. Bagels","Casa Margarita","Casa Vallarta Mexican Restaurant","Charleys Philly Steaks","Chester's","Chic Sweets Desserts",
                        "Chick-A-Dee's","China Buffet","China Max","China Wok","Chipotle","ClaireWaters Bar & Restaurant","Cold Stone Creamery",
                        "Cousins Subs","Cowboy Jack's","Crave 80/20","Culver's","Dairy Queen","Dessert First","Dhimiters","Dive","Divine Nutrition","Do Dodge Inn","Domino's",
                        "Dooley's Pub","Dos Amigos","Double Days","Draganetti's Ristorante","Dunkin Donuts","Eau Claire Ale House","Eau Claire Cheese and Deli","Eau Juicy",
                        "ECDC Eau Claire Downtown Coffee","Egg Roll Plus","Elbow Room","Elk Lake Tavern","Erberts and Gerberts","Famous Dave's","Fazoli's","Firehouse Subs",
                        "Five & Two Café","Five Guys","Five O'Clock Club","Fortune Cookie Chinese","Fox Run Tavern","Fuji Sushi & Steak House","Galloway Grille","Geno's Pizza",
                        "Girolamo's Court 'n House Bar & Grill","Godfather's Pizza","Golden Dragon","Golden Spike Bar & Grill","Grand Avenue Café","Grandma Ginna's",
                        "Great Harvest Bread Company","Grizzly's Wood-Fired Grill & Steaks","Gyro King Restaurant & Cafe","Hangar 54 Grill","Happy Hollow Tavern","Hardees",
                        "Hilltop Tavern","Hipps Pub","Hobbsy's","Houligans Steak & Seafood Pub","HyVee","Jade Garden","Jay Ray's Deli","JimBob's Pizza Shop","Jimmy Johns",
                        "Johnny's Italian Steakhouse","Johnny's Pizza Shop","Kahvi Coffee House + Cafe","KFC","King Pho","Kobe's Japanese","Little Caesar's","Manny's Cocina",
                        "McDonald's","Milwaukee Burger Company","Mogie's Pub","Mom's Kitchen","Mona Lisa's","Monkey in the Middle Pizza at Action City","Monk's Bar & Grill",
                        "Moose Lodge","Muang Thai","Ninja Japanese and Chinese Restaurant","Noodle Wrap","Noodles & Company","Northbound Supply Co","Northern Tap House",
                        "Ole's Southside Tavern","Olive Garden","Olson's Ice Cream","Olympic Flame","Pan Asia Kitchen","Panera Bread","Papa Murphy's","Perkins Restaurant and Bakery",
                        "Pine Meadow Golf Club","Pizza Del Re (they are closed)","Pizza Hut WingStreet East","Pizza Ranch","Plaza Perk","Pretzelmaker","Princeton Valley Pub & Grill",
                        "Quick Wok","Randy's Family Restaurant","Ray's Place","Red Coal BBQ","Red Lobster","Red Robin","Rice Palace","Roadside Ice Cream and Diner",
                        "Rocky Rococo Pizza and Pasta","Rolly's Coach Club","Sammy's Pizza Restaurant & Pub","Shanghai Bistro","SHIFT Cyclery & Coffee Bar",
                        "Silly Serrano Mexican Restaurant","Southtowne Pub","Star Cup","Starbucks","Stella Blues","Subway","Sweet Driver Chocolate Cafe","Taco Bell","Taco John's",
                        "Tacos Juanita Mexican Restaurant","Taqueria la Poblanita","Teriyaki Madness","Texas Roadhouse","Thai Orchid Restaurant",
                        "The Alibi Lounge (according to FB temporarily closed)","The Brat Bar & Dance","The Brewing Projekt","The Classic Garage","The Coffee Grounds","The Danc'n Bean",
                        "The Depot","The District Pub & Grill","The Fire House","The French Press","The Goat Coffee House","The Growler Guys","The Informalist",
                        "The Lakely (at The Oxbow Hotel)","The Livery (aka Cowtown Saloon)","The Living Room Coffee House & Roastery","The Maple Lounge","The Nostalgic Bean Coffee House & French Bakery",
                        "The Nucleus Café","The Plus","The Red Mixer","The Red Room","The Rev (Temp closed)","The Sports Page Bar","The VFW","The Welcome Matt","Tokyo Japanese Restaurant","Toppers Pizza",
                        "Vs. (Versus) at 44 North","Wagner's Lanes and The Complexx","Wendy's","Westside Bar & Grill","Wigwam Tavern","Wild Ridge Clubhouse Bar and Grill","Wisco's","Za 51 Pizzeria",
                        "Mancino's"];

const special = ["4 Mile Restaurant & Bar","400 Club","Akame Sushi","Bijou Bistro","Brickhouse Pub & Grub","Eau Juicy","Five & Two Café","Fox Run Tavern","Happy Hollow Tavern",
                 "Hilltop Tavern","Hobbsy's","Jay Ray's Deli","Red Coal BBQ","Silly Serrano Mexican Restaurant","Sweet Driver Chocolate Cafe","Teriyaki Madness","The Goat Coffee House",
                 "The Informalist","Westside Bar & Grill","Wigwam Tavern","Wild Ridge Clubhouse Bar and Grill","Za 51 Pizzeria"];

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
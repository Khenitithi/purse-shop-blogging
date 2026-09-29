// Favourite Purses

let favourites =
    JSON.parse(localStorage.getItem("favourites")) || [];


// Add favourite

function addFavourite(purseName) {

    if (!favourites.includes(purseName)) {

        favourites.push(purseName);

        localStorage.setItem(
            "favourites",
            JSON.stringify(favourites)
        );

        displayFavourites();

        alert(purseName + " added to favourites!");

    } else {

        alert("This purse is already in your favourites.");

    }
}


// Display favourites

function displayFavourites() {

    const list =
        document.getElementById("favouriteList");

    const message =
        document.getElementById("favouriteMessage");

    list.innerHTML = "";

    if (favourites.length === 0) {

        message.textContent =
            "No favourite purse added yet.";

        return;

    }

    message.textContent =
        "Your saved favourite purses:";


    favourites.forEach(function(purse, index) {

        const item =
            document.createElement("div");

        item.className = "favourite-item";

        item.innerHTML = `
            ${purse}
            <button
                class="remove-btn"
                onclick="removeFavourite(${index})">
                Remove
            </button>
        `;

        list.appendChild(item);

    });

}


// Remove favourite

function removeFavourite(index) {

    favourites.splice(index, 1);

    localStorage.setItem(
        "favourites",
        JSON.stringify(favourites)
    );

    displayFavourites();

}


// Contact Form

document
    .getElementById("contactForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("contactName").value.trim();

        const email =
            document.getElementById("contactEmail").value.trim();

        const message =
            document.getElementById("contactMessage").value.trim();


        if (name === "" || email === "" || message === "") {

            alert("Please fill all fields.");

            return;
        }


        alert("Thank you, " + name + "! Your message has been sent.");

        this.reset();

    });


// Login Form

document
    .getElementById("loginForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const email =
            document.getElementById("loginEmail").value.trim();

        const password =
            document.getElementById("loginPassword").value.trim();

        const loginMessage =
            document.getElementById("loginMessage");


        if (email === "" || password === "") {

            loginMessage.textContent =
                "Please enter email and password.";

            loginMessage.style.color = "red";

            return;

        }


        if (password.length < 6) {

            loginMessage.textContent =
                "Password must contain at least 6 characters.";

            loginMessage.style.color = "red";

            return;

        }


        loginMessage.textContent =
            "Login successful!";

        loginMessage.style.color = "green";

    });


// Show favourites when page loads

displayFavourites();
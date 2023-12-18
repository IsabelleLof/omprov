// 7.1 Hämta användare (3p)
// Du ska använda Fetch för att hämta användarinformation
// från URL:en: https://jsonplaceholder.typicode.com/users.
// Visa endast användare som har ett användar-id som är
// högre än 5.
// Presentera användarnas namn, gatuadress (street) och
// företagsnamn på HTML-sidan.

//Pseudo code

//Först visa alla users
//Visa bara användare med ett användar id som är högre än 5
//användarens namn
//gatuadress
//företagsnamn

const postsEl = document.getElementById("posts");

async function getUsers() {
    const userResponse = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );
    const users = await userResponse.json();
    console.log(users);
    const filteredUsers = users.filter((user) => user.id > 5);
    console.log(filteredUsers);

    filteredUsers.forEach((user) => {
        const div = document.createElement("div");
        console.log(div);
        div.setAttribute("class", "user")
        div.innerHTML = `<h1>${user.username}</h1><p>${user.address.street}</p><p>${user.company.name}</p>`
        postsEl.appendChild(div);
    })
}

console.log(getUsers());



// 7.2 Styla varje användare (3p)
// Varje användare ska ha följande style:
// margin: 15px
// padding: 20px
// Texten på namnet ska vara bold och 24 pixlar
// Övrig text ska vara 16 pixlar
// Text-färgen ska ha färg-kod: #333333
// Backgrundsfärgen för varje användare ska ha färg-kod: #dddddd
// När man för muspekaren över en användare ska bakgrundsfärgen ändras till #eeeeee
// Visa användare i fyra kolumner för desktop och en kolumn för mobil

const buttonBienvenu = document.getElementById("btn-bvn");
const buttonUsers = document.getElementById("btn-users");
const usersGallery = document.getElementById("users-gallery");
const buttonContact = document.getElementById("btn-contact");

async function getUsers() {
    const response = await fetch('https://randomuser.me/api/?results=6');
    const data = await response.json();

    usersGallery.innerHTML = "";

    data.results.forEach((user) => {
        usersGallery.innerHTML += `
            <div class="user-card">
                <img src="${user.picture.large}" alt="photo">
                <p>${user.name.first} ${user.name.last}</p>
                <p>${user.email}</p>
            </div>
        `;
    });
}

buttonUsers.addEventListener("click", () => {
    getUsers();
});
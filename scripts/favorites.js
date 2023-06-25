
//  Display favorites list dynamically
const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

if (favorites.length === 0) {
    const message = document.createElement('p');
    message.textContent = 'No favorites added yet.';
    document.querySelector('.favorites-list').appendChild(message);
} else {
    favorites.forEach(favorite => {
        const card = document.createElement('div');
        card.classList.add('cocktail-card');

        const img = document.createElement('img');
        img.src = favorite.thumb;
        card.appendChild(img);

        const name = document.createElement('h3');
        name.textContent = favorite.name;
        card.appendChild(name);

        card.addEventListener('click', () => {
            // Redirect to the cocktail details page
            window.location.href = `cocktail.html?id=${favorite.id}`;
        });

        document.querySelector('.favorites-list').appendChild(card);
    });
}
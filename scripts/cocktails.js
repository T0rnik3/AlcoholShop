
const urlParams = new URLSearchParams(window.location.search);
const cocktailId = urlParams.get('id');

fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`)
    .then(response => response.json())
    .then(data => {
        const cocktail = data.drinks[0];

        const img = document.createElement('img');
        img.src = cocktail.strDrinkThumb;
        document.querySelector('.cocktail-details').appendChild(img);

        const name = document.createElement('h2');
        name.textContent = cocktail.strDrink;
        document.querySelector('.cocktail-details').appendChild(name);

        const category = document.createElement('p');
        category.textContent = `Category: ${cocktail.strCategory}`;
        document.querySelector('.cocktail-details').appendChild(category);

        const glass = document.createElement('p');
        glass.textContent = `Glass: ${cocktail.strGlass}`;
        document.querySelector('.cocktail-details').appendChild(glass);

        const instructions = document.createElement('p');
        instructions.textContent = `Instructions: ${cocktail.strInstructions}`;
        document.querySelector('.cocktail-details').appendChild(instructions);

        // Add to favorites functionality
        const favoriteButton = document.createElement('button');
        favoriteButton.classList.add('favorite-button');
        favoriteButton.textContent = 'Add to Favorites';
        favoriteButton.addEventListener('click', () => {
            const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
            if (!favorites.find(fav => fav.id === cocktail.idDrink)) {
                favorites.push({
                    id: cocktail.idDrink,
                    name: cocktail.strDrink,
                    thumb: cocktail.strDrinkThumb
                });
                localStorage.setItem('favorites', JSON.stringify(favorites));
                alert('Added to Favorites!');
            } else {
                alert('This cocktail is already in your Favorites!');
            }
        });
        document.querySelector('.cocktail-details').appendChild(favoriteButton);
    })
    .catch(error => {
        console.log('An error occurred:', error);
    });

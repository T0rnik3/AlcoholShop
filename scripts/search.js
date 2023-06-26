const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');
const cocktailContainer = document.querySelector('.cocktail-container');

function fetchCocktailsByName(cocktailName) {
    cocktailContainer.innerHTML = '';

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`)
        .then(response => response.json())
        .then(data => {
            const cocktails = data.drinks;

            if (cocktails) {
                cocktails.forEach(cocktail => {
                    const card = document.createElement('div');
                    card.classList.add('cocktail-card');

                    const img = document.createElement('img');
                    img.src = cocktail.strDrinkThumb;
                    card.appendChild(img);

                    const name = document.createElement('h3');
                    name.textContent = cocktail.strDrink;
                    card.appendChild(name);

                    card.addEventListener('click', () => {
                        window.location.href = `cocktail.html?id=${cocktail.idDrink}`;
                    });

                    cocktailContainer.appendChild(card);
                });
            } else {
                const message = document.createElement('p');
                message.textContent = 'No cocktails found.';
                cocktailContainer.appendChild(message);
            }
        })
        .catch(error => {
            console.log('An error occurred:', error);
        });
}

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
        fetchCocktailsByName(searchTerm);
    }
});

searchInput.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            fetchCocktailsByName(searchTerm);
        }
    }
});
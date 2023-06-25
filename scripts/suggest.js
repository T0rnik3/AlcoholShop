

async function fetchSuggestion() {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
        .then(response => response.json())
        .then(data => {
            const suggestedCocktails = data.drinks;

            const suggestedContainer = document.createElement('div');
            suggestedContainer.classList.add('suggested-cocktails');

            suggestedCocktails.forEach(suggestedCocktail => {
                const suggestedCard = document.createElement('div');
                suggestedCard.classList.add('suggested-cocktail-card');

                const suggestedImg = document.createElement('img');
                suggestedImg.src = suggestedCocktail.strDrinkThumb;
                suggestedCard.appendChild(suggestedImg);

                const suggestedName = document.createElement('h3');
                suggestedName.textContent = suggestedCocktail.strDrink;
                suggestedCard.appendChild(suggestedName);

                suggestedCard.addEventListener('click', () => {
                    // Redirect to the suggested cocktail details page
                    window.location.href = `cocktail.html?id=${suggestedCocktail.idDrink}`;
                });

                suggestedContainer.appendChild(suggestedCard);
            });

            document.querySelector('.cocktail-details').appendChild(suggestedContainer);
        })
        .catch(error => {
            console.log('An error occurred:', error);
        });
}

fetchSuggestion();
fetchSuggestion();
fetchSuggestion();
// Function to handle fetching and displaying cocktails based on the selected letter
function fetchCocktails(letter = 'a') {
    const cocktailContainer = document.querySelector('.cocktail-container');
    cocktailContainer.innerHTML = ''; // Clear the existing cocktail list

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
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
                        // Redirect to the cocktail details page
                        window.location.href = `cocktail.html?id=${cocktail.idDrink}`;
                    });

                    cocktailContainer.appendChild(card);
                });
            } else {
                const message = document.createElement('p');
                message.textContent = 'No cocktails found for this letter.';
                cocktailContainer.appendChild(message);
            }
        })
        .catch(error => {
            console.log('An error occurred:', error);
        });
}

// Add event listeners to alphabet links
const alphabetLinks = document.querySelectorAll('.alphabet-link');

alphabetLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const selectedLetter = link.dataset.letter;
        fetchCocktails(selectedLetter);
    });
});

fetchCocktails();
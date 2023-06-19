const content = document.querySelector(".content");

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

fetchData(url);

function showProducts(data) {
    console.log(data)

    content.innerHTML = data.drinks.map(item => `
        <div class="col-3 card mb-5">
            <img src="${item.strDrinkThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">
                    ${item.strDrink}
                </h5>
                <p class="card-text">Instructions:
                    ${item.strInstructions}
                </p>
                <a href="#" class="btn btn-primary">
                    See More
                </a>
            </div>
    </div>
    `).join("");

}

async function fetchData(url) {

    let res = await fetch(url);

    let data = await res.json();

    showProducts(data);

};




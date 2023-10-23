// const API_KEY = "a6227f963d0443ac88d8035e2917d4c8";
// const url = "https://newsapi.org/v2/everything?q=";

// window.addEventListener('load', () => fetchNews("india"));
// async function fetchNews(query){

//     function reload() {
//         window.location.reload();
//     }


//     const res = await fetch(`${url}${query}&apikey=${API_KEY}`);
//     const data = await res.json();
//     console.log(data);
//     //bind data
//     bindData(data.articles);

// }
// function bindData(articles){
//     const cardsContainer = document.getElementById('cards-container');
//     const newscardtemplate = document.getElementById('template-news-card');

//     cardsContainer.innerHTML = "";

//     articles.forEach(article => {
//         if(!article.urlToImage) return;
//         const cardClone = newscardtemplate.content.cloneNode(true);
//         fillDataInCard(cardClone,article);
//         cardsContainer.appendChild(cardClone);        
//     });
// }

// function fillDataInCard(cardClone,article){
//     const newsImg = cardClone.querySelector('#news-img');
//     const newsTitle = cardClone.querySelector('news-title');
//     const newsSource = cardClone.querySelector('#news-source');
//     const newsDesc = cardClone.querySelector('#news-desc');

//     newsImg.src = article.urlToImage;
//     newsTitle.innerHTML = article.title;
//     newsDesc.innerHTML = article.description;

//     const date = new Date(article.publishedAt).toLocaleString("en-US", {
//         timeZone: "Asia/Jakarta"
//     });
    
//     newsSource.innerHTML = `${article.source.name} . ${date}`;

//     cardClone.firstElementChild.addEventListener( "click" , () => {
//         window.open(article.url , "_blank");
//     });
// }
const API_KEY = "1d3a0eefa97b499d8fbc4ee93eeb40b7";
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener("load", () => fetchNews("India"));

function reload() {
    window.location.reload();
}

async function fetchNews(query) {
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data = await res.json();
    bindData(data.articles);
}

function bindData(articles) {
    const cardsContainer = document.getElementById("cards-container");
    const newsCardTemplate = document.getElementById("template-news-card");

    cardsContainer.innerHTML = "";

    articles.forEach((article) => {
        if (!article.urlToImage) return;
        const cardClone = newsCardTemplate.content.cloneNode(true);
        fillDataInCard(cardClone, article);
        cardsContainer.appendChild(cardClone);
    });
}

function fillDataInCard(cardClone, article) {
    const newsImg = cardClone.querySelector("#news-img");
    const newsTitle = cardClone.querySelector("#news-title");
    const newsSource = cardClone.querySelector("#news-source");
    const newsDesc = cardClone.querySelector("#news-desc");

    newsImg.src = article.urlToImage;
    newsTitle.innerHTML = article.title;
    newsDesc.innerHTML = article.description;

    const date = new Date(article.publishedAt).toLocaleString("en-US", {
        timeZone: "Asia/Jakarta",
    });

    newsSource.innerHTML = `${article.source.name} · ${date}`;

    cardClone.firstElementChild.addEventListener("click", () => {
        window.open(article.url, "_blank");
    });
}

let curSelectedNav = null;
function onNavItemClick(id) {
    fetchNews(id);
    const navItem = document.getElementById(id);
    curSelectedNav?.classList.remove("active");
    curSelectedNav = navItem;
    curSelectedNav.classList.add("active");
}

const searchButton = document.getElementById("search-button");
const searchText = document.getElementById("search-text");

searchButton.addEventListener("click", () => {
    const query = searchText.value;
    if (!query) return;
    fetchNews(query);
    curSelectedNav?.classList.remove("active");
    curSelectedNav = null;
});

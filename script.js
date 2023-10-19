const API_KEY ="a6227f963d0443ac88d8035e2917d4c8";
const url = "https://newsapi.org/v2/everything?q=";
window.addEventListener('load', () => fetchNews("india"));
async function fetchNews(query){
    const res = await fetch(`${url}${query}&apikey=${API_KEY}`);
    const data = await res.json;
    //bind data
    bindData(data.articles);

}
function bindData(articles){
    const cardsContainer = document.getElementById('cards-container');
    const newscardtemplate = document.getElementById('template-card');
    cardsContainer.innerHTML = '';
    articles.forEach(article => {
        if(!article.urlToImage) return;
        const cardClone = newscardtemplate.contentEditable.cloneNode(true);
        fillDataInCard(cardClone,article);
        cardsContainer.appendChild(cardClone);        
    });
}

function fillDataInCard(cardClone,article){
    const newsImg = cardClone.querySelector('#news-img');
    const newsTitle = cardClone.querySelector('news-title');
    const newsSource = cardClone.querySelector('#news-source');
    const newsDesc = cardClone.querySelector('#news-desc');

    newsImg.src = article.urlToImage;
    newsTitle.innerHTML = article.title;
    newsDesc.innerHTML = article.description;

    const date = new Date(article.publishedAt).toLocaleString("en-US", {
        timeZone: "Asia/Jakarta"
    });
    
    newsSource.innerHTML = `${article.source.name} . ${date}`;

    cardClone.firstElementChild.addEventListener( "click" , () => {
        window.open(article.url , "_blank");
    })
}
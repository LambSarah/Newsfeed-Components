// This is the data we will be using to create our articles. Look at it, then proceed to line 93.
// OPTIONAL: if you're feeling adventurous, try to make this data an export from a different module, and import it here.
// You can read about ES6 modules here: https://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules
import data from './data';
/*
  Step 1: Write a component called 'articleMaker' to create an article.
  Your component is a function that takes an article object as its only argument,
  and returns a DOM node looking like the one below:

  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class="expandButton">+</span>
  </div>*/
function articleMaker({ title, date, firstParagraph, secondParagraph, thirdParagraph }) {
    const articles = document.querySelector('.articles');
    const newArticle = document.createElement('div');
    newArticle.classList.add('article');
    articles.appendChild(newArticle);
    let newTitle = document.createElement('h2');
    newTitle.textContent = title;
    newArticle.appendChild(newTitle);

    let newDate = document.createElement('p');
    newDate.classList.add('date');
    newDate.textContent = date;
    newArticle.appendChild(newDate);

    let newFirstParagraph = document.createElement('p');
    newFirstParagraph.textContent = firstParagraph;
    newArticle.appendChild(newFirstParagraph);

    let newSecondParagraph = document.createElement('p');
    newSecondParagraph.textContent = secondParagraph;
    newArticle.appendChild(newSecondParagraph);

    let newThirdParagraph = document.createElement('p');
    newThirdParagraph.textContent = thirdParagraph;
    newArticle.appendChild(newThirdParagraph);

    let newSpan = document.createElement('span');
    newSpan.classList.add('expandButton');
    newSpan.textContent = '+';
    newSpan.addEventListener('click', (event) => {

        newArticle.classList.toggle('article-open');
    });
    newArticle.appendChild(newSpan);

    return newArticle;
}
let articleArray = Array.from(data);
articleArray.forEach((article) => {
    articleMaker(article);
});

console.log(data);
console.log(data[0]);
// for (let i = 0; i < data.length; i++) {
//     let newArticle = articleMaker(data[i]);
//     articleArray.push(newArticle);



/*  Step 2: Still inside `articleMaker`, add an event listener to the span.expandButton.
  This listener should toggle the class 'article-open' on div.article.

  Step 3: Don't forget to return something from your function!

  Step 4: Outside your function now, loop over the data. At each iteration you'll use your component
  to create a div.article element and append it to the DOM inside div.articles (see index.html).

  Step 5: Try adding new article object to the data array. Make sure it is in the same format as the others.
  Refresh the page to see the new article.
*/
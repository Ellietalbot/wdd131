import { recipes } from './recipes.mjs';

function randomNumber() {
    return Math.floor(Math.random() * recipes.length);
}

function chooseRandomRecipe(recipes) {
    const randomIndex = randomNumber();
    return recipes[randomIndex];
}

function getRecipeName(chosenRecipe) {
    const newName = chosenRecipe.name.trim().split(' ').join('-');
    return newName;
}

function tagsTemplate(tags) {
    return tags.map(tag => `<p>${tag}</p>`).join('');
}

function ratingTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
    for (let i = 1; i <= 5; i++) {
        html += i <= rating ? '⭐' : '☆';
    }
    html += `</span>`;
    return html;
}

function recipeTemplate(chosenRecipe) {
    return `
        <div id="recipe">
            <img id="recipe_img" src="${chosenRecipe.image}" alt="${chosenRecipe.name}">
            <div id="recipe_info">
                <div id="tags">${tagsTemplate(chosenRecipe.tags)}</div>
                <h1>${chosenRecipe.name}</h1>
                ${ratingTemplate(chosenRecipe.rating)}
                <p id="description">${chosenRecipe.description}</p>
            </div>
        </div>`;
}

function renderRecipes(recipesToRender) {
    const recipeBody = document.querySelector('main');
    const recipeHTML = recipesToRender.map(recipeTemplate).join('');
    recipeBody.innerHTML = recipeHTML;
}

function filterRecipes(query) {
    const searchTerm = query.toLowerCase();
    return recipes.filter((recipe) => {
        return (
            recipe.name.toLowerCase().includes(searchTerm) ||
            recipe.description.toLowerCase().includes(searchTerm) ||
            (Array.isArray(recipe.tags) && recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm))) ||
            (Array.isArray(recipe.ingredients) && recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm)))
        );
    });
}

function handleSearch() {
    const query = document.getElementById('search_bar').value;
    const filteredRecipes = filterRecipes(query);
    renderRecipes(filteredRecipes);
}

function init() {
    const randomRecipe = chooseRandomRecipe(recipes);
    renderRecipes([randomRecipe]);

    // Move the search bar event listener inside init
    const searchInput = document.getElementById('search_bar');
    if (!searchInput) {
        console.error("Search bar element not found!");
    } else {
        searchInput.addEventListener('input', handleSearch);
    }
}

document.addEventListener("DOMContentLoaded", init);



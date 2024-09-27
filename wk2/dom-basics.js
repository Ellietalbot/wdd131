const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);
const image = document.querySelector('img');
image.setAttribute('src', 'https://picsum.photos/200');
image.setAttribute('alt', 'img');
body.appendChild('image')
const new_Section = document.createElement("section");
new_Section.innerHTML = "<h2>DOM Basics</h2><p>This was added through Javascript</p>";
document.body.appendChild(new_Section);
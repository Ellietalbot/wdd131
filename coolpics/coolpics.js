const button = document.querySelector('button');
const menu = document.querySelector('menu');

button.addEventListener('click', showMenu);
window.addEventListener('resize', handleResize);
window.addEventListener('load', handleResize);

function showMenu() {
    menu.classList.toggle('hide');
}

function handleResize() {
    if (window.innerWidth > 1000) {
        menu.classList.remove('hide');
    } else {
        menu.classList.add('hide');
    }
}

function viewerTemplate(pictureSrc, alt) {
    return `
        <div class="viewer" >
            <button class="close-viewer" >X</button>
            <img id="viewer_img" src="${pictureSrc}" alt="${alt}">
        </div>`;
}

function viewHandler(event) {
    const picture = event.target;

    if (picture.tagName === 'IMG') { 
        const src = picture.getAttribute('src');
        const splitSrc = src.split('-');
        const largeImg = `${splitSrc[0]}-full.jpeg`;
        const smallImg = `${splitSrc[0]}-sm.jpeg`;

        const alt = picture.getAttribute('alt');
        const viewerImgSrc = window.innerWidth > 700 ? largeImg : smallImg;

        
        document.body.insertAdjacentHTML('afterbegin', viewerTemplate(viewerImgSrc, alt));

        
        const closeButton = document.querySelector('.close-viewer');
        closeButton.addEventListener('click', closeViewer);
    }
}

function closeViewer() {
    const viewer = document.querySelector('.viewer');
    if (viewer) {
        viewer.remove();
    }
}

const images = document.querySelectorAll('img');
images.forEach(image => {
    image.addEventListener('click', viewHandler);
});

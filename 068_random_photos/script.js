const imageContainer = document.querySelector('.image-container');
const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    imageNum = 10;
    addNewImages();
});

function addNewImages() {
    for (let index = 0; index < imageNum; index++) {
        const newImgEl = document.createElement("img");
        newImgEl.src = `https://picsum.photos/300?random=${Math.floor(
            Math.random() * 2000
        )}`;
        imageContainer.appendChild(newImgEl);
    }
}
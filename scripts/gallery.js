const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = [];
for (let i = 1; i <= 5; i++) {
    images.push(`../assets/images/pic${i}.jpg`);
}

/* Declaring the alternative text for each image file */
const altTexts = [];
for (let i = 1; i <= images.length; i++) {
    altTexts.push(`Picture ${i}`);
}

/* Looping through images */
images.forEach((image, index) => {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', image);
    newImage.setAttribute('alt', index);
    thumbBar.appendChild(newImage)

    newImage.addEventListener('click', () => {
        displayedImage.setAttribute('src', image);
        displayedImage.setAttribute('alt', altTexts[index]);
    })
});

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    if (btn.getAttribute('class').includes('dark')) {
        btn.setAttribute("class", 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    } else {
        btn.setAttribute("class", 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }
});

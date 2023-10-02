import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const ul = document.querySelector('.gallery')
const li = galleryItems.map(({original, preview, description}) =>
`<li class="gallery__item">
<a class="gallery__link" href="${original}">
   <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>`
).join('');
ul.insertAdjacentHTML('beforeend', li);

ul.addEventListener('click', openImg);
function openImg(evt){
    evt.preventDefault();
if (evt.target.className !== 'gallery__image'){
    return;
}

}
const lightbox = new SimpleLightbox('.gallery a', { 
    captionDelay: 250,
    captionsData: 'alt'
 });

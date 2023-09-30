import { galleryItems } from './gallery-items.js';
// Change code below this line


// }

const ul = document.querySelector('.gallery')
const li = galleryItems.map(({original, preview, description}) =>
`<li class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
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


const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`)

instance.show()
}

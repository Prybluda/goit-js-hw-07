import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const ul = document.querySelector('.gallery')
const li = galleryItems.map((item) => `
<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src=' ${item.preview}'
      data-source="${item.original}"
      alt=' ${item.description}'
    />
  </a>
</li>`).join('');
ul.insertAdjacentHTML('beforeend', li);

ul.addEventListener('click', openImg)
function openImg(evt) {
        evt.preventDefault();
    console.dir(evt)
    if (evt.target.nodeName !== 'IMG') {
        return;
    }

    const modal = basicLightbox.create(
        `<img src="${evt.target.dataset.source}" width="800" height="600">`,

        {   onShow: () => window.addEventListener('keydown', onEscKeyPress),
            onClose: () => window.removeEventListener('keydown', onEscKeyPress),
        }
    );
    
    modal.show();

    function onEscKeyPress(evt) {   
        if (evt.code === "Escape") {
            modal.close();
        }
    }
}
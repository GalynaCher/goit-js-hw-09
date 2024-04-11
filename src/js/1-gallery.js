
// https://simplelightbox.com/
import simpleLightbox from "simplelightbox";                // import the SimpleLightbox library
import 'simplelightbox/dist/simple-lightbox.min.css';

'use strict'; // Strict mode code

const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];


const gallery = document.querySelector("ul.gallery");             // the event is delegated to the parent element

// const [{ preview, original, description } ] = images;          // destructuring example for training

const markup = images
    .map(({ preview, original, description }) => `<li class="gallery-item">
                        <a class="gallery-link" href="${original}">
                            <img
                                class="gallery-image"
                                src="${preview}"
                                alt="${description}"
                            />
                        </a>
                       </li>`)
    .join("");                                                      // gallery data

gallery.insertAdjacentHTML("afterbegin", markup);                   // gallery data is created dynamically

let lightbox = new simpleLightbox(".gallery a", {                   // the simpleLightbox pattern
  captions: true,                                                   // show captions if availabled or not
  captionSelector: 'img',                                           // set the element where the caption is
  captionsData: 'alt',                                              // get the caption from given attribute
  captionPosition: 'bottom',                                        
  captionDelay: 250,                                                // delay before the caption shows (in ms)
  captionType: 'attr'                                               // how to get the caption. 
                                                                    // You can choose between attr, data or text
});

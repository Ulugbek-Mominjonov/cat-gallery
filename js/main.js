var photos = [
  'img/laptop-large.jpg',
  'img/microphone-large.jpg',
  'img/keyboard-large.jpg',
  'img/signboard-large.jpg',
  'img/tree-large.jpg'
];


var thumbnails = document.querySelectorAll('.gallery__photo-preview');
var fullPhoto = document.querySelector('.full-photo');

var addThumbnailClickHandler = function (thumbnail, photo) {
  thumbnail.addEventListener('click', function () {
    fullPhoto.src = photo;
  });
};

for (var i = 0; i < thumbnails.length; i++) {
  addThumbnailClickHandler(thumbnails[i], photos[i]);
}

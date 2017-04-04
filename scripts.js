$('.save-idea').on('click', function() {
  var $title = $('.title-storage').val();
  var $body = $('.body-storage').val();
  var $newIdea = new Idea($title, $body);
  prependIdea($newIdea);
  clearInputFields();
});

function clearInputFields () {
  var $title = $('.title-storage');
  var $body = $('.body-storage')
  $title.val('');
  $body.val('');
  toggleSaveDisable();
};

function Idea(id, title, body, quality) {
  this.id = id;
  this.title = title;
  this.body = body;
  this.quality = quality;
}

function prependIdea(newIdea) {
  var $title = newIdea.title;
  var $body = newIdea.body;
  $('.idea-container').prepend(
    `<article class="idea-card">`
  )
}

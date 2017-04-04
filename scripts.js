$('.save-idea').on('click', function() {
  var $title = $('.title-storage').val();
  var $body = $('.body-storage').val();
  var $newCard = new IdeaCard($title, $body);
  prependCard($newCard);
  clearInputFields();
});

function clearInputFields () {
  var $title = $('.title-storage');
  var $body = $('.body-storage')
  $title.val('');
  $body.val('');
  toggleSaveDisable();
};

function IdeaCard (id, title, body, quality) {
  this.id = id;
  this.title = title;
  this.body = body;
  this.quality = quality;
}

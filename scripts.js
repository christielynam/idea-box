$('.save-idea').on('click', function () {
  var $title = $('.title-storage').val();
  var $body = $('.body-storage').val();
  var $id = Date.now();
  var $newIdea = new Idea($title, $body, $id);
  prependIdea($newIdea);
  clearInputFields();
  storeLocally($newIdea, $id);
});

function storeLocally(Idea, id) {
  var stringifiedIdea = JSON.stringify(Idea);
  localStorage.setItem(id, stringifiedIdea);
}

$('.title-storage').on('input', enableSave);
$('.body-storage').on('input', enableSave);

function clearInputFields() {
  var $title = $('.title-storage');
  var $body = $('.body-storage');
  $title.val('');
  $body.val('');
  toggleSaveDisable();
  enableSave();
}

function enableSave() {
  var $title = $('.title-storage').val();
  var $body = $('.body-storage').val();
  if ($title !== '' && $body !== '') {
    toggleSaveDisable(false);
  } else {
    toggleSaveDisable(true);
  }
}

function toggleSaveDisable(value) {
  $('.save-idea').prop('disabled', value);
}

function Idea(title, body, quality, id) {
  this.title = title;
  this.body = body;
  this.id = id;
  this.quality = 'quality: swill';
}

function prependIdea(newIdea) {
  var $title = newIdea.title;
  var $body = newIdea.body;
  var $quality = newIdea.quality;
  $('.idea-container').prepend(
    `<article class="idea-card">
      <div class="card-header">
        <h2>${$title}</h2>
        <button class="delete-icon" type="button" name="delete-button"></button>
      </div>
      <p class="body-text">${$body}</p>
      <div class="quality-container">
        <button class="upvote-icon" type="button" name="upvote-btn"></button>
        <button class="downvote-icon" type="button" name="downvote-btn"></button>
        <p class="quality-text">${$quality}</p>
      </div>
    </article>`
  );

  $('.upvote-icon').on('click', function () {
      $('.quality-text').text('quality: plausible');
    });

  $('.downvote-icon').on('click', function () {
        $('.quality-text').text('quality: swill');
      });
}

$('.idea-container').on('click', '.delete-icon', function () {
  $(this).parents('.idea-card').remove();
});

$.each($('textarea[data-autoresize]'), function () {
    var offset = this.offsetHeight - this.clientHeight;

    var resizeTextarea = function (value) {
        $(value).css('height', 'auto').css('height', value.scrollHeight + offset);
      };

    $(this).on('keyup input', function () { resizeTextarea(this); }).removeAttr('data-autoresize');
  });

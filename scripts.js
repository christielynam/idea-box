$('.save-idea').on('click', function () {
  var $title = $('.title-storage').val();
  var $body = $('.body-storage').val();
  var $newIdea = new Idea($title, $body);
  prependIdea($newIdea);
  clearInputFields();
});

$('.title-storage').on('input', enableSave);
$('.body-storage').on('input', enableSave);

function clearInputFields() {
  var $title = $('.title-storage');
  var $body = $('.body-storage');
  $title.val('');
  $body.val('');
  toggleSaveDisable();
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
  this.id = id;
  this.title = title;
  this.body = body;
  this.quality = 'quality: swill';
}

function prependIdea(newIdea) {
  debugger;
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

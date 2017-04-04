$('.save-idea').on('click', function () {
  var $title = $('.title-storage').val();
  var $body = $('.body-storage').val();
  var $newIdea = new Idea('',$title, $body,'');
  prependIdea($newIdea);
  clearInputFields();
});

function clearInputFields() {
  var $title = $('.title-storage');
  var $body = $('.body-storage');
  $title.val('');
  $body.val('');
  toggleSaveDisable();
}

// function toggleSaveDisable() {
//   $('.title-storage').on('keypress', function () {
//     $('.save-idea').prop('disabled', false);
//   });
// }

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
        <img class="upvote-icon" src="assets/upvote.svg" alt="upvote">
        <img class="downvote-icon" src="assets/downvote.svg" alt="downvote">
        <p class="quality-text">quality: swill</p>
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

$('.idea-container').on('click', '.delete-icon', function() {
  $(this).parents('.idea-card').remove();
})

function toggleSaveDisable() {

}

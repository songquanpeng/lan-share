const $$ = mdui.JQ;
function uploadFile() {
  let file = $('#fileInput')[0].files[0];
  let uploader = $('#fileUploader')
    .val()
    .trim();
  let description = $('#fileDescription')
    .val()
    .trim();
  if (file && uploader && description) {
    $.ajax({
      url: '/api/upload/',
      type: 'POST',
      data: {
        file: file,
        uploader: uploader,
        description: description
      },
      success: function() {
        console.log('done');
      }
    });
  }
}

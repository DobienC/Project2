var API = {
  getPosts: function() {
    return $.ajax({
      url: "api/posts",
      type: "GET"
    });
  },
  createPost: function(post) {
    return $.ajax({
      headers: {
        "Content-Type": "apploication/json"
      },
      type: "POST",
      url: "api/posts",
      data: JSON.stringify(post)
    });
  },
  deletePost: function(id) {
    return $.ajax({
      url: "api/posts" + id,
      type: "DELETE"
    });
  }
};

var createPost = function() {
  var $title = $("#post-text").val();
  var $body = $("#post-description").val();
  var $url = $("#post-url").val();

  var post = {
    category: $title,
    body: $body,
    image: $url
  };

  API.createPost(post);
  populate();
};

function populate() {
  API.getPosts().then(function(data) {
    for (var i = 0; i < data.length; i++) {
      var $card = $("<div class='card flex-row flex-wrap mt-3'>");
      var $head = $("<div class='card-header border-0'>");
      var $img = $("<img src='' alt=''>");
      var $block = $("<div class='card-block px-2'>");
      var $title = $("<h4 class='card-title'>");
      var $text = $("<p class='card-text'>");
      var $bot = $("<div class='w-100'>");

      $img.attr("src", data[i].image);
      $title.text(data[i].category);
      $text.text(data[i].body);

      $head.append($img);
      $block.append($title);
      $block.append($text);
      $card.append($head);
      $card.append($block);
      $card.append($bot);

      $("#destination").append($card);
    }
  });
}

$(document).ready(function() {
  console.log("ready");
  populate();
});

$submitBtn.on("click", createPost);

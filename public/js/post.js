var API = {
  getPosts: function() {
    return $.ajax({
      url: "api/post",
      type: "GET"
    });
  },
  createPost: function(post) {
    return $.ajax({
      headers: {
        "Content-Type": "apploication/json"
      },
      type: "POST",
      url: "api/post",
      data: JSON.stringify(post)
    });
  }
}

function populate(){

  API.getPosts().then(function(data) {
    for(var i = 0; i < data.length; i++){
      var $card = $('<div class="card">');
    }
  })
}
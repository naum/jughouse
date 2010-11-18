BRNL = "<br />\n";
TUMBLR_READ_URL = "http://azspot.net/api/read/json/?start=0&num=50";

$(document).ready(function() {
  fetchTumblrPosts();
});

var echo = function(s) {
  $('section').append(s);
}

var fetchTumblrPosts = function() {
  $.getJSON(TUMBLR_READ_URL + "&callback=?", function(tumbdata) {
    var tumbtot = tumbdata['posts-total'];
    echo("Total posts: " + tumbtot + BRNL + BRNL); 
    var n = 0;
    $.each(tumbdata.posts, function(i, v) {
      if (v['type'] == 'link' || v['type'] == 'quote') { 
        n += 1;
        echo(n + ") " + v['url-with-slug'] + BRNL);
      }
    });
  });
}

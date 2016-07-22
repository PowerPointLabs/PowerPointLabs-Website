$(".navbar .dropdown").hover(function() {
  $(this).find(".dropdown-menu").first().stop(true, true).slideDown(300);
}, function() {
  $(this).find(".dropdown-menu").first().stop(true, true).delay(100).slideUp(300)
});

$(".navbar .dropdown").click(function() {
  window.location = $(this).find(".dropdown-toggle").attr("href");
});

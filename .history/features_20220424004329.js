

$(window).scroll(function () {
  if ($(window).scrollTop() > $(window).height()) {
    $(".navbar").css({ "background-color": "#a3988f" });
  } else {
    $(".navbar").css({ "background-color": "transparent" });
  }
});

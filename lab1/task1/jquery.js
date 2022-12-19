$(".container").css({
  width: "600px",
  height: "500px",
  margin: "100px auto",
  position: "relative",
});
$("button").css({
  position: "absolute",
  left: "50%",
  bottom: "15%",
});
$(".slide").css({
  position: "absolute",
  top: "10px",
  left: "10px",
  right: "10px",
  bottom: "10px",
});
$(".slide:gt(0)").hide();
let slideshow = setInterval(function () {
  $(".slide:first")
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo(".wrapper");
}, 1500);

$("button").on("click", function () {
  clearInterval(slideshow);
});

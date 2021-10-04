$(document).ready(function () {
$(".carousel").slick({
    dots: true,
});
let burger = document.querySelector("#burger-icon");
let header = document.querySelector("#header");
burger.onclick = function () {
    header.classList.toggle("menu-open");
};
});
$(document).ready(function () {
$(".burger-icon").click(function (event) {
    $("#burger-icon,#header").toggleClass("menu-open");
});
});
$(function() {
$(window).scroll(function() {
if($(this).scrollTop() != 0) {
$('#toTop').fadeIn();
} else {
$('#toTop').fadeOut();
}
});
$('#toTop').click(function() {
$('body,html').animate({scrollTop:0},800);
});
});
// $(".carousel.carousel_reviews").slick({
// slidesPerRow: 1,
// slidesToShow: 1,
// slidesToScroll: 1,
// centerMode: true,
// arrows: true,
// responsive: false,
// infinite: true,
// });
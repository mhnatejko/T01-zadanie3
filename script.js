$(document).ready(function () {
    var button = $("img"),
        menu = $("ul");
    menu.hide();
    button.on("click", function () {
        menu.slideToggle();
    });
});
    
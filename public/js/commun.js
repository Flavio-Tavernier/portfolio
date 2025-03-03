$(".btn-rotated").each(function () {
  $(this).click(function () {
    $(".btn-rotated").each(function () {
      $(this).removeClass("padd-increased");
    });

    $(this).addClass("padd-increased");
  });
});

function manageCardContentToDisplay(contentForCard) {
  $(".wrapper").html("");
  $(".wrapper").append(contentForCard);
}

function navbarSmartphoneOnClick() {
  $("#menu-bar").toggleClass("change");
  $("#nav").toggleClass("change");
  $("#menu-bg").toggleClass("change-bg");
}

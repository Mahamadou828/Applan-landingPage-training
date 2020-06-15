$(function () {
  initCarousel();
  const NavBar = $(".navbar");

  if (window.scrollY === 0) {
    $(NavBar).removeClass("other");
    $(NavBar).addClass("top");
  } else {
    $(NavBar).removeClass("top");
    $(NavBar).addClass("other");
  }

  window.addEventListener("scroll", function (e) {
    const scroll = this.scrollY;
    if (scroll === 0) {
      $(NavBar).removeClass("other");
      $(NavBar).addClass("top");
    } else {
      $(NavBar).removeClass("top");
      $(NavBar).addClass("other");
    }
  });

  $(".menu-toggle").click(function () {
    $(".menu-item").slideToggle();
  });
});

function initCarousel() {
  $(".previous").click(function () {
    console.log("appelle");
    const currentId = $("#active").data("index");
    let index = 0;
    if (currentId === 0) {
      index = 4;
    } else {
      index = currentId - 1;
    }
    $("#active").attr("id", "");
    $(`img[data-index=${currentId}]`).removeClass("active");
    $(`.item[data-index=${index}]`).attr("id", "active");
    $(".carousel-element").css(
      "transform",
      `translate3d(${-index * 100}%, 0px, 0px)`
    );
    $(`img[data-index=${index}]`).addClass("active");
  });
  $(".next").click(function () {
    const currentId = $("#active").data("index");
    let index = 0;
    if (currentId === 4) {
      index = 0;
    } else {
      index = currentId + 1;
    }
    $("#active").attr("id", "");
    $(`img[data-index=${currentId}]`).removeClass("active");
    $(`.item[data-index=${index}]`).attr("id", "active");
    $(".carousel-element").css(
      "transform",
      `translate3d(${-index * 100}%, 0px, 0px)`
    );
    $(`img[data-index=${index}]`).addClass("active");
  });
}

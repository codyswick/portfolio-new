var w = window.innerWidth;
var h = window.innerHeight;


window.addEventListener("scroll", function(event) {
  var topDistance = this.pageYOffset;
  var w = window.innerWidth;
  var h = window.innerHeight;
  var layers = document.querySelectorAll("[data-type='parallax']");
  if(w < 600){
    for (var i = 0; i < layers.length; i++){
      var layer = layers[i];
      var depth = layer.getAttribute("data-depth2");
      var translate3d = 'translate3d(0, ' + -(topDistance * depth) + 'px, 0)';
      layer.style['-webkit-transform'] = translate3d;
      layer.style['-moz-transform'] = translate3d;
      layer.style['-ms-transform'] = translate3d;
      layer.style['-o-transform'] = translate3d;
      layer.style.transform = translate3d;
    }
  }else{
    for (var i = 0; i < layers.length; i++) {
      var layer = layers[i];
      var depth = layer.getAttribute("data-depth");
      var translate3d = 'translate3d(0, ' + -(topDistance * depth) + 'px, 0)';
      layer.style['-webkit-transform'] = translate3d;
      layer.style['-moz-transform'] = translate3d;
      layer.style['-ms-transform'] = translate3d;
      layer.style['-o-transform'] = translate3d;
      layer.style.transform = translate3d;
  }

}
})




$(function() {
    $("a").on('click', function(event) {

        if (this.hash !== "") {
            event.preventDefault();


            $('html, body').animate({
                scrollTop: $(this.hash).offset().top + 2
            }, 700, function() {});

        }
    });

    $('#downArrow').on('mouseenter', function() {
        $(this).fadeOut('slow');
        $(this).fadeIn('slow');
    }, );
    var stickyNavTop = $('.nav-bar').offset().top;
    let scrollUpBtn = $('.scroll-up-btn')

    var stickyNav = function() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > stickyNavTop) {
            $('.nav-bar').addClass('sticky');
            scrollUpBtn.addClass('show')
        } else {
            $('.nav-bar').removeClass('sticky');
            scrollUpBtn.removeClass('show')
        }
    };

    stickyNav();
    $(window).scroll(function() {
        stickyNav();
    });
});



const filters = document.querySelectorAll(".filter");

filters.forEach((filter) => {
  filter.addEventListener("click", function () {
    let active = document.querySelectorAll(".active");
    active.forEach((item, i) => {
      item.classList.remove("active");
    });

    let selectedFilter = filter.getAttribute("data-filter")
    filter.classList.add("active");
    let itemsToHide = document.querySelectorAll(
      `.projects .project:not([data-filter='${selectedFilter}'])`
    );
    let itemsToShow = document.querySelectorAll(
      `.projects [data-filter='${selectedFilter}']`
    );

    if (selectedFilter == "all") {
      itemsToHide = [];
      itemsToShow = document.querySelectorAll(".projects [data-filter]");
    }

    itemsToHide.forEach((el) => {
      el.classList.add("hide");


    });

    itemsToShow.forEach((el) => {
      el.classList.remove("hide");


    });
  });
});





// filter by value
//
// const filters = document.querySelectorAll(".filter");
// const elements = document.querySelectorAll(".project");
//
// filters.forEach((filter) => {
//    filter.addEventListener("click", function ()  {
//      let selectedFilter = filter.getAttribute("data-filter");
//      let itemsToHide = document.querySelectorAll(`.projects .project:not([data-filter='${selectedFilter}'])`)
//      if(itemsToHide != 0){
//        for(let i = 0; i < itemsToHide.length;i++){
//          itemsToHide[i].classList.add("hide")
//        }
//      }else{
//        for(let i = 0; i < itemsToHide.length;i++){
//          itemsToHide[i].classList.remove("hide")
//      }
// }
//
// })
// });

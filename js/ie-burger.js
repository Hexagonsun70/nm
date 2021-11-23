class TempScrollBox {
  constructor() {
    this.scrollBarWidth = 0;
    this.measureScrollbarWidth();
  }
  measureScrollbarWidth() {
    // Add temporary box to wrapper
    let scrollbox = document.createElement('div');
    // Make box scrollable
    scrollbox.style.overflow = 'scroll';
    // Append box to document
    document.body.appendChild(scrollbox);
    // Measure inner width of box
    this.scrollBarWidth = scrollbox.offsetWidth - scrollbox.clientWidth;
    // Remove box
    document.body.removeChild(scrollbox);
  }
  get width() {
    return this.scrollBarWidth;
  }
}

// class MeasureSidebar {
//   constructor() {
//     this.sidebarWidth = 0;
//     this.measureSidebarWidth();
//   }
//   measureSidebarWidth(){
//     let sidebar = document.getElementById("sb-width");
//     this.sidebarWidth = sidebar.offsetWidth - sidebar.clientWidth;
//   }
//   get widthTwo() {
//     return this.sidebarWidth;
//   }
// }

let scrollbox = new TempScrollBox();
let transformStart  = `translateX(${scrollbox.width}px + 257px)`;
let transformLeft = `translateX(0)`;



console.log(scrollbox.width); //-> 17 (Windows, Chrome)
console.log(transformStart); //-> translateX(17px + 257px) (Windows, Chrome)

const shiftContent = $("#nav, main, footer");

$(".hamburger").click(function () {
  $(".hamburger").addClass("is-active");
  shiftContent.css("transition", "transform 0.4s");
  shiftContent.css("transition-timing-function", "ease-in");
  $('.carousel').slick('slickNext');
  $(".sb").css("transition", "transform 0.4s");
  $(".sb").css("transition-timing-function", "ease-in");
  shiftContent.removeClass("burger-shift-right");
  shiftContent.addClass("burger-shift-left");
  $(".mask-click").addClass("hamburger-mask");
  $("body").addClass("no-scroll");
  $(".sb").css("transform", `${transformLeft}`);
});

$(".mask-click").click(function () {
  $(".hamburger").removeClass("is-active");
  shiftContent.removeClass("burger-shift-left");
  shiftContent.addClass("burger-shift-right");
  $(".mask-click").removeClass("hamburger-mask");
  $("body").removeClass("no-scroll");
  $(".sb").css("transform", `0`);
});

$('.sb--ul').hover(
  function() {
  $(this).siblings().children().css(
  'background-color', 'rgba(102,102,102, 0.15)');
  },function(){
    $(this).siblings().children().css('background-color', '#2333645');
  }
);

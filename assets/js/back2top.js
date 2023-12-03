
function initBackToTop() {
  return {
    scrolled: false,
    height: 60,
    scroll: function scroll(e) {
      var button = document.getElementById("fresh_backtotop");
      var scrollValue = window.scrollY;

      if (scrollValue >= this.height) {
        this.scrolled = true;
        button.classList.add("visible");
      } else {
        this.scrolled = false;
        button.classList.remove("visible");
      }
    },
    goTop: function goTop(e) {
      var elementPosition = e.target.offsetTop;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
  };
};

window.initBackToTop = initBackToTop;


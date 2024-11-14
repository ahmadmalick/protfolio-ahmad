jQuery(document).ready(function () {

  setTimeout(function () {
    jQuery('body').addClass('preloader');
  }, 6000); // 4000 milliseconds = 4 second

  jQuery(document).on('scroll', function () {
    if (jQuery(document).scrollTop() > 0) {
      jQuery('header, body').addClass('shrink');
    } else {
      jQuery('header, body').removeClass('shrink');
    }
  });


  jQuery('.accordion-header').on('click keypress', function (e) {
    // Check if the event is a click or the Enter/Space keypress
    if (e.type === 'click' || (e.type === 'keypress' && (e.key === 'Enter' || e.key === ' '))) {
      // Get the current header and content
      const $currentHeader = jQuery(this);
      const $currentContent = $currentHeader.next('.accordion-content');

      // Check if this section is already active
      const isExpanded = $currentHeader.hasClass('active');

      // Collapse all sections
      jQuery('.accordion-header').removeClass('active').attr('aria-expanded', 'false');
      jQuery('.accordion-content').slideUp().attr('aria-hidden', 'true');

      // If this section was not already active, expand it
      if (!isExpanded) {
        $currentHeader.addClass('active').attr('aria-expanded', 'true');
        $currentContent.slideDown().attr('aria-hidden', 'false');
      }
    }
  });

  (function () {

    function reveal() {
      var wrapper = document.querySelectorAll(".wrapper");

      wrapper.forEach(function (parent, index) {
        var windowHeight = window.innerHeight;
        var elementTop = parent.getBoundingClientRect().top;
        var elementVisible = 350;

        if (elementTop < windowHeight - elementVisible) {
          var reveals = parent.querySelectorAll(".js-animate-element");

          reveals.forEach(function (ele, index) {
            setTimeout(function () {
              ele.classList.add("insight");
            }, index * 500);
          });
        }
      });
    }

    window.addEventListener("scroll", reveal);
    reveal();

  })(jQuery);
  // let $typeJsText = jQuery(".typeJsText");
  // let textArray = $typeJsText.data("typetext").split("");
  // let counter = -1;

  // $typeJsText.text("");

  // function typeJs() {
  //   if (counter < $typeJsText.data("typetext").length) {
  //     counter++;
  //     $typeJsText.text($typeJsText.data("typetext").charAt(counter));
  //     textArray = $typeJsText.data("typetext").split("");
  //   } else {
  //     textArray.pop();
  //     $typeJsText.text(textArray.join(""));
  //     if (textArray.length == 0) {
  //       counter = -1;
  //     }
  //   }
  // }

  // setInterval(() => {
  //   typeJs();
  // }, 100);
});

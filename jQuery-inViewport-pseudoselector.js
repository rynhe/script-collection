/*
* Find the selector if its in the viewport
*/
(function($) {
  $.belowthefold = function(d, e) { return $(window).height() + $(window).scrollTop() <= $(d).offset().top - e.threshold };
  $.abovethetop = function(d, e) { return $(window).scrollTop() >= $(d).offset().top + $(d).height() - e.threshold };
  $.rightofscreen = function(d, e) { return $(window).width() + $(window).scrollLeft() <= $(d).offset().left - e.threshold };
  $.leftofscreen = function(d, e) { return $(window).scrollLeft() >= $(d).offset().left + $(d).width() - e.threshold };
  $.inviewport = function(d, e) { return !$.rightofscreen(d, e) && !$.leftofscreen(d,e) && !$.belowthefold(d, e) && !$.abovethetop(d, e) };
  $.extend($.expr[":"], {
    "below-the-fold": function(d) {
      return $.belowthefold(d, { threshold: 0 })
    },
    "above-the-top": function(d) {
      return $.abovethetop(d, { threshold: 0 })
    },
    "left-of-screen": function(d) {
      return $.leftofscreen(d, { threshold: 0 })
    },
    "right-of-screen": function(d) {
      return $.rightofscreen(d, { threshold: 0 })
    },
    "in-viewport": function(d) {
      return $.inviewport(d, { threshold: 0 })
    }
  })
})(jQuery);

/*Example*/
$("#footer:in-viewport")

/* Reference : http://whois.wildlife.la/static/javascript/wildlife.js */

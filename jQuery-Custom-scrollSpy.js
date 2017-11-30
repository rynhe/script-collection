/*
* Based on element in viewport,make menu active
*/
$(window).on("scroll", function() {
  var e = $(document).scrollTop();
  $("body > section").each(function() {
    var a = $(this);
    a.offset().top - 1 < e && !a.hasClass("previous") && (a.addClass("previous"), $("nav ul li").removeClass("active"), "contact" != a.attr("id") ? $('nav ul li[data-section="' + a.attr("id") + '"]').addClass("active") : $('nav ul li[data-section="prestations"]').addClass("active")), a.offset().top + 1 > e && a.hasClass("previous") && (a.removeClass("previous"), $("nav ul li").removeClass("active"), "contact" != a.attr("id") ? $('nav ul li[data-section="' + a.attr("id") + '"]').addClass("active") : $('nav ul li[data-section="prestations"]').addClass("active")), 0 == e && ($("#introduction").removeClass("previous"), $("nav ul li").removeClass("active"), $('nav ul li[data-section="introduction"]').addClass("active"))
  }), $(".twist").length > 0 && $(".twist").each(function() {
    var a = $(this);
    a.offset().top - $(window).height() / 1.5 < e && !a.hasClass("visible") && a.addClass("visible")
  })
})

/* Reference : http://www.ultimate-sun-drive.com/en/ - left menu section */

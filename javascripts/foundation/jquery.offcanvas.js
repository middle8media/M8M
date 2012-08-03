
jQuery(function() {
  // Set the negative margin on the top menu for slide-menu pages
  var jQueryselector1 = jQuery('#topMenu'),
    events = 'click.fndtn touchstart.fndtn';
  if (jQueryselector1.length > 0) jQueryselector1.css("margin-top", jQueryselector1.height() * -1);

  // Watch for clicks to show the sidebar
  var jQueryselector2 = jQuery('#sidebarButton');
  if (jQueryselector2.length > 0) {
    jQuery('#sidebarButton').on(events, function(e) {
      e.preventDefault();
      jQuery('body').toggleClass('active');
    });
  }

  // Watch for clicks to show the menu for slide-menu pages
  var jQueryselector3 = jQuery('#menuButton');
  if (jQueryselector3.length > 0)  {
    jQuery('#menuButton').on(events, function(e) {
      e.preventDefault();
      jQuery('body').toggleClass('active-menu');
    });
  }

  // Adjust sidebars and sizes when resized
  jQuery(window).resize(function() {
    jQuery('body').removeClass('active');
    var jQueryselector4 = jQuery('#topMenu');
    if (jQueryselector4.length > 0) jQueryselector4.css("margin-top", jQueryselector4.height() * -1);
  });

  // Switch panels for the paneled nav on mobile
  var jQueryselector5 = jQuery('#switchPanels');
  if (jQueryselector5.length > 0)  {
    jQuery('#switchPanels dd').on(events, function(e) {
      e.preventDefault();
      var switchToPanel = jQuery(this).children('a').attr('href'),
          switchToIndex = jQuery(switchToPanel).index();
      jQuery(this).toggleClass('active').siblings().removeClass('active');
      jQuery(switchToPanel).parent().css("left", (switchToIndex * (-100) + '%'));
    });
  }

  jQuery('#nav li a').on(events, function(e) {
    e.preventDefault();
    var href = jQuery(this).attr('href'),
      jQuerytarget = jQuery(href);
    jQuery('html, body').animate({scrollTop : jQuerytarget.offset().top}, 300);
  });
});

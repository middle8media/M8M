jQuery(document).ready(function ($) {

  /* Use this js doc for all application specific JS */

  /* TABS --------------------------------- */
  /* Remove if you don't need :) */

  function activateTab($tab) {
    var $activeTab = $tab.closest('dl').find('dd.active'),
        contentLocation = $tab.children('a').attr("href") + 'Tab';

    // Strip off the current url that IE adds
    contentLocation = contentLocation.replace(/^.+#/, '#');

    //Make Tab Active
    $activeTab.removeClass('active');
    $tab.addClass('active');

    //Show Tab Content
    $(contentLocation).closest('.tabs-content').children('li').removeClass('active').hide();
    $(contentLocation).css('display', 'block').addClass('active');
  }

  $('dl.tabs dd a').on('click.fndtn', function (event) {
    activateTab($(this).parent('dd'));
  });

  if (window.location.hash) {
    activateTab($('a[href="' + window.location.hash + '"]').parent('dd'));
    $.foundation.customForms.appendCustomMarkup();
  }

  /* ALERT BOXES ------------ */
  $(".alert-box").delegate("a.close", "click", function(event) {
    event.preventDefault();
    $(this).closest(".alert-box").fadeOut(function(event){
      $(this).remove();
    });
  });

  /* PLACEHOLDER FOR FORMS ------------- */
  /* Remove this and jquery.placeholder.min.js if you don't need :) */
  $('input, textarea').placeholder();

  /* TOOLTIPS ------------ */
  $(this).tooltips();

  /* UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE6/7/8 SUPPORT AND ARE USING .block-grids */
  //  $('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'left'});
  //  $('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'left'});
  //  $('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'left'});
  //  $('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'left'});


  /* DROPDOWN NAV ------------- */

  var lockNavBar = false;
  /* Windows Phone, sadly, does not register touch events :( */
  if (Modernizr.touch || navigator.userAgent.match(/Windows Phone/i)) {
    $('.nav-bar a.flyout-toggle').on('click.fndtn touchstart.fndtn', function(e) {
      e.preventDefault();
      var flyout = $(this).siblings('.flyout').first();
      if (lockNavBar === false) {
        $('.nav-bar .flyout').not(flyout).slideUp(500);
        flyout.slideToggle(500, function(){
          lockNavBar = false;
        });
      }
      lockNavBar = true;
    });
    $('.nav-bar>li.has-flyout').addClass('is-touch');
  } else {
    $('.nav-bar>li.has-flyout').hover(function() {
      $(this).children('.flyout').show();
    }, function() {
      $(this).children('.flyout').hide();
    });
  }

  /* DISABLED BUTTONS ------------- */
  /* Gives elements with a class of 'disabled' a return: false; */

  /* SPLIT BUTTONS/DROPDOWNS */
  $('.button.dropdown > ul').addClass('no-hover');

  $('.button.dropdown').on('click.fndtn touchstart.fndtn', function (e) {
    e.stopPropagation();
  });
  $('.button.dropdown.split span').on('click.fndtn touchstart.fndtn', function (e) {
    e.preventDefault();
    $('.button.dropdown').not($(this).parent()).children('ul').removeClass('show-dropdown');
    $(this).siblings('ul').toggleClass('show-dropdown');
  });
  $('.button.dropdown').not('.split').on('click.fndtn touchstart.fndtn', function (e) {
    $('.button.dropdown').not(this).children('ul').removeClass('show-dropdown');
    $(this).children('ul').toggleClass('show-dropdown');
  });
  $('body, html').on('click.fndtn touchstart.fndtn', function () {
    $('.button.dropdown ul').removeClass('show-dropdown');
  });

  // Positioning the Flyout List
  var normalButtonHeight  = $('.button.dropdown:not(.large):not(.small):not(.tiny)').outerHeight() - 1,
      largeButtonHeight   = $('.button.large.dropdown').outerHeight() - 1,
      smallButtonHeight   = $('.button.small.dropdown').outerHeight() - 1,
      tinyButtonHeight    = $('.button.tiny.dropdown').outerHeight() - 1;

  $('.button.dropdown:not(.large):not(.small):not(.tiny) > ul').css('top', normalButtonHeight);
  $('.button.dropdown.large > ul').css('top', largeButtonHeight);
  $('.button.dropdown.small > ul').css('top', smallButtonHeight);
  $('.button.dropdown.tiny > ul').css('top', tinyButtonHeight);

  /* CUSTOM FORMS */
  $.foundation.customForms.appendCustomMarkup();

});

/*global jQuery */
/*!
* FitVids 1.0
*
* Copyright 2011, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
* Date: Thu Sept 01 18:00:00 2011 -0500
*/

(function( $ ){

  $.fn.fitVids = function( options ) {
    var settings = {
      customSelector: null
    }

    var div = document.createElement('div'),
        ref = document.getElementsByTagName('base')[0] || document.getElementsByTagName('script')[0];

    div.className = 'fit-vids-style';
    div.innerHTML = '&shy;<style>         \
      .fluid-width-video-wrapper {        \
         width: 100%;                     \
         position: relative;              \
         padding: 0;                      \
      }                                   \
                                          \
      .fluid-width-video-wrapper iframe,  \
      .fluid-width-video-wrapper object,  \
      .fluid-width-video-wrapper embed {  \
         position: absolute;              \
         top: 0;                          \
         left: 0;                         \
         width: 100%;                     \
         height: 100%;                    \
      }                                   \
    </style>';

    ref.parentNode.insertBefore(div,ref);

    if ( options ) {
      $.extend( settings, options );
    }

    return this.each(function(){
      var selectors = [
        "iframe[src*='player.vimeo.com']",
        "iframe[src*='www.youtube.com']",
        "iframe[src*='www.kickstarter.com']",
        "object",
        "embed"
      ];

      if (settings.customSelector) {
        selectors.push(settings.customSelector);
      }

      var $allVideos = $(this).find(selectors.join(','));

      $allVideos.each(function(){
        var $this = $(this);
        if (this.tagName.toLowerCase() == 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) { return; }
        var height = this.tagName.toLowerCase() == 'object' ? $this.attr('height') : $this.height(),
            aspectRatio = height / $this.width();
    if(!$this.attr('id')){
      var videoID = 'fitvid' + Math.floor(Math.random()*999999);
      $this.attr('id', videoID);
    }
        $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100)+"%");
        $this.removeAttr('height').removeAttr('width');
      });
    });

  }
})( jQuery );

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
  def: 'easeOutQuad',
  swing: function (x, t, b, c, d) {
    //alert(jQuery.easing.default);
    return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
  },
  easeInQuad: function (x, t, b, c, d) {
    return c*(t/=d)*t + b;
  },
  easeOutQuad: function (x, t, b, c, d) {
    return -c *(t/=d)*(t-2) + b;
  },
  easeInOutQuad: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t + b;
    return -c/2 * ((--t)*(t-2) - 1) + b;
  },
  easeInCubic: function (x, t, b, c, d) {
    return c*(t/=d)*t*t + b;
  },
  easeOutCubic: function (x, t, b, c, d) {
    return c*((t=t/d-1)*t*t + 1) + b;
  },
  easeInOutCubic: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t + b;
    return c/2*((t-=2)*t*t + 2) + b;
  },
  easeInQuart: function (x, t, b, c, d) {
    return c*(t/=d)*t*t*t + b;
  },
  easeOutQuart: function (x, t, b, c, d) {
    return -c * ((t=t/d-1)*t*t*t - 1) + b;
  },
  easeInOutQuart: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
    return -c/2 * ((t-=2)*t*t*t - 2) + b;
  },
  easeInQuint: function (x, t, b, c, d) {
    return c*(t/=d)*t*t*t*t + b;
  },
  easeOutQuint: function (x, t, b, c, d) {
    return c*((t=t/d-1)*t*t*t*t + 1) + b;
  },
  easeInOutQuint: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
    return c/2*((t-=2)*t*t*t*t + 2) + b;
  },
  easeInSine: function (x, t, b, c, d) {
    return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
  },
  easeOutSine: function (x, t, b, c, d) {
    return c * Math.sin(t/d * (Math.PI/2)) + b;
  },
  easeInOutSine: function (x, t, b, c, d) {
    return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
  },
  easeInExpo: function (x, t, b, c, d) {
    return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
  },
  easeOutExpo: function (x, t, b, c, d) {
    return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
  },
  easeInOutExpo: function (x, t, b, c, d) {
    if (t==0) return b;
    if (t==d) return b+c;
    if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
    return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
  },
  easeInCirc: function (x, t, b, c, d) {
    return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
  },
  easeOutCirc: function (x, t, b, c, d) {
    return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
  },
  easeInOutCirc: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
    return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
  },
  easeInElastic: function (x, t, b, c, d) {
    var s=1.70158;var p=0;var a=c;
    if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
    if (a < Math.abs(c)) { a=c; var s=p/4; }
    else var s = p/(2*Math.PI) * Math.asin (c/a);
    return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
  },
  easeOutElastic: function (x, t, b, c, d) {
    var s=1.70158;var p=0;var a=c;
    if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
    if (a < Math.abs(c)) { a=c; var s=p/4; }
    else var s = p/(2*Math.PI) * Math.asin (c/a);
    return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
  },
  easeInOutElastic: function (x, t, b, c, d) {
    var s=1.70158;var p=0;var a=c;
    if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
    if (a < Math.abs(c)) { a=c; var s=p/4; }
    else var s = p/(2*Math.PI) * Math.asin (c/a);
    if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
  },
  easeInBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c*(t/=d)*t*((s+1)*t - s) + b;
  },
  easeOutBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
  },
  easeInOutBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
    return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
  },
  easeInBounce: function (x, t, b, c, d) {
    return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
  },
  easeOutBounce: function (x, t, b, c, d) {
    if ((t/=d) < (1/2.75)) {
      return c*(7.5625*t*t) + b;
    } else if (t < (2/2.75)) {
      return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
    } else if (t < (2.5/2.75)) {
      return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
    } else {
      return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
    }
  },
  easeInOutBounce: function (x, t, b, c, d) {
    if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
    return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
  }
});

/*!
 * fancyBox - jQuery Plugin
 * version: 2.0.6 (16/04/2012)
 * @requires jQuery v1.6 or later
 *
 * Examples at http://fancyapps.com/fancybox/
 * License: www.fancyapps.com/fancybox/#license
 *
 * Copyright 2012 Janis Skarnelis - janis@fancyapps.com
 *
 */

(function (window, document, $, undefined) {
  "use strict";

  var W = $(window),
    D = $(document),
    F = $.fancybox = function () {
      F.open.apply( this, arguments );
    },
    didResize = false,
    resizeTimer = null,
    isTouch   = document.createTouch !== undefined,
    isString  = function(str) {
      return $.type(str) === "string";
    },
    isPercentage = function(str) {
      return isString(str) && str.indexOf('%') > 0;
    },
    getValue = function(value, dim) {
      if (dim && isPercentage(value)) {
        value = F.getViewport()[ dim ] / 100 * parseInt(value, 10);
      }

      return Math.round(value) + 'px';
    };

  $.extend(F, {
    // The current version of fancyBox
    version: '2.0.5',

    defaults: {
      padding: 15,
      margin: 20,

      width: 800,
      height: 600,
      minWidth: 100,
      minHeight: 100,
      maxWidth: 9999,
      maxHeight: 9999,

      autoSize: true,
      autoResize: !isTouch,
      autoCenter : !isTouch,
      fitToView: true,
      aspectRatio: false,
      topRatio: 0.5,

      fixed: false,
      scrolling: 'auto', // 'auto', 'yes' or 'no'
      wrapCSS: '',

      arrows: true,
      closeBtn: true,
      closeClick: false,
      nextClick : false,
      mouseWheel: true,
      autoPlay: false,
      playSpeed: 3000,
      preload : 3,

      modal: false,
      loop: true,
      ajax: { dataType: 'html', headers: { 'X-fancyBox': true } },
      keys: {
        next: [13, 32, 34, 39, 40], // enter, space, page down, right arrow, down arrow
        prev: [8, 33, 37, 38], // backspace, page up, left arrow, up arrow
        close: [27] // escape key
      },

      // Override some properties
      index: 0,
      type: null,
      href: null,
      content: null,
      title: null,

      // HTML templates
      tpl: {
        wrap: '<div class="fancybox-wrap"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
        image: '<img class="fancybox-image" src="{href}" alt="" />',
        iframe: '<iframe class="fancybox-iframe" name="fancybox-frame{rnd}" frameborder="0" hspace="0"' + ($.browser.msie ? ' allowtransparency="true"' : '') + '></iframe>',
        swf: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="wmode" value="transparent" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{href}" /><embed src="{href}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="100%" height="100%" wmode="transparent"></embed></object>',
        error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
        closeBtn: '<div title="Close" class="fancybox-item fancybox-close"></div>',
        next: '<a title="Next" class="fancybox-nav fancybox-next"><span></span></a>',
        prev: '<a title="Previous" class="fancybox-nav fancybox-prev"><span></span></a>'
      },

      // Properties for each animation type
      // Opening fancyBox
      openEffect: 'fade', // 'elastic', 'fade' or 'none'
      openSpeed: 300,
      openEasing: 'swing',
      openOpacity: true,
      openMethod: 'zoomIn',

      // Closing fancyBox
      closeEffect: 'fade', // 'elastic', 'fade' or 'none'
      closeSpeed: 300,
      closeEasing: 'swing',
      closeOpacity: true,
      closeMethod: 'zoomOut',

      // Changing next gallery item
      nextEffect: 'fade', // 'elastic', 'fade' or 'none'
      nextSpeed: 300,
      nextEasing: 'swing',
      nextMethod: 'changeIn',

      // Changing previous gallery item
      prevEffect: 'fade', // 'elastic', 'fade' or 'none'
      prevSpeed: 300,
      prevEasing: 'swing',
      prevMethod: 'changeOut',

      // Enabled helpers
      helpers: {
        overlay: {
          speedIn: 0,
          speedOut: 300,
          opacity: 0.8,
          css: {
            cursor: 'pointer'
          },
          closeClick: true
        },
        title: {
          type: 'float' // 'float', 'inside', 'outside' or 'over'
        }
      },

      // Callbacks
      onCancel: $.noop, // If canceling
      beforeLoad: $.noop, // Before loading
      afterLoad: $.noop, // After loading
      beforeShow: $.noop, // Before changing in current item
      afterShow: $.noop, // After opening
      beforeClose: $.noop, // Before closing
      afterClose: $.noop // After closing
    },

    //Current state
    group: {}, // Selected group
    opts: {}, // Group options
    coming: null, // Element being loaded
    current: null, // Currently loaded element
    isOpen: false, // Is currently open
    isOpened: false, // Have been fully opened at least once
    wrap: null,
    skin: null,
    outer: null,
    inner: null,

    player: {
      timer: null,
      isActive: false
    },

    // Loaders
    ajaxLoad: null,
    imgPreload: null,

    // Some collections
    transitions: {},
    helpers: {},

    /*
     *  Static methods
     */

    open: function (group, opts) {
      //Kill existing instances
      F.close(true);

      //Normalize group
      if (group && !$.isArray(group)) {
        group = group instanceof $ ? $(group).get() : [group];
      }

      F.isActive = true;

      //Extend the defaults
      F.opts = $.extend(true, {}, F.defaults, opts);

      //All options are merged recursive except keys
      if ($.isPlainObject(opts) && opts.keys !== undefined) {
        F.opts.keys = opts.keys ? $.extend({}, F.defaults.keys, opts.keys) : false;
      }

      F.group = group;

      F._start(F.opts.index || 0);
    },

    cancel: function () {
      if (F.coming && false === F.trigger('onCancel')) {
        return;
      }

      F.coming = null;

      F.hideLoading();

      if (F.ajaxLoad) {
        F.ajaxLoad.abort();
      }

      F.ajaxLoad = null;

      if (F.imgPreload) {
        F.imgPreload.onload = F.imgPreload.onabort = F.imgPreload.onerror = null;
      }
    },

    close: function (a) {
      F.cancel();

      if (!F.current || false === F.trigger('beforeClose')) {
        return;
      }

      F.unbindEvents();

      //If forced or is still opening then remove immediately
      if (!F.isOpen || (a && a[0] === true)) {
        $('.fancybox-wrap').stop().trigger('onReset').remove();

        F._afterZoomOut();

      } else {
        F.isOpen = F.isOpened = false;

        $('.fancybox-item, .fancybox-nav').remove();

        F.wrap.stop(true).removeClass('fancybox-opened');
        F.inner.css('overflow', 'hidden');

        F.transitions[F.current.closeMethod]();
      }
    },

    // Start/stop slideshow
    play: function (a) {
      var clear = function () {
          clearTimeout(F.player.timer);
        },
        set = function () {
          clear();

          if (F.current && F.player.isActive) {
            F.player.timer = setTimeout(F.next, F.current.playSpeed);
          }
        },
        stop = function () {
          clear();

          $('body').unbind('.player');

          F.player.isActive = false;

          F.trigger('onPlayEnd');
        },
        start = function () {
          if (F.current && (F.current.loop || F.current.index < F.group.length - 1)) {
            F.player.isActive = true;

            $('body').bind({
              'afterShow.player onUpdate.player': set,
              'onCancel.player beforeClose.player': stop,
              'beforeLoad.player': clear
            });

            set();

            F.trigger('onPlayStart');
          }
        };

      if (F.player.isActive || (a && a[0] === false)) {
        stop();
      } else {
        start();
      }
    },

    next: function () {
      if (F.current) {
        F.jumpto(F.current.index + 1);
      }
    },

    prev: function () {
      if (F.current) {
        F.jumpto(F.current.index - 1);
      }
    },

    jumpto: function (index) {
      if (!F.current) {
        return;
      }

      index = parseInt(index, 10);

      if (F.group.length > 1 && F.current.loop) {
        if (index >= F.group.length) {
          index = 0;

        } else if (index < 0) {
          index = F.group.length - 1;
        }
      }

      if (F.group[index] !== undefined) {
        F.cancel();

        F._start(index);
      }
    },

    reposition: function (e, onlyAbsolute) {
      var pos;

      if (F.isOpen) {
        pos = F._getPosition(onlyAbsolute);

        if (e && e.type === 'scroll') {
          delete pos.position;

          F.wrap.stop(true, true).animate(pos, 200);

        } else {
          F.wrap.css(pos);
        }
      }
    },

    update: function (e) {
      if (!F.isOpen) {
        return;
      }

      // Run this code after a delay for better performance
      if (!didResize) {
        resizeTimer = setTimeout(function () {
          var current = F.current, anyway = !e || (e && e.type === 'orientationchange');

          if (didResize) {
            didResize = false;

            if (!current) {
              return;
            }

            if ((!e || e.type !== 'scroll') || anyway) {
              if (current.autoSize && current.type !== 'iframe') {
                F.inner.height('auto');
                current.height = F.inner.height();
              }

              if (current.autoResize || anyway) {
                F._setDimension();
              }

              if (current.canGrow && current.type !== 'iframe') {
                F.inner.height('auto');
              }
            }

            if (current.autoCenter || anyway) {
              F.reposition(e);
            }

            F.trigger('onUpdate');
          }
        }, 200);
      }

      didResize = true;
    },

    toggle: function () {
      if (F.isOpen) {
        F.current.fitToView = !F.current.fitToView;

        F.update();
      }
    },

    hideLoading: function () {
      D.unbind('keypress.fb');

      $('#fancybox-loading').remove();
    },

    showLoading: function () {
      F.hideLoading();

      //If user will press the escape-button, the request will be canceled
      D.bind('keypress.fb', function(e) {
        if (e.keyCode === 27) {
          e.preventDefault();
          F.cancel();
        }
      });

      $('<div id="fancybox-loading"><div></div></div>').click(F.cancel).appendTo('body');
    },

    getViewport: function () {
      // See http://bugs.jquery.com/ticket/6724
      return {
        x: W.scrollLeft(),
        y: W.scrollTop(),
        w: isTouch && window.innerWidth ? window.innerWidth : W.width(),
        h: isTouch && window.innerHeight ? window.innerHeight : W.height()
      };
    },

    // Unbind the keyboard / clicking actions
    unbindEvents: function () {
      if (F.wrap) {
        F.wrap.unbind('.fb');
      }

      D.unbind('.fb');
      W.unbind('.fb');
    },

    bindEvents: function () {
      var current = F.current,
        keys = current.keys;

      if (!current) {
        return;
      }

      W.bind('resize.fb orientationchange.fb' + (current.autoCenter && !current.fixed ? ' scroll.fb' : ''), F.update);

      if (keys) {
        D.bind('keydown.fb', function (e) {
          var code, target = e.target || e.srcElement;

          // Ignore key combinations and key events within form elements
          if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && !(target && (target.type || $(target).is('[contenteditable]')))) {
            code = e.keyCode;

            if ($.inArray(code, keys.close) > -1) {
              F.close();
              e.preventDefault();

            } else if ($.inArray(code, keys.next) > -1) {
              F.next();
              e.preventDefault();

            } else if ($.inArray(code, keys.prev) > -1) {
              F.prev();
              e.preventDefault();
            }
          }
        });
      }

      if ($.fn.mousewheel && current.mouseWheel && F.group.length > 1) {
        F.wrap.bind('mousewheel.fb', function (e, delta) {
          var target = e.target || null;

          if (delta !== 0 && (!target || target.clientHeight === 0 || (target.scrollHeight === target.clientHeight && target.scrollWidth === target.clientWidth))) {
            e.preventDefault();

            F[delta > 0 ? 'prev' : 'next']();
          }
        });
      }
    },

    trigger: function (event, o) {
      var ret, obj = o || F[ $.inArray(event, ['onCancel', 'beforeLoad', 'afterLoad']) > -1 ? 'coming' : 'current' ];

      if (!obj) {
        return;
      }

      if ($.isFunction( obj[event] )) {
        ret = obj[event].apply(obj, Array.prototype.slice.call(arguments, 1));
      }

      if (ret === false) {
        return false;
      }

      if (obj.helpers) {
        $.each(obj.helpers, function (helper, opts) {
          if (opts && $.isPlainObject(F.helpers[helper]) && $.isFunction(F.helpers[helper][event])) {
            F.helpers[helper][event](opts, obj);
          }
        });
      }

      $.event.trigger(event + '.fb');
    },

    isImage: function (str) {
      return isString(str) && str.match(/\.(jpe?g|gif|png|bmp)((\?|#).*)?$/i);
    },

    isSWF: function (str) {
      return isString(str) && str.match(/\.(swf)((\?|#).*)?$/i);
    },

    _start: function (index) {
      var coming = {},
        element = F.group[index] || null,
        isDom,
        href,
        type,
        rez,
        hrefParts;

      if (element && (element.nodeType || element instanceof $)) {
        isDom = true;

        if ($.metadata) {
          coming = $(element).metadata();
        }
      }

      coming = $.extend(true, {}, F.opts, {index : index, element : element}, ($.isPlainObject(element) ? element : coming));

      // Re-check overridable options
      $.each(['href', 'title', 'content', 'type'], function(i,v) {
        coming[v] = F.opts[ v ] || (isDom && $(element).attr( v )) || coming[ v ] || null;
      });

      // Convert margin property to array - top, right, bottom, left
      if (typeof coming.margin === 'number') {
        coming.margin = [coming.margin, coming.margin, coming.margin, coming.margin];
      }

      // 'modal' propery is just a shortcut
      if (coming.modal) {
        $.extend(true, coming, {
          closeBtn : false,
          closeClick: false,
          nextClick : false,
          arrows : false,
          mouseWheel : false,
          keys : null,
          helpers: {
            overlay : {
              css: {
                cursor : 'auto'
              },
              closeClick : false
            }
          }
        });
      }

      //Give a chance for callback or helpers to update coming item (type, title, etc)
      F.coming = coming;

      if (false === F.trigger('beforeLoad')) {
        F.coming = null;
        return;
      }

      type = coming.type;
      href = coming.href || element;

      ///Check if content type is set, if not, try to get
      if (!type) {
        if (isDom) {
          type = $(element).data('fancybox-type');

          if (!type) {
            rez = element.className.match(/fancybox\.(\w+)/);
            type = rez ? rez[1] : null;
          }
        }

        if (!type && isString(href)) {
          if (F.isImage(href)) {
            type = 'image';

          } else if (F.isSWF(href)) {
            type = 'swf';

          } else if (href.match(/^#/)) {
            type = 'inline';
          }
        }

        // ...if not - display element itself
        if (!type) {
          type = isDom ? 'inline' : 'html';
        }

        coming.type = type;
      }

      // Check before try to load; 'inline' and 'html' types need content, others - href
      if (type === 'inline' || type === 'html') {
        if (!coming.content) {
          if (type === 'inline') {
            coming.content = $( isString(href) ? href.replace(/.*(?=#[^\s]+$)/, '') : href ); //strip for ie7

          } else {
            coming.content = element;
          }
        }

        if (!coming.content || !coming.content.length) {
          type = null;
        }

      } else if (!href) {
        type = null;
      }

      /*
       * Add reference to the group, so it`s possible to access from callbacks, example:
       * afterLoad : function() {
       *     this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
       * }
       */

      if (type === 'ajax' && isString(href)) {
        hrefParts = href.split(/\s+/, 2);

        href = hrefParts.shift();
        coming.selector = hrefParts.shift();
      }

      coming.href  = href;
      coming.group = F.group;
      coming.isDom = isDom;

      switch (type) {
        case 'image':
          F._loadImage();
          break;

        case 'ajax':
          F._loadAjax();
          break;

        case 'inline':
        case 'iframe':
        case 'swf':
        case 'html':
          F._afterLoad();
          break;

        default:
          F._error( 'type' );
      }
    },

    _error: function ( type ) {
      F.hideLoading();

      $.extend(F.coming, {
        type      : 'html',
        autoSize  : true,
        minWidth  : 0,
        minHeight : 0,
        padding   : 15,
        hasError  : type,
        content   : F.coming.tpl.error
      });

      F._afterLoad();
    },

    _loadImage: function () {
      // Reset preload image so it is later possible to check "complete" property
      var img = F.imgPreload = new Image();

      img.onload = function () {
        this.onload = this.onerror = null;

        F.coming.width  = this.width;
        F.coming.height = this.height;

        F._afterLoad();
      };

      img.onerror = function () {
        this.onload = this.onerror = null;

        F._error( 'image' );
      };

      img.src = F.coming.href;

      if (img.complete === undefined || !img.complete) {
        F.showLoading();
      }
    },

    _loadAjax: function () {
      F.showLoading();

      F.ajaxLoad = $.ajax($.extend({}, F.coming.ajax, {
        url: F.coming.href,
        error: function (jqXHR, textStatus) {
          if (F.coming && textStatus !== 'abort') {
            F._error( 'ajax', jqXHR );

          } else {
            F.hideLoading();
          }
        },
        success: function (data, textStatus) {
          if (textStatus === 'success') {
            F.coming.content = data;

            F._afterLoad();
          }
        }
      }));
    },

    _preloadImages: function() {
      var group = F.group,
        current = F.current,
        len = group.length,
        item,
        href,
        i,
        cnt = Math.min(current.preload, len - 1);

      if (!current.preload || group.length < 2) {
        return;
      }

      for (i = 1; i <= cnt; i += 1) {
        item = group[ (current.index + i ) % len ];
        href = item.href || $( item ).attr('href') || item;

        if (item.type === 'image' || F.isImage(href)) {
          new Image().src = href;
        }
      }
    },

    _afterLoad: function () {
      F.hideLoading();

      if (!F.coming || false === F.trigger('afterLoad', F.current)) {
        F.coming = false;

        return;
      }

      if (F.isOpened) {
        $('.fancybox-item, .fancybox-nav').remove();

        F.wrap.stop(true).removeClass('fancybox-opened');
        F.inner.css('overflow', 'hidden');

        F.transitions[F.current.prevMethod]();

      } else {
        $('.fancybox-wrap').stop().trigger('onReset').remove();

        F.trigger('afterClose');
      }

      F.unbindEvents();

      F.isOpen    = false;
      F.current   = F.coming;

      //Build the neccessary markup
      F.wrap  = $(F.current.tpl.wrap).addClass('fancybox-' + (isTouch ? 'mobile' : 'desktop') + ' fancybox-type-' + F.current.type + ' fancybox-tmp ' + F.current.wrapCSS).appendTo('body');
      F.skin  = $('.fancybox-skin', F.wrap).css('padding', getValue(F.current.padding));
      F.outer = $('.fancybox-outer', F.wrap);
      F.inner = $('.fancybox-inner', F.wrap);

      F._setContent();
    },

    _setContent: function () {
      var current = F.current,
        content = current.content,
        type    = current.type,
        minWidth    = current.minWidth,
        minHeight   = current.minHeight,
        maxWidth    = current.maxWidth,
        maxHeight   = current.maxHeight,
        loadingBay;

      switch (type) {
        case 'inline':
        case 'ajax':
        case 'html':
          if (current.selector) {
            content = $('<div>').html(content).find(current.selector);

          } else if (content instanceof $) {
            if (content.parent().hasClass('fancybox-inner')) {
              content.parents('.fancybox-wrap').unbind('onReset');
            }

            content = content.show().detach();

            $(F.wrap).bind('onReset', function () {
              content.appendTo('body').hide();
            });
          }

          if (current.autoSize) {
            loadingBay = $('<div class="fancybox-wrap ' + F.current.wrapCSS + ' fancybox-tmp"></div>')
              .appendTo('body')
              .css({
                minWidth    : getValue(minWidth, 'w'),
                minHeight   : getValue(minHeight, 'h'),
                maxWidth    : getValue(maxWidth, 'w'),
                maxHeight   : getValue(maxHeight, 'h')
              })
              .append(content);

            current.width = loadingBay.width();
            current.height = loadingBay.height();

            // Re-check to fix 1px bug in some browsers
            loadingBay.width( F.current.width );

            if (loadingBay.height() > current.height) {
              loadingBay.width(current.width + 1);

              current.width = loadingBay.width();
              current.height = loadingBay.height();
            }

            content = loadingBay.contents().detach();

            loadingBay.remove();
          }

          break;

        case 'image':
          content = current.tpl.image.replace('{href}', current.href);

          current.aspectRatio = true;
          break;

        case 'swf':
          content = current.tpl.swf.replace(/\{width\}/g, current.width).replace(/\{height\}/g, current.height).replace(/\{href\}/g, current.href);
          break;

        case 'iframe':
          content = $(current.tpl.iframe.replace('{rnd}', new Date().getTime()) )
            .attr('scrolling', current.scrolling)
            .attr('src', current.href);

          current.scrolling = isTouch ? 'scroll' : 'auto';

          break;
      }

      if (type === 'image' || type === 'swf') {
        current.autoSize = false;
        current.scrolling = 'visible';
      }

      if (type === 'iframe' && current.autoSize) {
        F.showLoading();

        F._setDimension();

        F.inner.css('overflow', current.scrolling);

        content.bind({
          onCancel : function() {
            $(this).unbind();

            F._afterZoomOut();
          },
          load : function() {
            F.hideLoading();

            try {
              if (this.contentWindow.document.location) {
                F.current.height = $(this).contents().find('body').height();
              }
            } catch (e) {
              F.current.autoSize = false;
            }

            F[ F.isOpen ? '_afterZoomIn' : '_beforeShow']();
          }
        }).appendTo(F.inner);

      } else {
        F.inner.append(content);

        F._beforeShow();
      }
    },

    _beforeShow : function() {
      F.coming = null;

      //Give a chance for helpers or callbacks to update elements
      F.trigger('beforeShow');

      //Set initial dimensions and hide
      F._setDimension();
      F.wrap.hide().removeClass('fancybox-tmp');

      F.bindEvents();

      F._preloadImages();

      F.transitions[ F.isOpened ? F.current.nextMethod : F.current.openMethod ]();
    },

    _setDimension: function () {
      var wrap      = F.wrap,
        inner     = F.inner,
        current   = F.current,
        viewport  = F.getViewport(),
        margin    = current.margin,
        padding2  = current.padding * 2,
        width     = current.width,
        height    = current.height,
        maxWidth  = current.maxWidth + padding2,
        maxHeight = current.maxHeight + padding2,
        minWidth  = current.minWidth + padding2,
        minHeight = current.minHeight + padding2,
        ratio,
        height_;

      viewport.w -= (margin[1] + margin[3]);
      viewport.h -= (margin[0] + margin[2]);

      if (isPercentage(width)) {
        width = (((viewport.w - padding2) * parseFloat(width)) / 100);
      }

      if (isPercentage(height)) {
        height = (((viewport.h - padding2) * parseFloat(height)) / 100);
      }

      ratio  = width / height;
      width  += padding2;
      height += padding2;

      if (current.fitToView) {
        maxWidth  = Math.min(viewport.w, maxWidth);
        maxHeight = Math.min(viewport.h, maxHeight);
      }

      if (current.aspectRatio) {
        if (width > maxWidth) {
          width = maxWidth;
          height = ((width - padding2) / ratio) + padding2;
        }

        if (height > maxHeight) {
          height = maxHeight;
          width = ((height - padding2) * ratio) + padding2;
        }

        if (width < minWidth) {
          width = minWidth;
          height = ((width - padding2) / ratio) + padding2;
        }

        if (height < minHeight) {
          height = minHeight;
          width = ((height - padding2) * ratio) + padding2;
        }

      } else {
        width = Math.max(minWidth, Math.min(width, maxWidth));
        height = Math.max(minHeight, Math.min(height, maxHeight));
      }

      width = Math.round(width);
      height = Math.round(height);

      //Reset dimensions
      $(wrap.add(inner)).width('auto').height('auto');

      inner.width(width - padding2).height(height - padding2);
      wrap.width(width);

      height_ = wrap.height(); // Real wrap height

      //Fit wrapper inside
      if (width > maxWidth || height_ > maxHeight) {
        while ((width > maxWidth || height_ > maxHeight) && width > minWidth && height_ > minHeight) {
          height = height - 10;

          if (current.aspectRatio) {
            width = Math.round(((height - padding2) * ratio) + padding2);

            if (width < minWidth) {
              width = minWidth;
              height = ((width - padding2) / ratio) + padding2;
            }

          } else {
            width = width - 10;
          }

          inner.width(width - padding2).height(height - padding2);
          wrap.width(width);

          height_ = wrap.height();
        }
      }

      current.dim = {
        width : getValue(width),
        height  : getValue(height_)
      };

      current.canGrow   = current.autoSize && height > minHeight && height < maxHeight;
      current.canShrink = false;
      current.canExpand = false;

      if ((width - padding2) < current.width || (height - padding2) < current.height) {
        current.canExpand = true;

      } else if ((width > viewport.w || height_ > viewport.h) && width > minWidth && height > minHeight) {
        current.canShrink = true;
      }

      F.innerSpace = height_ - padding2 - inner.height();
    },

    _getPosition: function (onlyAbsolute) {
      var current   = F.current,
        viewport    = F.getViewport(),
        margin      = current.margin,
        width       = F.wrap.width() + margin[1] + margin[3],
        height      = F.wrap.height() + margin[0] + margin[2],
        rez         = {
          position: 'absolute',
          top  : margin[0] + viewport.y,
          left : margin[3] + viewport.x
        };

      if (current.autoCenter && current.fixed && !onlyAbsolute && height <= viewport.h && width <= viewport.w) {
        rez = {
          position: 'fixed',
          top  : margin[0],
          left : margin[3]
        };
      }

      rez.top     = getValue(Math.max(rez.top, rez.top + ((viewport.h - height) * current.topRatio)));
      rez.left    = getValue(Math.max(rez.left, rez.left + ((viewport.w - width) * 0.5)));

      return rez;
    },

    _afterZoomIn: function () {
      var current = F.current, scrolling = current ? current.scrolling : 'no';

      if (!current) {
        return;
      }

      F.isOpen = F.isOpened = true;

      F.wrap.addClass('fancybox-opened');

      F.inner.css('overflow', scrolling === 'yes' ? 'scroll' : (scrolling === 'no' ? 'hidden' : scrolling));

      F.trigger('afterShow');

      F.update();

      //Assign a click event
      if (current.closeClick || current.nextClick) {
        F.inner.css('cursor', 'pointer').bind('click.fb', function(e) {
          if (!$(e.target).is('a') && !$(e.target).parent().is('a')) {
            F[ current.closeClick ? 'close' : 'next' ]();
          }
        });
      }

      //Create a close button
      if (current.closeBtn) {
        $(current.tpl.closeBtn).appendTo(F.skin).bind('click.fb', F.close);
      }

      //Create navigation arrows
      if (current.arrows && F.group.length > 1) {
        if (current.loop || current.index > 0) {
          $(current.tpl.prev).appendTo(F.outer).bind('click.fb', F.prev);
        }

        if (current.loop || current.index < F.group.length - 1) {
          $(current.tpl.next).appendTo(F.outer).bind('click.fb', F.next);
        }
      }

      if (F.opts.autoPlay && !F.player.isActive) {
        F.opts.autoPlay = false;

        F.play();
      }
    },

    _afterZoomOut: function () {
      var current = F.current;

      F.wrap.trigger('onReset').remove();

      $.extend(F, {
        group: {},
        opts: {},
        current: null,
        isActive: false,
        isOpened: false,
        isOpen: false,
        wrap: null,
        skin: null,
        outer: null,
        inner: null
      });

      F.trigger('afterClose', current);
    }
  });

  /*
   *  Default transitions
   */

  F.transitions = {
    getOrigPosition: function () {
      var current = F.current,
        element = current.element,
        padding = current.padding,
        orig    = $(current.orig),
        pos     = {},
        width   = 50,
        height  = 50,
        viewport;

      if (!orig.length && current.isDom && $(element).is(':visible')) {
        orig = $(element).find('img:first');

        if (!orig.length) {
          orig = $(element);
        }
      }

      if (orig.length) {
        pos = orig.offset();

        if (orig.is('img')) {
          width = orig.outerWidth();
          height = orig.outerHeight();
        }

      } else {
        viewport = F.getViewport();

        pos.top  = viewport.y + (viewport.h - height) * 0.5;
        pos.left = viewport.x + (viewport.w - width) * 0.5;
      }

      pos = {
        top     : getValue(pos.top - padding),
        left    : getValue(pos.left - padding),
        width   : getValue(width + padding * 2),
        height  : getValue(height + padding * 2)
      };

      return pos;
    },

    step: function (now, fx) {
      var prop = fx.prop, value, ratio;

      if (prop === 'width' || prop === 'height') {
        value = Math.ceil(now - (F.current.padding * 2));

        if (prop === 'height') {
          ratio = (now - fx.start) / (fx.end - fx.start);

          if (fx.start > fx.end) {
            ratio = 1 - ratio;
          }

          value -= F.innerSpace * ratio;
        }

        F.inner[prop](value);
      }
    },

    zoomIn: function () {
      var wrap     = F.wrap,
        current  = F.current,
        effect   = current.openEffect,
        elastic  = effect === 'elastic',
        dim      = current.dim,
        startPos = $.extend({}, dim, F._getPosition( elastic )),
        endPos   = $.extend({opacity : 1}, startPos);

      //Remove "position" property that breaks older IE
      delete endPos.position;

      if (elastic) {
        startPos = this.getOrigPosition();

        if (current.openOpacity) {
          startPos.opacity = 0;
        }

        F.outer.add(F.inner).width('auto').height('auto');

      } else if (effect === 'fade') {
        startPos.opacity = 0;
      }

      wrap.css(startPos)
        .show()
        .animate(endPos, {
          duration : effect === 'none' ? 0 : current.openSpeed,
          easing   : current.openEasing,
          step     : elastic ? this.step : null,
          complete : F._afterZoomIn
        });
    },

    zoomOut: function () {
      var wrap     = F.wrap,
        current  = F.current,
        effect   = current.openEffect,
        elastic  = effect === 'elastic',
        endPos   = {opacity : 0};

      if (elastic) {
        if (wrap.css('position') === 'fixed') {
          wrap.css(F._getPosition(true));
        }

        endPos = this.getOrigPosition();

        if (current.closeOpacity) {
          endPos.opacity = 0;
        }
      }

      wrap.animate(endPos, {
        duration : effect === 'none' ? 0 : current.closeSpeed,
        easing   : current.closeEasing,
        step     : elastic ? this.step : null,
        complete : F._afterZoomOut
      });
    },

    changeIn: function () {
      var wrap     = F.wrap,
        current  = F.current,
        effect   = current.nextEffect,
        elastic  = effect === 'elastic',
        startPos = F._getPosition( elastic ),
        endPos   = { opacity : 1 };

      startPos.opacity = 0;

      if (elastic) {
        startPos.top = getValue(parseInt(startPos.top, 10) - 200);
        endPos.top = '+=200px';
      }

      wrap.css(startPos)
        .show()
        .animate(endPos, {
          duration : effect === 'none' ? 0 : current.nextSpeed,
          easing   : current.nextEasing,
          complete : F._afterZoomIn
        });
    },

    changeOut: function () {
      var wrap     = F.wrap,
        current  = F.current,
        effect   = current.prevEffect,
        endPos   = { opacity : 0 },
        cleanUp  = function () {
          $(this).trigger('onReset').remove();
        };

      wrap.removeClass('fancybox-opened');

      if (effect === 'elastic') {
        endPos.top = '+=200px';
      }

      wrap.animate(endPos, {
        duration : effect === 'none' ? 0 : current.prevSpeed,
        easing   : current.prevEasing,
        complete : cleanUp
      });
    }
  };

  /*
   *  Overlay helper
   */

  F.helpers.overlay = {
    overlay: null,

    update: function () {
      var width, scrollWidth, offsetWidth;

      //Reset width/height so it will not mess
      this.overlay.width('100%').height('100%');

      if ($.browser.msie || isTouch) {
        scrollWidth = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
        offsetWidth = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);

        width = scrollWidth < offsetWidth ? W.width() : scrollWidth;

      } else {
        width = D.width();
      }

      this.overlay.width(width).height(D.height());
    },

    beforeShow: function (opts) {
      if (this.overlay) {
        return;
      }

      opts = $.extend(true, {}, F.defaults.helpers.overlay, opts);

      this.overlay = $('<div id="fancybox-overlay"></div>').css(opts.css).appendTo('body');

      if (opts.closeClick) {
        this.overlay.bind('click.fb', F.close);
      }

      if (F.current.fixed && !isTouch) {
        this.overlay.addClass('overlay-fixed');

      } else {
        this.update();

        this.onUpdate = function () {
          this.update();
        };
      }

      this.overlay.fadeTo(opts.speedIn, opts.opacity);
    },

    afterClose: function (opts) {
      if (this.overlay) {
        this.overlay.fadeOut(opts.speedOut || 0, function () {
          $(this).remove();
        });
      }

      this.overlay = null;
    }
  };

  /*
   *  Title helper
   */

  F.helpers.title = {
    beforeShow: function (opts) {
      var title, text = F.current.title;

      if (text) {
        title = $('<div class="fancybox-title fancybox-title-' + opts.type + '-wrap">' + text + '</div>').appendTo('body');

        if (opts.type === 'float') {
          //This helps for some browsers
          title.width(title.width());

          title.wrapInner('<span class="child"></span>');

          //Increase bottom margin so this title will also fit into viewport
          F.current.margin[2] += Math.abs(parseInt(title.css('margin-bottom'), 10));
        }

        title.appendTo(opts.type === 'over' ? F.inner : (opts.type === 'outside' ? F.wrap : F.skin));
      }
    }
  };

  // jQuery plugin initialization
  $.fn.fancybox = function (options) {
    var that     = $(this),
      selector = this.selector || '',
      index,
      run      = function(e) {
        var what = this, idx = index, relType, relVal;

        if (!(e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) && !$(what).is('.fancybox-wrap')) {
          e.preventDefault();

          relType = options.groupAttr || 'data-fancybox-group';
          relVal  = $(what).attr(relType);

          if (!relVal) {
            relType = 'rel';
            relVal  = what[ relType ];
          }

          if (relVal && relVal !== '' && relVal !== 'nofollow') {
            what = selector.length ? $(selector) : that;
            what = what.filter('[' + relType + '="' + relVal + '"]');
            idx  = what.index(this);
          }

          options.index = idx;

          F.open(what, options);
        }
      };

    options = options || {};
    index   = options.index || 0;

    if (selector) {
      D.undelegate(selector, 'click.fb-start').delegate(selector, 'click.fb-start', run);

    } else {
      that.unbind('click.fb-start').bind('click.fb-start', run);
    }

    return this;
  };

  // Test for fixedPosition needs a body at doc ready
  $(document).ready(function() {
    F.defaults.fixed = $.support.fixedPosition || (!($.browser.msie && $.browser.version <= 6) && !isTouch);
  });

}(window, document, jQuery));
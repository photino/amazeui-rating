/*! Amaze UI Plugin ~ rating */

/* global window, document, define, jQuery, setInterval, clearInterval */
(function(factory) {
  'use strict';

  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports !== 'undefined') {
    module.exports = factory(require('jquery'));
  } else {
    factory(jQuery);
  }

}(function($) {
  'use strict';

  // add method to jQuery prototype
  $.fn.rating = function(options) {
    // iterate over the current set of matched elements
    return this.each(function() {
      var $form = $(this);
      var $icons = $form.find('a > i');
      var $parent = $icons.parent();
      var $data = $parent.data();
      var defauls = {
        icons: ['star-o', 'star'],
        scale: 5,
        score: 0
      };
      var settings = {};
      if ($data.amIcons) {
        var icons = $data.amIcons.split(/\s*\,\s*/);
        var length = icons.length;
        if (length >= 2) {
          settings.icons = icons;
        }
        if (length === 3) {
          settings.scale = 10;
        }
      }
      if ($data.amScore) {
        settings.score = $data.amScore;
      }
      var $options = $.extend({}, defauls, settings, options);
      var icons = $options.icons.map(function (icon) {
        return 'am-icon-' + icon;
      });
      var score = $options.score;
      var integer = Math.round(score);
      var rounding = Math.abs(score - integer);
      var all = icons.join(' ');
      var empty = icons.shift();
      var full = icons.pop();
      var half = icons.pop();
      $icons.each(function(index) {
        var $icon = $(this);
        $icon.on('mouseenter', function() {
          $icons.removeClass(all);
          $icon.prevAll().addBack().addClass(full);
          $icon.nextAll().addClass(empty);
        });
        $icon.on('click', function() {
          $form.find('input[name="score"]').val(index + 1);
          $form.submit();
        });
      });
      $parent.on('mouseleave', function() {
        $icons.removeClass(all);
        $icons.slice(integer).addClass(empty);
        if (integer > 0) {
          $icons.slice(0, integer).addClass(full);
          if (half && Math.abs(rounding) > 0.25) {
            $icons.eq(Math.floor(score)).addClass(half);
          }
        }
      });
    });

  };

  $(function() {
    $('form[data-am-rating]').rating();
  });

}));

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
    var $container = $(this).parent();
    var $data = $container.data();

  };

  $(function() {
    $('.am-rating').rating();
  });

}));

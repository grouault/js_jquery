// Étape 1

// jQuery.fn.shadow = function() {
//   return this.each(function() {
//     var $originalElement = jQuery(this);
//     for (var i = 0; i < 5; i++) {
//       $originalElement
//         .clone()
//         .css({
//           position: 'absolute',
//           left: $originalElement.offset().left + i,
//           top: $originalElement.offset().top + i,
//           margin: 0,
//           zIndex: -1,
//           opacity: 0.1
//         })
//         .appendTo('body');
//     }
//   });
// };


// Étape 2

// jQuery.fn.shadow = function(slices, opacity, zIndex) {
//   return this.each(function() {
//     var $originalElement = jQuery(this);
//     for (var i = 0; i < slices; i++) {
//       $originalElement
//         .clone()
//         .css({
//           position: 'absolute',
//           left: $originalElement.offset().left + i,
//           top: $originalElement.offset().top + i,
//           margin: 0,
//           zIndex: zIndex,
//           opacity: opacity
//         })
//         .appendTo('body');
//     }
//   });
// };


// Étape 3

// jQuery.fn.shadow = function(opts) {
//   return this.each(function() {
//     var $originalElement = jQuery(this);
//     for (var i = 0; i < opts.slices; i++) {
//       $originalElement
//         .clone()
//         .css({
//           position: 'absolute',
//           left: $originalElement.offset().left + i,
//           top: $originalElement.offset().top + i,
//           margin: 0,
//           zIndex: opts.zIndex,
//           opacity: opts.opacity
//         })
//         .appendTo('body');
//     }
//   });
// };


// Étape 4

// jQuery.fn.shadow = function(options) {
//   var defaults = {
//     slices: 5,
//     opacity: 0.1,
//     zIndex: -1
//   };
//   var opts = jQuery.extend(defaults, options);
//   
//   return this.each(function() {
//     var $originalElement = jQuery(this);
//     for (var i = 0; i < opts.slices; i++) {
//       $originalElement
//         .clone()
//         .css({
//           position: 'absolute',
//           left: $originalElement.offset().left + i,
//           top: $originalElement.offset().top + i,
//           margin: 0,
//           zIndex: opts.zIndex,
//           opacity: opts.opacity
//         })
//         .appendTo('body');
//     }
//   });
// };


// Étape 5

// jQuery.fn.shadow = function(options) {
//   var defaults = {
//     slices: 5,
//     opacity: 0.1,
//     zIndex: -1,
//     sliceOffset: function(i) {
//       return {x: i, y: i};
//     }
//   };
//   var opts = jQuery.extend(defaults, options);
//   
//   return this.each(function() {
//     var $originalElement = jQuery(this);
//     for (var i = 0; i < opts.slices; i++) {
//       var offset = opts.sliceOffset(i);
//       $originalElement
//         .clone()
//         .css({
//           position: 'absolute',
//           left: $originalElement.offset().left + offset.x,
//           top: $originalElement.offset().top + offset.y,
//           margin: 0,
//           zIndex: opts.zIndex,
//           opacity: opts.opacity
//         })
//         .appendTo('body');
//     }
//   });
// };


// Étape 6

jQuery.fn.shadow = function(options) {
  var opts = jQuery.extend({},
    jQuery.fn.shadow.defaults, options);
  
  return this.each(function() {
    var $originalElement = jQuery(this);
    for (var i = 0; i < opts.slices; i++) {
      var offset = opts.sliceOffset(i);
      $originalElement
        .clone()
        .css({
          position: 'absolute',
          left: $originalElement.offset().left + offset.x,
          top: $originalElement.offset().top + offset.y,
          margin: 0,
          zIndex: opts.zIndex,
          opacity: opts.opacity
        })
        .appendTo('body');
    }
  });
};

jQuery.fn.shadow.defaults = {
  slices: 5,
  opacity: 0.1,
  zIndex: -1,
  sliceOffset: function(i) {
    return {x: i, y: i};
  }
};

/*!
 *  CanvasInput v1.2.7
 *  http://goldfirestudios.com/blog/108/CanvasInput-HTML5-Canvas-Text-Input
 *
 *  (c) 2013-2017, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */

(function () {
  // create a buffer that stores all inputs so that tabbing
  // between them is made possible.
  var inputs = [];

  // initialize the Canvas Input
  var Citek = window.Citek = function (o) {
    var self = this;
    self._citek = 'Citek';


  };

  // setup the prototype
  Citek.prototype = {
    /**
     * Get/set the main canvas.
     * @param  {Object} data Canvas reference.
     * @return {Mixed}      CanvasInput or current canvas.
     */
    oninit: function (data) {
      var self = this;
      if (typeof data !== 'undefined') {
        self._citek = data;

        return self._citek;
      } else {
        return self._citek;
      }
    },
    /**
     * Get/set the main canvas.
     * @param  {Object} data Canvas reference.
     * @return {Mixed}      CanvasInput or current canvas.
     */
    checkLicense: async function (check) {
      await fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
          check = data.message

          return data.message
        }) // URL ảnh của chó
        .catch(error => { return error });
      return check
    }
  };
})();
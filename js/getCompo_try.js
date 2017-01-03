(function() {



d3.geo.mercatorTaipei = function() {

  var mainland = d3.geo.mercator()
    .center([121.58,26.39]);


  //var mainlandBbox = [[-81.5, 2.7], [-75.0, -6.0]];

  var point,
      pointStream = {point: function(x, y) { point = [x, y]; }},
      mainlandPoint;

  function mercatorTaipei(coordinates) {
    var x = coordinates[0], y = coordinates[1];
    point = null;

    (mainlandPoint(x, y), point);

    return point;
  }


mercatorTaipei.invert = function(coordinates) {
    var k = mainland.scale(),
        t = mainland.translate(),
        x = (coordinates[0] - t[0]) / k,
        y = (coordinates[1] - t[1]) / k;





    return mainland.invert(coordinates);
  };


mercatorTaipei.stream = function(stream) {
    var mainlandStream = mainland.stream(stream);

    return {
      point: function(x, y) {
        mainlandStream.point(x, y);
      },
      sphere: function() {
        mainlandStream.sphere();
      },
      lineStart: function() {
        mainlandStream.lineStart();
      },
      lineEnd: function() {
        mainlandStream.lineEnd();
     },
      polygonStart: function() {
        mainlandStream.polygonStart();
      },
      polygonEnd: function() {
        mainlandStream.polygonEnd();
      }
    };
  };


  mercatorTaipei.precision = function(_) {
    if (!arguments.length) return mainland.precision();
    mainland.precision(_);

    return mercatorTaipei;
  };

  mercatorTaipei.scale = function(_) {
    if (!arguments.length) return mainland.scale();

    mainland.scale(_);

    return mercatorTaipei.translate(mainland.translate());
  };

  mercatorTaipei.translate = function(_) {
    if (!arguments.length) return mainland.translate();

    var k = mainland.scale(), x = +_[0], y = +_[1];



      mainlandPoint = mainland
       .translate([x, y - 0.025 * k])
       .clipExtent([[x - 0.0838 * k, y - 0.0721 * k],[x + 0.0297 * k, y + 0.0799 * k]])
       .stream(pointStream).point;

   return mercatorTaipei;
  };


  mercatorTaipei.getCompositionBorders = function() {

    var ldgalapagos = mainland([121.47, 25.17]);
    var ulgalapagos = mainland([121.22, 25.09]);

    return "M"+ldgalapagos[0]+" "+ldgalapagos[1]+"L"+ldgalapagos[0]+" "+ulgalapagos[1]
    +"L"+ulgalapagos[0]+" "+ulgalapagos[1];

 };

  return mercatorTaipei.scale(110000);
};
})();

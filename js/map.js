var width = 600,
    height = 580;

var projection = d3.geo.mercatorEcuador();
var graticule = d3.geo.graticule().step([2, 2]);

var path = d3.geo.path()
    .projection(projection);

var svg = d3.select("#container").append("svg")
    .attr("width", width)
    .attr("height", height);

svg.append("path")
    .datum(graticule)
    .attr("class", "graticule")
    .attr("d", path);

d3.json("ecuador.json", function(error, ecuador) {
  //https://es.wikipedia.org/wiki/Anexo:Provincias_de_Ecuador_por_IDH
    d3.json("hdi.json", function(error, hdi) {
        var land = topojson.feature(ecuador, ecuador.objects.ecuador);
        
        var color = d3.scale.linear()
                    .domain([0.7, 0.9])
                    .range(["#feebe2","#7a0177"]);


        svg.selectAll(".region")
          .data(land.features)
          .enter()
          .append("path")
          .attr("d", path)
          .attr("class","region")
          .style("fill",function(d){return color(hdi[d.properties.region]);})
          .on("mouseover", function(d){
            //Show the tooltip
            var x = d3.event.pageX;
            var y = d3.event.pageY - 40;

            d3.select("#tooltip")
              .style("left", x + "px")
              .style("top", y + "px")
              .style("opacity", 1)
              .text( "The HDI at " + d.properties.region + " is " + hdi[d.properties.region]);
          })
          .on("mouseout", function(){
            //Hide the tooltip
            d3.select("#tooltip")
              .style("opacity", 0);
          });

        svg
          .append("path")
            .style("fill","none")
            .style("stroke","#000")
            .attr("d", projection.getCompositionBorders());

        d3.select("svg").append("g")
          .attr("class", "legendLinear")
          .attr("transform", "translate(200,500)");

        var legendLinear = d3.legend.color()
                    .title("Human Development Index")
                    .shapeHeight(20)
                    .shapeWidth(60)
                    .shapeRadius(10)
                    .cells([0.7, 0.75, 0.8, 0.85, 0.9])
                    .orient("horizontal")
                    .labelFormat(d3.format(".02f"))
                    .labelAlign("start")
                    .scale(color);

        svg.select(".legendLinear")
            .call(legendLinear);

    });
});

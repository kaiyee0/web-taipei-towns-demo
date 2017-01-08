var value1 = window.localStorage.getItem("fdsettings");
var value2 = JSON.parse(value1);

var mean = window.localStorage.getItem("mean");
var factor = window.localStorage.getItem("factor");

document.getElementById("factor").innerHTML = factor;

// alert(mean);

var width = 900,
    height = 650;

var projection = d3.geo.mercator().scale(110000).center([121.58,25.11]);//need to be revised

//var projection = d3.geo.mercatorTaipei();//need to be revised

var graticule = d3.geo.graticule().step([2, 2]);//about lines

var path = d3.geo.path()
    .projection(projection);

var svg = d3.select("#container").append("svg")
    .attr("width", width)
    .attr("height", height);


    svg.append("path")
        .datum(graticule)
        .attr("class", "graticule")
        .attr("d", path);

d3.json("taipei.json", function(error, taipei) {

  root = jQuery.parseJSON(JSON.stringify(value2)); 



  var land = topojson.feature(taipei, taipei.objects.map);
  
  var color = d3.scale.linear()
              .domain([mean*0.5, mean*1.4])
              .range(["#FFCCCC","#CC0000"]);

  // function find_value_in_district(searching_district){
  //   var disaster_value;
  //   var my_object = JSON.parse(taipeicrime);
  //   disaster_value = my_object.filter(function(n,i){return my_object.district===searching_district;})
  //   return disaster_value.id;
  // };
  //taipeicrime.filter(function(n, i){return n.district===d.properties.name;})
  function find_value_in_district(searching_district){
   var as = $(value2).filter(function (i,n){return n.district==searching_district;});
   return as[0].id;
  };

  function analysis(a){
    if(a > mean * 1.25){
      return "dangerous";
    }
    else if(a < mean * 0.7){
      return "harmonic and joyful";
    }
    return "peace";
  };

    svg.selectAll(".name")
      .data(land.features)
      .enter()
      .append("path")
      .attr("d", path)
      .attr("class","name")
      .style("fill",function(d){return color( find_value_in_district(d.properties.name));})
      .on("mouseover", function(d){
        //Show the tooltip
        var x = d3.event.pageX;
        var y = d3.event.pageY - 40;

        d3.select("#tooltip")
          .style("left", x + "px")
          .style("top", y + "px")
          .style("opacity", 1)
          .text( d.properties.name + " is " + analysis(find_value_in_district(d.properties.name)));
      })
      .on("mouseout", function(){
        //Hide the tooltip
        d3.select("#tooltip")
          .style("opacity", 0);
      });



    d3.select("svg").append("g")
      .attr("class", "legendLinear")
      .attr("transform", "translate(200,580)");

    var legendLinear = d3.legend.color()
                .title("Crime Committed Index")
                .shapeHeight(20)
                .shapeWidth(60)
                .shapeRadius(10)
                .cells([mean*0.5, mean*0.75, mean, mean*1.2, mean*1.3])
                .orient("horizontal")
                .labelFormat(d3.format(".02f"))
                .labelAlign("start")
                .scale(color);

    svg.select(".legendLinear")
      .call(legendLinear);

});


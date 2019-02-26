function Piechart(canvas){
//generate data
var data = [];
		for (var i = 0; i < 10; i++) {
      var newNumber = Math.random();
  //  var newNumber = Math.floor(Math.random()*10)
      data.push(newNumber);
    }

var radius = Math.min(width,height)/2;
var arc = d3.arc()
    .outerRadius(radius - 10)
    .innerRadius(0);

var labelArc = d3.arc()
    .outerRadius(radius - 50)
    .innerRadius(radius - 50);

var pie = d3.pie()
    .sort(null)
    .value(function(d) { return d; });

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  var g = svg.selectAll(".arc")
      .data(pie(data))
    .enter().append("g")
      .attr("class", "arc");

  g.append("path")
      .attr("d", arc)
      .style("fill","white");
  
//random 2 areas and draw two points
    //random two areas
    var points=[];
    var pt1=Math.floor(Math.random()*10);
    var pt2=Math.floor(Math.random()*10);
    while(pt1==pt2){
        pt2=Math.floor(Math.random()*10);
    }
    //sort 2 points in order
    if (pt1<pt2){
        points.push(data[pt1]);
        points.push(data[pt2]);
    }
    else{
        points.push(data[pt2]);
        points.push(data[pt1]);
    }

var circles=svg.selectAll("circle")
     .data(pie(points))
     .enter()
      .append("circle")
     // .filter(function(d){return d>pie(1000000000);})
      .attr("transform", function(d) { 
      return "translate(" + labelArc.centroid(d) + ")"})
      .attr("dy", ".15em")
   //   .filter(function(d){return d>0.5})
      .style("fill","black")
    //  .attr("class","circle")
      .attr("r",3);
     // .text(function(d) { return d.data; });
     console.log(points)
  var ratio= Math.pow(points[0],2)/Math.pow(points[1],2);
  console.log(ratio);
}

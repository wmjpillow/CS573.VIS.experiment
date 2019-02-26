function Bubblechart(canvas){
//set ranges
var dataset = []
var x = 20;
for (var i = 0; i < 10; i++) {
  var x = x + d3.randomUniform(40,50)();
  var y = d3.randomUniform(30,300)();
  var r = d3.randomUniform(8,30)();
  dataset.push({"x": x, "y": y,"r":r});
}
//return dataset
console.log(dataset)
// Get the data
// var data = getdata()

// format the data
dataset.forEach(function(d) {
d.x = +d.x;
d.y = +d.y;
d.r = +d.r;
});


var xline = svg.append('line')
              .attr('x1',40)
              .attr('y1',350)
              .attr('x2',650)
              .attr('y2',350)
              .attr("stroke-width",2)
              .attr("stroke","white");

var xlines = svg.append('line')
              .attr('x1',40)
              .attr('y1',2)
              .attr('x2',650)
              .attr('y2',2)
              .attr("stroke-width",2)
              .attr("stroke","white");

var yline = svg.append('line')
                .attr('x1',40)
                .attr('y1',2)
                .attr('x2',40)
                .attr('y2',350)
                .attr("stroke-width",2)
                .attr("stroke","white");

var ylines = svg.append('line')
                .attr('x1',650)
                .attr('y1',2)
                .attr('x2',650)
                .attr('y2',350)
                .attr("stroke-width",2)
                .attr("stroke","white");

// add the bubbles
svg.selectAll("bubble")
  .data(dataset)
  .enter().append("circle")
  .attr("r", function(d){return d.r;})
  .attr("cx", function(d) { return d.x; })
  .attr("cy", function(d) { return d.y; })
  .attr("stroke","white")
  .attr("fill","white");


//random center
var pt1=Math.floor(Math.random()*10);
var pt2=Math.floor(Math.random()*10);
while(pt1==pt2){
    pt2=Math.floor(Math.random()*10);
}
  //sort 2 points in order
if (pt1<pt2){
  temp = pt1
  pt1 = pt2
  pt2 = temp
  }

svg.selectAll("circles")
    .data(dataset)
    .enter().append("circle")
    .attr("r", 4)
    .attr("cx", function(d) { return dataset[pt1].x+2; })
    .attr("cy", function(d) { return dataset[pt1].y+5; })
    .attr("fill","black");
    console.log(dataset[pt1].x)

svg.selectAll("circles")
    .data(dataset)
    .enter().append("circle")
    .attr("r", 4)
    .attr("cx", function(d) { return dataset[pt2].x+5; })
    .attr("cy", function(d) { return dataset[pt2].y+2; })
    .attr("fill","black");
    console.log(dataset[pt2].x)

var ratio= Math.pow(dataset[pt1].r,2)/Math.pow(dataset[pt2].r,2);
  console.log(ratio);
// var neighbor = false
// if （Math.abs(dataset[pt1].y - dataset[pt2].y )<20 && （Math.abs(dataset[pt1].x - dataset[pt2].x )<50)){
//   var neighbor = true;
// }

}

function Bubblechart(canvas){
  visType = "Bubble";
//set ranges
var data = []
var x = 20;
for (var i = 0; i < 10; i++) {
  var x = x + d3.randomUniform(30,70)();
  var y = d3.randomUniform(150,450)();
  var r = d3.randomUniform(8,30)();
  data.push({"x": x, "y": y,"r":r});
}
//return dataset
console.log(data)
// Get the data
// var data = getdata()

// format the data
data.forEach(function(d) {
d.x = +d.x;
d.y = +d.y;
d.r = +d.r;
});


var xline = svg.append('line')
              .attr('x1',10)
              .attr('y1',470)
              .attr('x2',640)
              .attr('y2',470)
              .attr("stroke-width",1)
             .attr("stroke","white");

var xlines = svg.append('line')
              .attr('x1',10)
              .attr('y1',120)
              .attr('x2',640)
              .attr('y2',120)
              .attr("stroke-width",1)
              .attr("stroke","white");

var yline = svg.append('line')
                .attr('x1',10)
                .attr('y1',120)
                .attr('x2',10)
                .attr('y2',470)
                .attr("stroke-width",1)
                .attr("stroke","white");

var ylines = svg.append('line')
                .attr('x1',640)
                .attr('y1',120)
                .attr('x2',640)
                .attr('y2',470)
                .attr("stroke-width",1)
                .attr("stroke","white");

// add the bubbles
svg.selectAll("bubble")
  .data(data)
  .enter().append("circle")
  .attr("r", function(d){return d.r;})
  .attr("cx", function(d) { return d.x; })
  .attr("cy", function(d) { return d.y; })
  .attr("stroke","white")
  .attr("fill","white");


// random center
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
    .data(data)
    .enter().append("circle")
    .attr("r", 4)
    .attr("cx", function(d) { return data[pt1].x+2; })
    .attr("cy", function(d) { return data[pt1].y+5; })
    .attr("fill","black");
    console.log(data[pt1].x)

svg.selectAll("circles")
    .data(data)
    .enter().append("circle")
    .attr("r", 4)
    .attr("cx", function(d) { return data[pt2].x+5; })
    .attr("cy", function(d) { return data[pt2].y+2; })
    .attr("fill","black");
    console.log(data[pt2].x)


var ratio= Math.pow(data[pt1].r,2)/Math.pow(data[pt2].r,2);
var ratio_s= Math.pow(data[pt2].r,2)/Math.pow(data[pt1].r,2);
if (ratio_s < ratio){
  ratio = ratio_s

}

  console.log(ratio);
// var neighbor = false
// if （Math.abs(dataset[pt1].y - dataset[pt2].y )<20 && （Math.abs(dataset[pt1].x - dataset[pt2].x )<50)){
//   var neighbor = true;
// }
truePercent = ratio;
index_diff = 0;
numVis1--;
trialNum++;

}

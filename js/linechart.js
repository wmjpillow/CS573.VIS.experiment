function linechart(svg){
   visType = "Line";
   
   var canvas=svg.append('g')
        .attr('class','canvas')
        .attr('transform','translate('+margin.left+','+margin.top+')');
    //lineAreaChart random data generation
    var jsonRandom=[];
    var one=0,two=0,three=0;
    var max;
    for (i=0;i<11;i++){
        one = one + Math.floor(Math.random() * 10)+1;
        two = two + Math.floor(Math.random() * 10)+4;
        three = three + Math.floor(Math.random() *10)+1;
        jsonRandom.push({"one":one,"two":two,"three":three});
    }
  //compute max
    max=Math.max(one,two,three);

  //draw
    canvas.append('rect')
       .style("fill","white")
       .attr('x',0)
       .attr('y',0)
       .attr('width',width)
       .attr('height',height);

    //Setup x scale
    var xScale = d3.scaleLinear()
        .domain([0,2])
        .range([0,width]);
    //Setup y scale
    var yScale=d3.scaleLinear()
        .domain([0,max])
        .range([0,height]);

    //x axis
    canvas.append("line").attr('x1',0).attr('y1',0).attr('x2',0).attr('y2',height);
    //y axis
    canvas.append("line").attr('x1',0).attr('y1',height).attr('x2',width).attr('y2',height);

    //Draw lines
    var linegroup=canvas.append("g");
    var line=linegroup.selectAll("line")
         .data(jsonRandom)
         .enter()

         line.append("line")
             .attr('x1',function(d,i){return xScale(0)})
             .attr('y1',function(d){return yScale(d.one)})
             .attr('x2',function(d,i){return xScale(1)})
             .attr('y2',function(d){return yScale(d.two)})
             .style("stroke","black");
         line.append("line")
             .attr('x1',function(d,i){return xScale(1)})
             .attr('y1',function(d){return yScale(d.two)})
             .attr('x2',function(d,i){return xScale(2)})
             .attr('y2',function(d){return yScale(d.three)})
             .style("stroke","black");;
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
        points.push(pt1);
        points.push(pt2);
    }
    else{
        points.push(pt2);
        points.push(pt1);
    }

    //draw points
   canvas.selectAll("circle")
       .data(points)
       .enter()
       .append("circle")
       .attr("cx",xScale(1))
       .attr("cy",function(d){return (yScale(jsonRandom[d].two) + yScale(jsonRandom[d+1].two))/2})
       .attr("r",4)
       .style("fill","black");

        console.log(points)

//compute areas
    p10=jsonRandom[pt1];
    p11=jsonRandom[pt1+1];
    d1=[[xScale(0),yScale(p10.one)],
        [xScale(1),yScale(p10.two)],
        [xScale(2),yScale(p10.three)],
        [xScale(2),yScale(p11.three)],
        [xScale(1),yScale(p11.two)],
        [xScale(0),yScale(p11.one)]];
    //clockwise area is negative
    a1=-d3.polygonArea(d1);

    p20=jsonRandom[pt2];
    p21=jsonRandom[pt2+1];
    d2=[[xScale(0),yScale(p20.one)],
        [xScale(1),yScale(p20.two)],
        [xScale(2),yScale(p20.three)],
        [xScale(2),yScale(p21.three)],
        [xScale(1),yScale(p21.two)],
        [xScale(0),yScale(p21.one)]];
    a2=-d3.polygonArea(d2);

    //console.log(a1);
    //console.log(a2);
    if (a2<=a1) {
      temp = a1
      a1 = a2
      a2 = temp;}
    var ratio = a1/a2;

    truePercent = ratio;
    index_diff = points[1]-points[0];
    numVis2--;
    trialNum++;
}

function Piechart(canvas){
  visType = "Pie";
    //generate data
    var data = [];
    for (var i = 0; i < 10; i++) {
          //var newNumber = Math.random(17,20);
          var newNumber = Math.floor(Math.random() * 10) + 3;
          data.push(newNumber);
        }
          var arc = d3.arc().outerRadius(200).innerRadius(0);
          var pointArc = d3.arc().outerRadius(200).innerRadius(0);
          var pie = d3.pie()
              .sort(null)
              .value(function(d) {return d;});
          var pChart = svg.selectAll(".arc")
              .data(pie(data)).enter().append("g")
              .attr("transform", "translate(" + 220 +","+ 300 +")")
              .attr("class", "arc");
          pChart.append("path")
              .attr("d", arc)
              .style("fill", "white");
          // add the dot to two of the rectangles
          var points = [];
          for(i = 0; i < 2; i++){
              var pt = Math.floor(Math.random() * 10);
              if(points.includes(pt)){
                  i--;
              }
              else{
                  points.push(pt);
              }
          }
          pChart.append("circle")
              .attr("transform", function(d){
                  if(points.includes(d.index)){
                      return "translate(" + pointArc.centroid(d) + ")";
                  }})
              .attr("fill", function(d){
                  if(points.includes(d.index)){
                      return "white";
                  }
              })
              .attr("r", function(d){
                  if(points.includes(d.index)){
                      return 2;
                  }    
              })
              .attr("fill","black");




           console.log(data);
        //   console.log(pie(data));
        // //  console.log(datapoints);
           console.log(points);

      var ratio= data[points[0]]/data[points[1]];
      var ratio_s= data[points[1]]/data[points[0]];
      if(ratio_s < ratio ){
        ratio = ratio_s
      }

      console.log(ratio);

      truePercent = ratio;
      index_diff = Math.abs(points[1]-points[0]);
      numVis3--;
      trialNum++;
    }

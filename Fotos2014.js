document.addEventListener('DOMContentLoaded', () => {
		        

	document.querySelectorAll('.opcio').forEach(function(button) {
		button.onclick = function() {

			var chartName=button.id 

			document.querySelector('#ChartTitle').innerHTML = chartName;

		    var svg = d3.select("svg"),
		        margin = 200,
		        width = svg.attr("width") - margin,
		        height = svg.attr("height") - margin

			var xScale = d3.scaleBand().range([0, width]).padding(0.4),
				yScale = d3.scaleLinear().range([height, 0]);	

		    svg.text("")   

		    var g = svg.append("g")
		               .attr("transform", "translate(" + 100 + "," + 100 + ")");
		              
		    var file = 'Dades/' + chartName + '.csv'; 

		    d3.csv(file, function(error, data) {
		        if (error) {
		            throw error;
		        }

		        xScale.domain(data.map(function(d) { return d.column; }));
		        yScale.domain([0, d3.max(data, function(d) { return d.value; })]);

		        g.append("g")
		         .attr("transform", "translate(0," + height + ")")
		         .call(d3.axisBottom(xScale))
		         .selectAll("text")  
            		.style("text-anchor", "end")
            		.attr("dx", "-.8em")
            		.attr("dy", "-.5em")
            		.attr("transform", "rotate(-90)" );

		        g.append("g")
		         .call(d3.axisLeft(yScale).tickFormat(function(d){
		             return d;
		         }).ticks(10));

		        g.selectAll(".bar")
		         .data(data)
		         .enter().append("rect")
		         .attr("class", "bar")
		         .on("mouseover", onMouseOver)
				 .on("mouseout", onMouseOut)
		         .attr("x", function(d) { return xScale(d.column); })
		         .attr("y", function(d) { return yScale(d.value); })
		         .attr("width", xScale.bandwidth())
		         .transition()
		         .ease(d3.easeLinear)
		         .duration(200)
		         .delay(function (d, i) {
		             return i * 50;
		         })
		         .attr("height", function(d) { return height - yScale(d.value); });

				g.selectAll(".bar")
					.append("text")
			       .attr("x", function(d) { return (d*10); })
			       .attr("y", yScale / 2)
			       .attr("dy", ".35em")
			       .text(function(d) { return d; });





		    });		


			//mouseover event handler function
			function onMouseOver(d, i) {
			    d3.select(this).attr('class', 'highlight');
			    d3.select(this)
			      .transition()     // adds animation
			      .duration(200)
			      .attr('width', xScale.bandwidth() + 5)
			      .attr("y", function(d) { return yScale(d.value) - 10; })
			      .attr("height", function(d) { return height - yScale(d.value) + 10; });

			    // g.append("text")
			    //  .attr('class', 'val') 
			    //  .attr('x', function() {
			    //      return xScale(d.column);
			    //  })
			    //  .attr('y', function() {
			    //      return yScale(d.value) - 15;
			    //  })
			    //  .text(function() {
			    //      return [d.value];  // Value of the text
			    //  });
			}

			//mouseout event handler function
			function onMouseOut(d, i) {
			    // use the text label class to remove label on mouseout
			    d3.select(this).attr('class', 'bar');
			    d3.select(this)
			      .transition()     // adds animation
			      .duration(200)
			      .attr('width', xScale.bandwidth())
			      .attr("y", function(d) { return yScale(d.value); })
			      .attr("height", function(d) { return height - yScale(d.value); });

			    // d3.selectAll('.val')
			    //   .remove()
			} 

		};	
	}); 

	

}); 
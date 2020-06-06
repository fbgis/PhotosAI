document.addEventListener('DOMContentLoaded', () => {

	document.querySelectorAll('.opcio').forEach(function(button) {
		button.onclick = function() {

			var chartName=button.id 

		    var svg = d3.select("svg"),
		        margin = 200,
		        width = svg.attr("width") - margin,
		        height = svg.attr("height") - margin

		    svg.empty();    

		    svg.append("text")
		       .attr("transform", "translate(100,0)")
		       .attr("x", 0)
		       .attr("y", 50)
		       .attr("font-size", "24px")
		       .text("Histogram: "+chartName)

		    var xScale = d3.scaleBand().range([0, width]).padding(0.4),
		        yScale = d3.scaleLinear().range([height, 0]);

		    var g = svg.append("g")
		               .attr("transform", "translate(" + 100 + "," + 100 + ")");

		              
		    var file = 'Dades/' + chartName + '.csv'; 

		    alert(file);

		    d3.csv(file, function(error, data) {
		        if (error) {
		            throw error;
		        }

		        xScale.domain(data.map(function(d) { return d.column; }));
		        yScale.domain([0, d3.max(data, function(d) { return d.value; })]);

		        g.append("g")
		         .attr("transform", "translate(0," + height + ")")
		         .call(d3.axisBottom(xScale));

		        g.append("g")
		         .call(d3.axisLeft(yScale).tickFormat(function(d){
		             return "$" + d;
		         }).ticks(10));

		        g.selectAll(".bar")
		         .data(data)
		         .enter().append("rect")
		         .attr("class", "bar")
		         .attr("x", function(d) { return xScale(d.year); })
		         .attr("y", function(d) { return yScale(d.value); })
		         .attr("width", xScale.bandwidth())
		         .attr("height", function(d) { return height - yScale(d.value); })
		         .attr("fill", "steelblue");
		    });			
		};	
	}); 
});    
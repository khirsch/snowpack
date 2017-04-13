var snowpack = [
  {inches: 340.1, period: '2014 - 2015'},
  {inches: 306.6, period: '2016 - Present'}
];

var periods = snowpack.map(function(t) {
  return t.period
});

var margin = {top: 5, right: 5, bottom: 50, left: 50};

var fullWidth = 700;
var fullHeight = 200;

var width = fullWidth - margin.right - margin.left;
var height = fullHeight - margin.top - margin.bottom;

var svg = d3.select('body').append('svg')
  .attr('width', fullWidth)
  .attr('height', fullHeight)
  .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

var periodScale = d3.scaleBand()
  .domain(periods)
  .range([0, width])
  .paddingInner(0.1);

var bandwidth = periodScale.bandwidth();

var maxInches = d3.max(snowpack, function(d) {return d.inches; });
var inchesScale = d3.scaleLinear()
  .domain([0, maxInches])
  .range([height, 0])
  .nice();

var xAxis = d3.axisBottom(periodScale);
var yAxis = d3.axisLeft(inchesScale);

svg.append('g')
  .classed('x axis', true)
  .attr('transform', 'translate(0,' + height + ')')
  .call(xAxis);

var yAxisEle = svg.append('g')
  .classed('y axis', true)
  .call(yAxis);

var yText = yAxisEle.append('text')
  .attr('transform', 'rotate(-90)translate(-' + height/2 + ', 0)')
  .attr('dy', '-2.5em')
  .style('text-anchor', 'middle')
  .style('fill', 'black')
  .style('font-size', 14)
  .text('Inches');

var barHolder = svg.append('g')
  .classed('bar-holder', true);

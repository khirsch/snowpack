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

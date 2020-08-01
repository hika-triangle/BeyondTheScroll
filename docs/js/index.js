// set long conent
d3.selectAll('.grid-container > div').selectAll('p')
  .data(d3.range(1000))
  .join('p')
  .text(d => d3.format('03')(d))
  .style('background-color', d => `hsla(0, 0%, 0%, ${d/1000})`)

const a = document.querySelector('.a');
const b = document.querySelector('.b');
const c = document.querySelector('.c');

// set initial scroll position
b.scrollTop = b.scrollHeight / 2;
c.scrollTop = c.scrollHeight;

// onscroll function
a.onscroll = function() {
  c.scrollTop = c.scrollHeight - this.scrollTop;
}
c.onscroll = function() {
  a.scrollTop = a.scrollHeight - this.scrollTop;
}
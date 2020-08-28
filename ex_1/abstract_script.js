/**
 * Init the canvas art
 */
function drawAbstract() {
  let canvas = document.getElementById('abstract_canvas');
  let x_max = canvas.width;
  let y_max = canvas.height;
  var ctx = canvas.getContext('2d');

  let squarewidth = 60;

  //  purple square
  ctx.fillStyle = '#de473a';
  ctx.fillRect(20, 40, squarewidth, squarewidth);
  //  red square
  let red_x = 60;
  ctx.fillStyle = 'aqua';
  ctx.fillRect(red_x, 5, squarewidth, squarewidth);
  //  yellow triangle
  ctx.fillStyle = 'navy';
  ctx.beginPath();
  ctx.moveTo(45, 130);
  ctx.lineTo(x_max - red_x, 0.5 * y_max);
  ctx.lineTo(40, 0.9 * y_max);
  ctx.fill();
  //  blue triangle
  ctx.fillStyle = 'fuchia';
  ctx.beginPath();
  ctx.moveTo(100, 90);
  ctx.lineTo(150, 40);
  ctx.lineTo(160, 100);
  ctx.fill();
  // light green circle
  ctx.fillStyle = '#91ab20';
  ctx.beginPath();
  ctx.arc(x_max - 40, y_max - 40, 30, 0, 2 * Math.PI);
  ctx.fill();
}

//  Change background color if canvas element is clicked
$(document).ready(function () {
  $('#abstract_canvas').click(function () {
    let new_color = '#' + Math.floor(Math.random() * 16777215).toString(16); //This line is borrowed from Stackoverflow
    $('#abstract_canvas').css('backgroundColor', new_color);
  });
});

//  Change background color if any svg element is clicked
$(document).ready(function () {
  $('.svg_element').click(function () {
    let new_color = '#' + Math.floor(Math.random() * 16777215).toString(16); //This line is borrowed from Stackoverflow
    $('#svg_background').css('fill', new_color);
  });
});

//toggles visability of documentation text if button is pressed
$(document).ready(function () {
  $('#hideviewbutton').click(function () {
    $('#textbox').toggle(1000);
  });
});

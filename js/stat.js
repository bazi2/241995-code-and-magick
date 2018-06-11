'use strict';

window.renderStatistics = function (ctx) {
  //Нарисовала тень
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 270, 420);

  //Нарисовала облако
  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 270, 420);
};
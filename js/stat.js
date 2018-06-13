'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HIEGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var COLUMN_WIDTH = 40;
var COLUMN_GAP = 50;
var COLUMN_HEIGHT = 150;
var BAR_WIDTH = COLUMN_GAP + COLUMN_WIDTH;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HIEGHT);
};

var renderText = function (ctx, text, x, y) {
  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'black';
  ctx.fillText(text, x, y);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var getRandomColor = function () {
  return Math.random();
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'white');

  renderText(ctx, 'Ура вы победили!', CLOUD_X + COLUMN_GAP, CLOUD_Y + (GAP * 3));
  renderText(ctx, 'Список результатов:', CLOUD_X + COLUMN_GAP, CLOUD_Y + (GAP * 5));

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = 'black';
    ctx.fillText(names[i], CLOUD_X + COLUMN_GAP + (BAR_WIDTH * i), CLOUD_HIEGHT);
    ctx.fillText(Math.floor(times[i]), CLOUD_X + COLUMN_GAP + (BAR_WIDTH * i), CLOUD_Y + (GAP * 8));
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255,' + getRandomColor() + ')';
    }
    ctx.fillRect(CLOUD_X + COLUMN_GAP + (BAR_WIDTH * i), CLOUD_Y * GAP, COLUMN_WIDTH, (COLUMN_HEIGHT * times[i]) / maxTime);
  }
};

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

var renderText = function (ctx, text, x, y, color) {
  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'black';
  ctx.fillText(text, x, y);
};

window.renderStatistics = function (ctx) {
  //1. Облако и тень
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'white');

  //2. Текст приветствия о победе
  renderText(ctx, 'Ура вы победили!', CLOUD_X + COLUMN_GAP, CLOUD_Y + (GAP * 3));
  renderText(ctx, 'Список результатов:', CLOUD_X + COLUMN_GAP, CLOUD_Y + (GAP * 5));

  //3. Сама гистограмма
  //Цвет задала временно, чтобы видеть границы и расположение
  ctx.fillStyle = 'green';
  ctx.fillRect(110, 100, 400, COLUMN_HEIGHT);

  //4. Столбики играков

  ctx.fillStyle = 'black';
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';

  var players = ['Вы', 'Кекс', 'Катя', 'Игорь'];

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(players[i], CLOUD_X + COLUMN_GAP + (BAR_WIDTH * i), CLOUD_HIEGHT);
    ctx.fillRect(CLOUD_X + COLUMN_GAP + (BAR_WIDTH * i), CLOUD_Y * GAP, COLUMN_WIDTH, COLUMN_HEIGHT);
  };
};
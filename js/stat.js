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

  var playerIndex = 0;
  var playerName = 'Вы';

  var players = ['Вы', 'Кекс', 'Катя', 'Игорь'];

  //Игрок 'Вы - 0'
  ctx.fillStyle = 'black';
  ctx.fillText(playerName, CLOUD_X + COLUMN_GAP + (BAR_WIDTH * playerIndex), CLOUD_HIEGHT);
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(CLOUD_X + COLUMN_GAP + (BAR_WIDTH * playerIndex), CLOUD_Y * GAP, COLUMN_WIDTH, COLUMN_HEIGHT);

  var playerIndex = 1;
  var playerName = 'Кекс';

  //Игрок 'Кекс - 1'
  ctx.fillStyle = 'black';
  ctx.fillText(playerName, CLOUD_X + COLUMN_GAP + (BAR_WIDTH * playerIndex), CLOUD_HIEGHT);
  ctx.fillStyle = 'rgba(0, 0, 255, 1)';
  ctx.fillRect(CLOUD_X + COLUMN_GAP + (BAR_WIDTH * playerIndex), CLOUD_Y * GAP, COLUMN_WIDTH, COLUMN_HEIGHT);

  var playerIndex = 2;
  var playerName = 'Катя';

  //Игрок 'Катя - 2'
  ctx.fillStyle = 'black';
  ctx.fillText(playerName, CLOUD_X + COLUMN_GAP + (BAR_WIDTH * playerIndex), CLOUD_HIEGHT);
  ctx.fillStyle = 'rgba(0, 0, 255, 1)';
  ctx.fillRect(CLOUD_X + COLUMN_GAP + (BAR_WIDTH * playerIndex), CLOUD_Y * GAP, COLUMN_WIDTH, COLUMN_HEIGHT);

  var playerIndex = 3;
  var playerName = 'Игорь';

  //Игрок 'Игорь - 3'
  ctx.fillStyle = 'black';
  ctx.fillText(playerName, CLOUD_X + COLUMN_GAP + (BAR_WIDTH * playerIndex), CLOUD_HIEGHT);
  ctx.fillStyle = 'rgba(0, 0, 255, 1)';
  ctx.fillRect(CLOUD_X + COLUMN_GAP + (BAR_WIDTH * playerIndex), CLOUD_Y * GAP, COLUMN_WIDTH, COLUMN_HEIGHT);
};
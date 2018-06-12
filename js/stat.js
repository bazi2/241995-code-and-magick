'use strict';

//Задаю константы
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 16;
var GIST_HEIGHT = 150;
var COLUMN_WIDTH = 40;
var COLUMN_GAP = 50;
var barWidth = COLUMN_WIDTH + COLUMN_GAP;

//Убираю повторения отрисовки облака задав функцию
var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx) {
  //Нарисовала тень
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');

  //Нарисовала облако
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'white');

  //Рисую гистограмму

  //Приветственный текст
  ctx.font = FONT_GAP;
  ctx.fillStyle = 'black';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + (GAP * 4));
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + (GAP * 6));

  //Сокращаю запись имен через переменные
  var playerIndex = 0;
  var playerName = 'Вы';

  var players = ['Вы', 'Кекс', 'Катя', 'Игорь'];

  //Данные игрока: 'Вы'
  ctx.fillStyle = 'black';
  ctx.fillText(playerName, CLOUD_X + GAP, CLOUD_HEIGHT);
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(CLOUD_X + (GAP * 1) + (barWidth * playerIndex), CLOUD_Y + (GAP * 8), COLUMN_WIDTH, GIST_HEIGHT);

  //Данные игрока: 'Кекс'
  var playerIndex = 1;
  var playerName = 'Кекс';

  ctx.fillStyle = 'black';
  ctx.fillText(playerName, CLOUD_X + barWidth, CLOUD_HEIGHT);
  ctx.fillStyle = 'rgba(0, 0, 255, 1)';
  ctx.fillRect(CLOUD_X + (GAP * 0) + (barWidth * playerIndex), barWidth, COLUMN_WIDTH, GIST_HEIGHT);

  //Данные игрока: 'Катя'
  var playerIndex = 2;
  var playerName = 'Катя';

  ctx.fillStyle = 'black';
  ctx.fillText(playerName, CLOUD_X + barWidth * 2, CLOUD_HEIGHT);
  ctx.fillStyle = 'rgba(0, 0, 255, 0.7)';
  ctx.fillRect(CLOUD_X + (GAP * 0) + (barWidth * playerIndex), barWidth, COLUMN_WIDTH, GIST_HEIGHT);

  //Данные игрока: 'Игорь'
  var playerIndex = 3;
  var playerName = 'Игорь';

  ctx.fillStyle = 'black';
  ctx.fillText(playerName, CLOUD_X + (barWidth * 3), CLOUD_HEIGHT);
  ctx.fillStyle = 'rgba(0, 0, 255, 0.5)';
  ctx.fillRect(CLOUD_X + (GAP * 0) + (barWidth * playerIndex), barWidth, COLUMN_WIDTH, GIST_HEIGHT);
};

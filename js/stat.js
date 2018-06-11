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

  //Данные игрока: 'Вы'
  ctx.fillStyle = 'black';
  ctx.fillText('Вы', CLOUD_X + GAP, CLOUD_HEIGHT);
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(CLOUD_X + GAP, CLOUD_Y + (GAP * 8), COLUMN_WIDTH, GIST_HEIGHT);

  //Данные игрока: 'Кекс'
  ctx.fillStyle = 'black';
  ctx.fillText('Кекс', CLOUD_X + COLUMN_WIDTH + COLUMN_GAP, CLOUD_HEIGHT);
  ctx.fillStyle = 'rgba(0, 0, 255, 1)';
  ctx.fillRect(CLOUD_X + COLUMN_WIDTH + COLUMN_GAP, COLUMN_WIDTH + COLUMN_GAP, COLUMN_WIDTH, GIST_HEIGHT);

  //Данные игрока: 'Катя'
  ctx.fillStyle = 'black';
  ctx.fillText('Катя', CLOUD_X + (COLUMN_WIDTH + COLUMN_GAP) * 2, CLOUD_HEIGHT);
  ctx.fillStyle = 'rgba(0, 0, 255, 0.7)';
  ctx.fillRect(CLOUD_X + (COLUMN_WIDTH + COLUMN_GAP) * 2, COLUMN_WIDTH + COLUMN_GAP, COLUMN_WIDTH, GIST_HEIGHT);

  //Данные игрока: 'Игорь'
  ctx.fillStyle = 'black';
  ctx.fillText('Игорь', CLOUD_X + (COLUMN_WIDTH + COLUMN_GAP) * 3, CLOUD_HEIGHT);
  ctx.fillStyle = 'rgba(0, 0, 255, 0.5)';
  ctx.fillRect(CLOUD_X + (COLUMN_WIDTH + COLUMN_GAP) * 3, COLUMN_WIDTH + COLUMN_GAP, COLUMN_WIDTH, GIST_HEIGHT);
};
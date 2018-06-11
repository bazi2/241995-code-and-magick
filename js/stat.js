'use strict';

//Задаю константы
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

//Убираю повторения отрисовки облака задав функцию
var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_HEIGHT, CLOUD_WIDTH);
};

window.renderStatistics = function (ctx) {
  //Нарисовала тень
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');

  //Нарисовала облако
  renderCloud(ctx, 100, 10, 'white');

  //Рисую гистограмму

  //Приветственный текст
  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'black';
  ctx.fillText('Ура вы победили!', 110, 40);
  ctx.fillText('Список результатов:', 110, 60);

  //Данные игрока: 'Вы'
  ctx.fillStyle = 'black';
  ctx.fillText('Вы', 110, 270);
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(110, 80, 40, 150);

  //Данные игрока: 'Кекс'
  ctx.fillText('Кекс', 190, 270);
  ctx.fillStyle = 'rgba(0, 0, 255, 1)';
  ctx.fillRect(190, 80, 40, 150);

  //Данные игрока: 'Катя'
  ctx.fillText('Катя', 280, 270);
  ctx.fillStyle = 'rgba(0, 0, 255, 0.7)';
  ctx.fillRect(280, 80, 40, 150);
};
'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HIEGHT = 270;

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
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, 'white');

  //2. Текст приветствия о победе
  renderText(ctx, 'Ура вы победили!', 150, 40);
  renderText(ctx, 'Список результатов:', 150, 60);

  //3. Сама гистограмма
  //Цвет задала временно, чтобы видеть границы и расположение
  ctx.fillStyle = 'green';
  ctx.fillRect(110, 100, 400, 150);

  //4. Столбики играков

  //Игрок 'Вы'
  ctx.fillStyle = 'black';
  ctx.fillText('Вы', 120, 270);
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(120, 100, 40, 150);

  //Игрок 'Кекс'
  ctx.fillStyle = 'black';
  ctx.fillText('Кекс', 210, 270);
  ctx.fillStyle = 'rgba(0, 0, 255, 1)';
  ctx.fillRect(210, 100, 40, 150);

  //Игрок 'Катя'
  ctx.fillStyle = 'black';
  ctx.fillText('Катя', 300, 270);
  ctx.fillStyle = 'rgba(0, 0, 255, 1)';
  ctx.fillRect(300, 100, 40, 150);

  //Игрок 'Игорь'
  ctx.fillStyle = 'black';
  ctx.fillText('Игорь', 390, 270);
  ctx.fillStyle = 'rgba(0, 0, 255, 1)';
  ctx.fillRect(390, 100, 40, 150);
};
"use strict";

const btn = document.getElementById('btn');
const text = document.querySelector('input[type=text]');
const spanText = document.getElementById('text-span');
const square = document.getElementById('square');
const circle = document.querySelector('#circle');
const btnZhmyak = document.getElementById('e_btn');
const range = document.getElementById('range');
const spanRange = document.getElementById('range-span');


const bgcolorSquare = () => {
  const choiceColor = text.value.trim().toLowerCase();

  square.style.backgroundColor = choiceColor;

  if (square.style.backgroundColor) {
    spanText.textContent = `выбран цвет: ${square.style.backgroundColor}`;
  } else {
    spanText.textContent = ``;
  }
};

const resizeCircle = (event) => {
  const persent = event.target.value + '%';
  circle.style.width = persent;
  circle.style.height = persent;
  spanRange.textContent = persent;
};

btn.addEventListener('click', bgcolorSquare);

btnZhmyak.style.display = 'none';

range.value = Math.round(circle.offsetWidth * 100 / square.offsetWidth);
spanRange.textContent = range.value + '%';

range.addEventListener('input', resizeCircle);





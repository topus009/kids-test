import variables from '../variables/_variables';
import renderArrow from './_renderArrow';

export default function step_1(e, i, block_a) {
  return new Promise(function (resolve) {
    let RESULT = false;
    const {
      colors,
    } = variables;
    // отрисовка стрелки
    renderArrow(e.a, i, 0);

    const arrow_input_1 = document.getElementById('input_' + i);
    // слушатель поля ввода
    arrow_input_1.addEventListener('change', function (x1) {
      if (+x1.target.value !== e.a) {
        arrow_input_1.style.color = colors.error;
        block_a.style.backgroundColor = colors.warning;
      }

      if (+x1.target.value === e.a) {
        arrow_input_1.style.color = colors.black;
        block_a.style.backgroundColor = colors.transparent;
        RESULT = true;
        resolve(RESULT);
      }
    });
  });
}

import variables from '../variables/_variables';
import renderArrow from './_renderArrow';

export default function step_2(e, i, pos, block_b) {
  return new Promise(function (resolve) {
    let RESULT = false;
    const {
      colors,
    } = variables;
    // отрисовка стрелки
    renderArrow(e.b, i + 1, pos);

    const arrow_input_2 = document.getElementById('input_' + (i + 1));
    // слушатель поля ввода
    arrow_input_2.addEventListener('change', function (x2) {
      if (+x2.target.value !== e.b) {
        arrow_input_2.style.color = colors.error;
        block_b.style.backgroundColor = colors.warning;
      }

      if (+x2.target.value === e.b) {
        arrow_input_2.style.color = colors.black;
        block_b.style.backgroundColor = colors.transparent;
        RESULT = true;
        resolve(RESULT);
      }
    });
  });
}

import renderArrow from './_renderArrow.js';

export default function step_1(e, i, block_a) {
  return new Promise(function (resolve) {
    let RESULT = false;
    renderArrow(e.a, i, 0);

    const arrow_input_1 = document.getElementById('input_' + i);

    arrow_input_1.addEventListener('change', function (x1) {
      if (+x1.target.value !== e.a) {
        arrow_input_1.style.color = 'red';
        block_a.style.backgroundColor = '#FBA846';
      }

      if (+x1.target.value === e.a) {
        arrow_input_1.style.color = 'black';
        block_a.style.backgroundColor = 'transparent';
        RESULT = true;
        resolve(RESULT);
      }
    });
  });
}

import renderArrow from './_renderArrow.js';

export default function step_2(e, i, pos, block_b) {
  return new Promise(function (resolve) {
    let RESULT = false;
    renderArrow(e.b, i + 1, pos);

    const arrow_input_2 = document.getElementById('input_' + (i + 1));

    arrow_input_2.addEventListener('change', function (x2) {
      if (+x2.target.value !== e.b) {
        arrow_input_2.style.color = 'red';
        block_b.style.backgroundColor = '#FBA846';
      }

      if (+x2.target.value === e.b) {
        arrow_input_2.style.color = 'black';
        block_b.style.backgroundColor = 'transparent';
        RESULT = true;
        resolve(RESULT);
      }
    });
  });
}

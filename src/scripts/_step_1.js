import step_2 from './_step_2';

export default function step_1(e, i, renderArrow, block_a, block_b, pos) {
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
      step_2(e, i, renderArrow, pos, block_b);
    }
  });
}
// ==================
// ==================

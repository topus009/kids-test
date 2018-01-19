import result from './_result';

export default function step_2(e, i, renderArrow, pos, block_b) {
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
      result(e);
    }
  });
}
// ==================
// ==================

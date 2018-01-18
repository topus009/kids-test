/* eslint-disabl */
import config from './_config.js';
import calcTasks from './_calcTasks.js';
import renderArrow from './_renderArrow';

document.addEventListener('DOMContentLoaded', function () {
  // ==================
  (function () {
    const newData = calcTasks(config);
    console.warn(newData);
    // for () {

    // }
    newData.forEach((e, i) => {
      // =========== index = 1
      // if (i === 1) {
      console.info(i);
      console.info(e);
      const pos = e.a * 38;
      (function step_1() {
        const block_a = document.getElementById('a');
        const block_b = document.getElementById('b');

        block_a.innerHTML = e.a;
        block_b.innerHTML = e.b;
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
            const step_2 = function () {
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
                  const res_input = document.getElementById('res_input');
                  res_input.classList.remove('hidden');
                  res_input.addEventListener('change', function (res) {
                    if (+res.target.value !== e.res) {
                      res_input.style.color = 'red';
                    }
                    if (+res.target.value === e.res) {
                      res_input.style.color = 'black';
                      res_input.classList.add('hidden');
                      document.getElementById('res').innerText = e.res;
                    }
                  });
                }
              });
            };
            step_2();
          }
        });
      }());
      // }
      // ================ index = 1
    });
  }());
  // ================
});
/*
*

*

*

// renderArrow(e.res, i, 0);

*

*/

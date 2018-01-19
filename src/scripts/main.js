/* eslint-disabl */
import config from './_config.js';
import calcTasks from './_calcTasks.js';
import renderArrow from './_renderArrow';
import step_1 from './_step_1';

document.addEventListener('DOMContentLoaded', function () {
  // ==================
  (function () {
    const newData = calcTasks(config);
    const block_a = document.getElementById('a');
    const block_b = document.getElementById('b');
    console.warn(newData);

    for (let i = 0; i < newData.length; i++) {
      const e = newData[i];

      block_a.innerHTML = e.a;
      block_b.innerHTML = e.b;

      const pos = e.a * 38;
      const RESULT = false;

      step_1(e, i, renderArrow, block_a, block_b, pos);
      if (!RESULT) {
        break;
      }
    }
  }());
});

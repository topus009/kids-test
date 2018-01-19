/* eslint-disabl */
import config from './parts/_config.js';
import calcTasks from './parts/_calcTasks.js';
import renderArrow from './parts/_renderArrow';
import step_1 from './parts/_step_1';

document.addEventListener('DOMContentLoaded', function () {
  // ===================
  const COUNT = 0;

  (function main() {
    // let RESULT = null;
    const newData = calcTasks(config);
    const e = newData[COUNT];
    const pos = e.a * 38;
    const block_a = document.getElementById('a');
    const block_b = document.getElementById('b');

    console.warn(newData);

    block_a.innerHTML = e.a;
    block_b.innerHTML = e.b;

    step_1(e, COUNT, renderArrow, block_a, block_b, pos);
  }());
});


// COUNT += 1;
// const check_result = function () {
//   const res = document.getElementById('res').innerText;
//   console.log(`%c ${res}`, 'color: #19FF00;');
//   RESULT = res;
//   while (RESULT === e.res && COUNT < newData.length) {
//     main();
//   }
// };
// setInterval(check_result, 2000);

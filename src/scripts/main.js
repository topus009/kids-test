/* eslint-disabl */
import config from './_config.js';
import calcTasks from './_calcTasks.js';
import renderArrow from './_renderArrow';

document.addEventListener('DOMContentLoaded', function () {
  // ===================
  (function () {
    const newData = calcTasks(config);
    console.warn(newData);
    newData.forEach((e, i) => {
      if (i === 0) {
        console.info(i);
        console.info(e);
        const color = ['#31ff72', '#00ca3f', '#00910c'];
        renderArrow(e.a, i, color[0]);
        renderArrow(e.b, i, color[1]);
        renderArrow(e.res, i, color[2]);
      }
      if (i === 1) {
        console.info(i);
        console.info(e);
        const color = ['#16cfff', '#00a6d1', '#0019d7'];
        renderArrow(e.a, i, color[0]);
        renderArrow(e.b, i, color[1]);
        renderArrow(e.res, i, color[2]);
      }
      if (i === 2) {
        console.info(i);
        console.info(e);
        const color = ['#16cfff', '#00a6d1', '#0019d7'];
        renderArrow(e.a, i, color[0]);
        renderArrow(e.b, i, color[1]);
        renderArrow(e.res, i, color[2]);
      }
    });
  }());
  // ===================
});

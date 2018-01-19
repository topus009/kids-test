import config from './parts/_config.js';
import calcTasks from './parts/_calcTasks.js';
import step_1 from './parts/_step_1.js';
import step_2 from './parts/_step_2.js';
import result from './parts/_result.js';

document.addEventListener('DOMContentLoaded', function () {
  const newData = calcTasks(config);
  let i = 0;

  (function main() {
    const e = newData[i];
    const pos = e.a * 38;

    if (i < newData.length) {
      const block_a = document.getElementById('a');
      const block_b = document.getElementById('b');
      block_a.innerHTML = e.a;
      block_b.innerHTML = e.b;
      step_1(e, i, block_a)
        .then(() => {
          step_2(e, i, pos, block_b)
            .then(() => {
              result(e)
                .then(() => {
                  i++;
                  const curves = document.querySelectorAll('.curve');
                  curves.forEach((c) => {
                    c.remove();
                  });
                  if (i < newData.length) {
                    main();
                  }
                  if (i >= newData.length) {
                    document.getElementById('app').innerHTML = '<div id="end">Ура!!!<br/>Вы сделали все задачки.<br/>Так держать!<div/>';
                  }
                });
            });
        });
    }
  }());
});

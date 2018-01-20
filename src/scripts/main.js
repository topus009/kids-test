import variables from './variables/_variables';
import config from './parts/_config';
import calcTasks from './parts/_calcTasks';
import step_1 from './parts/_step_1';
import step_2 from './parts/_step_2';
import result from './parts/_result';

document.addEventListener('DOMContentLoaded', function () {
  const {
    block_a,
    block_b,
    app,
    app_finish_div,
  } = variables;
  // рассчет случайных чисел
  const newData = calcTasks(config);
  // индекс задачи
  let i = 0;

  (function main() {
    const e = newData[i];
    // масштаб отступа
    const pos = e.a * 38;

    if (i < newData.length) {
      block_a.innerHTML = e.a;
      block_b.innerHTML = e.b;
      // ввод первой цифры
      step_1(e, i, block_a)
        .then(() => {
          // ввод второй цифры
          step_2(e, i, pos, block_b)
            .then(() => {
              // ввод ответа
              result(e)
                .then(() => {
                  i++;
                  const curves = document.querySelectorAll('.curve');
                  curves.forEach((c) => {
                    c.remove();
                  });
                  // рекурсия
                  if (i < newData.length) {
                    main();
                  }
                  // очистка блока app и поздравление
                  if (i >= newData.length) {
                    app.innerHTML = app_finish_div;
                  }
                });
            });
        });
    }
  }());
});

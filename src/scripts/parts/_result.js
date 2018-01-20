import variables from '../variables/_variables';

export default function result(e) {
  return new Promise(function (resolve) {
    let RESULT = false;
    const {
      main_res,
      res_input_div,
      colors,
    } = variables;
    const res_input = document.getElementById('res_input');

    res_input.classList.remove('hidden');
    // слушатель поля ввода
    res_input.addEventListener('change', function (res) {
      if (+res.target.value !== e.res) {
        res_input.style.color = colors.error;
      }
      if (+res.target.value === e.res) {
        res_input.style.color = colors.black;
        res_input.classList.add('hidden');
        main_res.innerText = `${e.res}`;
        RESULT = true;
        // задержка перед следующей задачей
        setTimeout(() => {
          main_res.innerHTML = res_input_div;
          resolve(RESULT);
        }, 1000);
      }
    });
  });
}

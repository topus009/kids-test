export default function result(e) {
  return new Promise(function (resolve) {
    let RESULT = false;
    const res_input = document.getElementById('res_input');
    res_input.classList.remove('hidden');

    res_input.addEventListener('change', function (res) {
      if (+res.target.value !== e.res) {
        res_input.style.color = 'red';
      }
      if (+res.target.value === e.res) {
        res_input.style.color = 'black';
        res_input.classList.add('hidden');
        const main_res = document.getElementById('res');
        main_res.innerText = `${e.res}`;
        RESULT = true;
        setTimeout(() => {
          main_res.innerHTML = '? <input id="res_input" class="hidden" maxlength="2"/>';
          resolve(RESULT);
        }, 1000);
      }
    });
  });
}

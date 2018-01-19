export default function result(e) {
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
// ==================
// =================


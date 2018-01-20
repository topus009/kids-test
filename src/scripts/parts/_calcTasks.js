export default function calcTasks(config) {
  const {
    a,
    b,
    ab,
  } = config;
  const data = [];
  let rA;
  let rB;
  let counter = 0;
  // генерация случайных чисел
  function rand(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
  }
  // тут задается количесво задачек
  while (counter <= 10) {
    counter++;
    rA = rand(a[0], a[1]);
    rB = rand(b[0], b[1]);
    // запись подходящих данных
    if (rA + rB <= ab[1] && rA + rB >= ab[0]) {
      data[counter] = {
        a: rA,
        b: rB,
        res: rA + rB,
      };
    }
  }
  // очистка пустот и возврат данных
  return data.filter(arr => arr);
}

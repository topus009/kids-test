export default function calcTasks(config) {
  console.warn(config);
  const {
    a,
    b,
    ab,
  } = config;

  let rA;
  let rB;
  let counter = 0;
  const data = [];

  function rand(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
  }

  while (counter <= 20) {
    counter++;
    rA = rand(a[0], a[1]);
    rB = rand(b[0], b[1]);
    if (rA + rB <= ab[1] && rA + rB >= ab[0]) {
      data[counter] = {
        a: rA,
        b: rB,
        res: rA + rB,
      };
    }
  }

  const newData = data.filter(arr => arr);

  return newData;
}

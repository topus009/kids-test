// условие задачи
const config = {
  a: [6, 9],
  ab: [11, 14],
};
// рассчет недостающих данных
config.b = [config.ab[0] - config.a[1], config.ab[1] - config.a[0]];

export default config;

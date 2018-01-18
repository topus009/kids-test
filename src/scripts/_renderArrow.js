export default function renderArrow(task, index, color) {
  const div = document.createElement('div');
  div.id = 'curve_' + index;
  div.className = 'curve';
  // const top = 40;
  const ds = div.style;
  task *= 0.949;
  ds.width = (task * 40) + 'px';
  ds.height = ((task * 40) * 0.5) + 'px';
  ds.borderRadius = (task * 40) + 'px ' + (task * 40) + 'px 0 0';
  ds.borderColor = color;
  ds.borderWidth = '2px';
  ds.borderBottom = 0;
  ds.top = -((task * 40) / 2) + 'px';
  ds.left = '-1px';

  document.getElementById('ruler').appendChild(div);
}
// ===================

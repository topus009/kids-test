import variables from '../variables/_variables';

export default function renderArrow(task, index, pos) {
  const {
    ruler,
    colors,
  } = variables;
  const input = document.createElement('input');
  const div = document.createElement('div');
  const ds = div.style;
  task *= 0.949;
  const scale_fix = (task * 40);

  div.id = 'curve_' + index;
  div.className = 'curve';
  // фикс масштаба
  ds.width = scale_fix + 'px';
  ds.height = (scale_fix * 0.5) + 'px';
  ds.borderRadius = scale_fix + 'px ' + scale_fix + 'px 0 0';
  ds.borderWidth = '2px';
  ds.borderBottom = 0;
  ds.top = -(scale_fix / 2) + 'px';
  ds.left = -1 + pos + 'px';
  ds.borderColor = colors.curve_color;

  input.id = 'input_' + index;
  input.maxLength = '2';
  input.className = 'input';

  ruler.appendChild(div);
  div.appendChild(input);
}

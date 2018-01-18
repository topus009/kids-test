export default function renderArrow(task, index, color) {
  const canvas = document.createElement('canvas');
  canvas.id = 'canvas_' + index;
  const ctx = canvas.getContext('2d');
  canvas.style.width = (task * 40) + 'px';
  // canvas.style.width = 'auto';
  canvas.style.width = (task * 50) + 'px';
  // canvas.style.height = 200 + 'px';
  // canvas.style.height = 'auto';
  canvas.style.height = 200 + 'px';
  canvas.style.borderColor = color;
  const top = 40;
  task *= 40;
  // ================
  const bez1 = {
    sx: 0,
    sy: 150 - top,
    cx1: task / 2,
    cy1: 75 - top,
    cx2: task / 2,
    cy2: 75 - top,
    ex: task,
    ey: 150 - top,
  };

  function CubicN(T, a, b, c, d) {
    const t2 = T * T;
    const t3 = t2 * T;
    return a + (-a * 3 + T * (3 * a - a * T)) *
    T + (3 * b + T * (-6 * b + b * 3 * T)) *
    T + (c * 3 - c * 3 * T) * t2 + d * t3;
  }

  function getCubicBezierXYatT(startPt, controlPt1, controlPt2, endPt, T) {
    const x = CubicN(T, startPt.x, controlPt1.x, controlPt2.x, endPt.x);
    const y = CubicN(T, startPt.y, controlPt1.y, controlPt2.y, endPt.y);
    return ({
      x: x,
      y: y,
    });
  }

  function drawCurvedArrow(bez) {
    const pointNearEnd = getCubicBezierXYatT({
      x: bez.sx,
      y: bez.sy,
    }, {
      x: bez.cx1,
      y: bez.cy1,
    }, {
      x: bez.cx2,
      y: bez.cy2,
    }, {
      x: bez.ex,
      y: bez.ey,
    }, 0.99);
    const dx = bez.ex - pointNearEnd.x;
    const dy = bez.ey - pointNearEnd.y;
    const endingAngle = Math.atan2(dy, dx);

    ctx.moveTo(bez.sx, bez.sy);
    ctx.bezierCurveTo(bez.cx1, bez.cy1, bez.cx2, bez.cy2, bez.ex, bez.ey);
    ctx.lineWidth = 2;
    ctx.strokeStyle = color;
    ctx.stroke();

    const size = ctx.lineWidth;

    ctx.beginPath();
    ctx.save();
    ctx.translate(bez.ex, bez.ey);
    ctx.rotate(endingAngle);
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -size * 2);
    ctx.lineTo(size * 3, 0);
    ctx.lineTo(0, size * 2);
    ctx.lineTo(0, 0);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
    ctx.restore();
  }

  drawCurvedArrow(bez1);
  // document.body.insertAdjacentHTML('afterbegin', canvas);
  // document.body.appendChild(canvas);
  document.getElementById('ruler').appendChild(canvas);
}
// =================

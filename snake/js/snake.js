window.onload = function () {
  canva = this.document.getElementById("screen");
  ctx = canva.getContext("2d");
  document.addEventListener("keydown", keyPush);
  setInterval(game, 1000 / 15);
}

px = py = 10;
gs = tc = 20;
ax = ay = 15
xv = yv = 0;
trail = [];
tail = 5;
points = 0;

function game() {
  px += xv;
  py += yv;

  if (px < 0) {
    px = tc - 1;
  }

  if (px > tc - 1) {
    px = 0;
  }

  if (py < 0) {
    py = tc - 1;
  }

  if (px > tc - 1) {
    py = 0;
  }

  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canva.width, canva.height);

  ctx.fillStyle = "lime";
  for (var i = 0; i < trail.length; i++) {
    ctx.fillRect(trail[i].x * gs, trail[i].y * gs, gs - 2, gs - 2)
    if (trail[i].x == px && trail[i].y == py) {
      tail = 5;
    }
  }

  trail.push({
    x: px,
    y: py
  });
 
  while (trail.length > tail) {
    /*html = `<h1>GAME OVER</h1>`
    html = this.document.getElementById("screen");*/
    trail.shift();
  }

  if (ax == px && ay == py) {
    tail++;
    points += 1
    console.log(points)
    points = this.document.getElementById("point");
    ax = Math.floor(Math.random() * tc);
    ay = Math.floor(Math.random() * tc);
  }

  ctx.fillStyle = "red";
  ctx.fillRect(ax * gs, ay * gs, gs - 2, gs - 2)
}

function keyPush(e) {
  switch (e.keyCode) {
    // xv = 0; yv = -1;
    case 38:
      xv = 0;
      yv = -1;
      break;

      // xv = -1; yv = 0;
    case 37:
      xv = -1;
      yv = 0;
      break;

      // xv = 0; yv= 1
    case 40:
      xv = 0;
      yv = 1;
      break;

      // xv = 1; yx = 0
    case 39:
      xv = 1;
      yv = 0;
      break;
  }
}
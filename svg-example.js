function createIcon(data, size) {
  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  var g = document.createElementNS("http://www.w3.org/2000/svg", "g");
  var path = document.createElementNS("http://www.w3.org/2000/svg", "path");

  svg.setAttribute("style", "width:"+size+"px;height:"+size+"px;");
  path.setAttribute("d", data);
  g.setAttribute("transform", "scale(0.0"+size+") translate(0, 1000) scale(1,-1)");
  g.appendChild(path);
  svg.appendChild(g);
  return svg;
}
function pencil(size) {
  return createIcon("M74 -37l330 507l1375 1047q236 -71 257 -333l-1379 -1047zM1534 1268q151 -80 188 -254l257 195q-35 184 -190 251zM526 502q17 4 28 4q40 0 40 -38l-1 -10l829 635q-33 25 -65 39zM622 420q46 -11 46 -59l833 638q-15 33 -42 59zM697 322q19 -1 28 -9.5t9 -24.5q 0 -14 -13 -41l828 633q-12 43 -26 75zM258 157l57 -72l311 92q68 60 68 89q0 12 -6.5 17.5t-20.5 5.5q-29 0 -100 -35q60 57 60 95q0 19 -10.5 28.5t-32.5 9.5q-23 0 -94 -34q63 54 63 95q0 11 -6 16.5t-19 5.5q-45 0 -96 -39z"
        ,size);
}

function appendIcon() {
  size = document.getElementById("iconSize").value;
  document.body.appendChild(pencil(size));
}
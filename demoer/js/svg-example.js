function createIcon(data, size) {
  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  var g = document.createElementNS("http://www.w3.org/2000/svg", "g");
  var path = document.createElementNS("http://www.w3.org/2000/svg", "path");

  svg.setAttribute("width", size);
  svg.setAttribute("height", size);
  svg.setAttribute("viewBox", "0 0 " + size*2.5 + " " + size*2.5)
  path.setAttribute("d", data);
  g.setAttribute("transform", "scale(0."+size+") translate(0, 2048) scale(1,-1)");
  g.appendChild(path);
  svg.appendChild(g);
  return svg;
}
function pencil() {
  size = document.getElementById("iconSize").value;
  return createIcon("M74 -37l330 507l1375 1047q236 -71 257 -333l-1379 -1047zM1534 1268q151 -80 188 -254l257 195q-35 184 -190 251zM526 502q17 4 28 4q40 0 40 -38l-1 -10l829 635q-33 25 -65 39zM622 420q46 -11 46 -59l833 638q-15 33 -42 59zM697 322q19 -1 28 -9.5t9 -24.5q 0 -14 -13 -41l828 633q-12 43 -26 75zM258 157l57 -72l311 92q68 60 68 89q0 12 -6.5 17.5t-20.5 5.5q-29 0 -100 -35q60 57 60 95q0 19 -10.5 28.5t-32.5 9.5q-23 0 -94 -34q63 54 63 95q0 11 -6 16.5t-19 5.5q-45 0 -96 -39z"
        ,size);
}

function skull() {
  size = document.getElementById("iconSize").value;
  return createIcon("M800 805l-20 -51q-38 -13 -103 -13q-32 0 -58 3.5t-45 9.5l-20 51l-140 67l-13 84q-3 24 -43 94q-31 52 -31 167q0 134 97 217t253 83t253 -83t97 -217q0 -115 -64 -225q-6 -12 -10 -36l-13 -84zM866 782l-25 -99l-61 -53q-16 -31 -42.5 -46.5t-62.5 -15.5q-72 0 -105 62                  l-61 53l-25 99l36 9q6 -15 9 -23q23 -53 50.5 -70t91.5 -17q72 0 99.5 16t50.5 71q3 8 9 23zM681 369q65 36 228 105q8 4 42 18q58 59 96 88.5t55 29.5q21 0 31 -13t10 -40q0 -23 -7 -65q43 -54 43 -80q0 -22 -12 -33.5t-36 -11.5q-12 0 -36.5 12.5t-62.5 36.5 q-92 -17 -264 -103q22 -13 32 -19q60 -34 148 -91q11 -7 50 -30q182 -21 182 -92q0 -46 -98 -62q-46 -56 -76 -56q-36 0 -70 94q-3 10 -11 29q-140 115 -252 174q-137 -77 -254 -184q-16 -113 -68 -113q-33 0 -76 64q-102 0 -102 56q0 41 38 59.5t160 36.5q91 67 216 134 q-168 84 -274 103q-25 -22 -46 -33t-39 -11q-26 0 -39.5 11t-13.5 32q0 19 44 77q-10 41 -10 62q0 30 12 44.5t35 14.5t60 -30t89 -91q115 -41 276 -123zM448 1054q0 -96 83 -96q84 0 84 103q0 85 -81 85q-43 0 -64.5 -23t-21.5 -69zM744 1054q0 -96 84 -96t84 103 q0 43 -20.5 64t-61.5 21q-86 0 -86 -92zM678 973q-18 -30 -37 -53q-24 -27 -24 -42q0 -16 9.5 -24t27.5 -8q11 0 24 8q13 -8 24 -8q37 0 37 33q0 14 -24 41q-20 24 -37 53z"
    ,size);
}

function appendIcon(icon) {
  document.body.appendChild(icon);
}
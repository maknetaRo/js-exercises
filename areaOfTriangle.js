// Find the area of a triangle knowing the lengths of its three sides

function areaOfTriangle(a, b, c) {
  const p = (a + b + c) / 2;
  const area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
  return Number(Math.round(area + "e+2") + "e-2");
}

const area = areaOfTriangle(5, 6, 7);
console.log(area);

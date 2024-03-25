const EcuacionCuadratica = (a, b, c) => {
    const discriminante = b * b - 4 * a * c;
    return discriminante >= 0;
};

const A = 1;
const B = -3;
const C = 4;
if (EcuacionCuadratica(A, B, C)) {
    console.log("La ecuación tiene solución real.");
} else {
    console.log("La ecuación no tiene solución real.");
}

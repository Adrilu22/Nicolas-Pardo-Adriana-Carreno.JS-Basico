const tipoTriangulo = (lado1, lado2, lado3) => {
    if (lado1 === lado2 && lado2 === lado3) {
        return "Equilátero";
    } else if (lado1 !== lado2 && lado2 !== lado3 && lado1 !== lado3) {
        return "Escaleno";
    } else {
        return "Isósceles";
    }
};
const ladoA = 3;
const ladoB = 4;
const ladoC = 6;
console.log(`El triángulo es ${tipoTriangulo(ladoA, ladoB, ladoC)}.`);

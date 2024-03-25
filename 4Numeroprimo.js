function esPrimoDeclarada(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
    }
    return true;
}
const numeroPrimo = 4;
if (esPrimoDeclarada(numeroPrimo)) {
    console.log(`${numeroPrimo} es un número primo.`);
} else {
    console.log(`${numeroPrimo} no es un número primo.`);
}

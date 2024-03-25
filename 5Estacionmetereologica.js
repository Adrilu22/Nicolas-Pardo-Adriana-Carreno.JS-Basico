const estacionMeteorologica = mes => {
    if (mes >= 3 && mes <= 5) {
        return "Primavera";
    } else if (mes >= 6 && mes <= 8) {
        return "Verano";
    } else if (mes >= 9 && mes <= 11) {
        return "Otoño";
    } else {
        return "Invierno";
    }
};
const numeroMes = 9;
console.log(`La estación meteorológica es ${estacionMeteorologica(numeroMes)}.`);

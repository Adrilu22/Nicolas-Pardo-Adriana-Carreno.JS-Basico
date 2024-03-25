    function esParDeclarada(numero) {
        return numero % 2===0 ;
    }

    const miNumero = 7;
    if (esParDeclarada(miNumero)) {
        console.log(`${miNumero} es un número par.`);
    } else {
        console.log(`${miNumero} es un número impar.`);
    }

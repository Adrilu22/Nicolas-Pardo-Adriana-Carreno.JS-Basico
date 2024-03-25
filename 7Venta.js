function descuento(decenas){
    const preciodocena= 60000;
    let descuento=0;
    let total;
    if (decenas>10){
        descuento=0.2;
    }else if(decenas>=5){
        descuento=0.15;
    }else if(decenas>1){
        descuento=0.1;
    }
    total=(decenas*preciodocena)*(1-descuento);
    return  "el valor total fue de "+total;
}
console.log(descuento(1))
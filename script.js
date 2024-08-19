function sumAll(a,b){
    let suma = 0;
    if (a > b){
        [a,b] = [b,a];
    }

    for (let i = a; i <= b; i++){
        suma += i;
    }

    console.log(suma);
}

sumAll(2,5);
sumAll(1,5);
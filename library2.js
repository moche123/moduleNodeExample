const Operations = {};

Operations.sumatoria=(...a)=>{
    let suma = 0;
    a.forEach((el)=>{
        suma += el;
    })
    return suma;
}
Operations.productoria=(...a)=>{
    let suma = 1;
    a.forEach((el)=>{
        suma *= el;
    })
    return suma;
}
module.exports = Operations;

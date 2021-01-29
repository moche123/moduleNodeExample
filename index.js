const Compare = require('./library1');
const Operations = require('./library2');
console.log("Mayor de 4 y 5: ",Compare.mayor(4,5));
console.log("Menor de 4 y 5: ",Compare.menor(4,5));
console.log("Suma de un conjunto de números: ",Operations.sumatoria(1,4,3,5,6));
console.log("Producto de un conjunto de números: ",Operations.productoria(1,4,3,5,6));
console.log("Uniendo ambos: ",Operations.sumatoria(Compare.mayor(2,3),Compare.menor(2,3)));
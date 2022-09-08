let btn = document.getElementById("btnAgregar");        //Botón

btn.addEventListener("click", function(event) {
event.preventDefault()

let prod = document.getElementById("Name");             //Producto
console.log(prod.value);
let cant = document.getElementById("Number");           //Cantidad
console.log(cant.value);


});
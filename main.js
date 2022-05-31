
let cantidad=0
let producto
let precio=0
let subtotal=0
let total=0
do {
    producto=prompt("pantalon o polera")
    if (producto=="pantalon" || producto == "polera"){
    cantidad=prompt("cuantos quieres")
    if (cantidad>0 && cantidad<1000){
         switch (producto){
            case "pantalon":
                 precio = 200
                 break;
            case "polera":
                 precio = 100
                 break;
            default:
                 break;
        }
         subtotal = precio * cantidad
         total=total+subtotal
         alert ("El total de tu compra es =$" + total)}
    else{
    alert("Disculpa, pero la cantidad debe estar entre 0 y 1000")
    }
  }
  else
  alert("Disculpa, no entendí que producto quieres")
    }
while
(continuar=confirm("¿Quieres continuar comprando?"))


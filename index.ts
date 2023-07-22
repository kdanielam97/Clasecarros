import {Carro} from "./clasecarro";

let carroSandra: Carro = new Carro(2023, "icm 926", "renault", 4 , "rojo")
let carrocharles: Carro = new Carro(2023, "por 027", "forde", 5 , "blanco")
let carrobrian: Carro = new Carro(2028, "vhs 123" , "mazda" , 4 ,  "negron")
//console.log(carroSandra,carrocharles,carrobrian)

carrocharles.encender();

console.log(carrobrian.getPlaca())
console.log(carrocharles.getPlaca())

carroSandra.setModelo(2025)
console.log(carroSandra.getModelo())

import { FrangoAssado } from "./assets/js/frangoAssado.js"
import {Pepperoni} from "./assets/js/addPepperoni.js"
import {QueijoMussarelaRalado} from "./assets/js/addQueijo.js"
import {Carne} from "./assets/js/carne.js"

  const meuSanduiche = new FrangoAssado()
  const sanduicheComQueijo = new QueijoMussarelaRalado(meuSanduiche)
  const sanduicheComQueijoEPepperoni = new Pepperoni(sanduicheComQueijo)
  
  console.log(sanduicheComQueijoEPepperoni.getDescription() + " custa R$ " + sanduicheComQueijoEPepperoni.cost().toFixed(2))
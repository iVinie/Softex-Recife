import { Pato } from "./assets/js/galinha.js";
import { AdaptadorPato } from "./assets/js/adaptadorPato.js";
import { AdaptadorPatoDemonstracao } from "./assets/js/adaptadorPatoDemo.js";

const pato = new Pato();
const adaptador = new AdaptadorPato(pato);
AdaptadorPatoDemonstracao.demonstrar(adaptador);

import { Sanduiche } from "./sanduiche.js"

export class Adicional extends Sanduiche {
    constructor(sanduiche) {
      super()
      this.sanduiche = sanduiche
    }
  
    cost() {
      return this.sanduiche.cost()
    }
  
    getDescription() {
      return this.sanduiche.getDescription()
    }
  }
  
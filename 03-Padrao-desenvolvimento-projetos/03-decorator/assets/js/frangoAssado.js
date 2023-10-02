import { Sanduiche } from "./sanduiche.js"

export class FrangoAssado extends Sanduiche {
    constructor() {
      super()
      this.description += " frango assado"
    }
  
    cost() {
      return 4.50
    }
  }
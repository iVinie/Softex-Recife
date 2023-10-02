import { PC } from "./PC.js"
import { Server } from "./pcServer.js"

export class ComputerFactory {
  createComputer(type, ram, hdd, cpu) {
    switch (type.toUpperCase()) {
      case "PC":
        return new PC(ram, hdd, cpu)
      case "SERVER":
        return new Server(ram, hdd, cpu)
      default:
        throw new Error("Tipo de computador desconhecido")
    }
  }
}
import { Computer } from "./interface.js"

export class Server extends Computer {
  constructor(ram, hdd, cpu) {
    super(ram, hdd, cpu, "Server");
  }
}

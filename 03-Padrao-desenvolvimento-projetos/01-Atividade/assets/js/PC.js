import { Computer } from "./interface.js"

export class PC extends Computer {
  constructor(ram, hdd, cpu) {
    super(ram, hdd, cpu, "PC");
  }
}

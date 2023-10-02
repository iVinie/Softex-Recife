export class Computer {
    constructor(ram, hdd, cpu, type) {
      this.ram = ram
      this.hdd = hdd
      this.cpu = cpu
      this.type = type
    }
  
    toString() {
      return `Computer Type: ${this.type}, RAM: ${this.ram}GB, HDD: ${this.hdd}GB, CPU: ${this.cpu}GHz`
    }
  }
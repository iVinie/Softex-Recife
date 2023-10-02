import { ComputerFactory } from "./assets/js/fabrica.js"

const factory = new ComputerFactory();
try{
    const pc = factory.createComputer("PC", 8, 512, 2.4);
    console.log(pc.toString())
}catch(e){
    console.log(e)
}finally{
    console.log('Finalizando a fábrica')
}

try{
    const server = factory.createComputer("Server", 32, 1024, 3.0);
    console.log(server.toString())
}catch(e){
    console.log(e)
}finally{
    console.log('Finalizando a fábrica')
}


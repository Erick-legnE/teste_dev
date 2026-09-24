import { Servico } from "./Servico.js";

export class Vistoria extends Servico{
    constructor(codigo,cliente,descricao,status,tecnico_responsavel, local){
        super(codigo,cliente,descricao,status,tecnico_responsavel),
        this.local = local;
    }

    executar(){
        console.log(`O local da vistoria será em: ${this.local}`)
    }
}
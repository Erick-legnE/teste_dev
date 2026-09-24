import { Servico } from "./Servico.js";

export class Manutencao extends Servico{
    constructor(codigo,cliente,descricao,status,tecnico_responsavel, defeito){
        super(codigo,cliente,descricao,status,tecnico_responsavel),
        this.defeito = defeito;
    }

    executar(){
        console.log(`O defeito ${this.defeito} será analisado e reparado.`)
    }
}
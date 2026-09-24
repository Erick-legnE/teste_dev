import { Servico } from "./Servico.js";

export class Instalacao extends Servico{
    constructor(codigo,cliente,descricao,status,tecnico_responsavel, nome_equipamento){
        super(codigo,cliente,descricao,status,tecnico_responsavel),
        this.nome_equipamento = nome_equipamento;
    }

    executar(){
        console.log(`O equipamento instalado: ${this.nome_equipamento}`)
    }
}
export class Servico{
    #status;
    
    constructor(codigo,cliente,descricao,status,tecnico_responsavel){
        this.codigo = codigo,
        this.cliente = cliente,
        this.descricao = descricao,
        this.#status = "agendado",
        this.tecnico_responsavel = "nao definido";
    }

    get status(){
        return this.#status;
    }

    iniciar(){
        this.#status = "em andamento"
    }

    concluir(){
        this.#status = "concluido"
    }

    definirTecnico(Tecnico){
        this.tecnico_responsavel = Tecnico;
    }

    executar(){
        throw new Error(
            'não foi implementado ainda.'
        )
    }

}
const servicos = []

export function cadastrarServico(servico){
    servicos.push(servico);
}

export function retornarServico(){
    return servicos
}

export function buscarServico(indice){
    return servicos[indice]
}

export function atualizarServico(indice,Tecnico){
    servicos[indice] = Tecnico;
}

export function deletarServico(indice){
    servicos.splice(indice,1);
}
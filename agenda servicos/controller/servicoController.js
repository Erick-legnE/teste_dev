import { Instalacao } from "../model/Instalacao.js";
import { Manutencao } from "../model/Manutencao.js";
import { Vistoria } from "../model/Vistoria.js";
import { 
    cadastrarServico, 
    retornarServico, 
    atualizarServico, 
    deletarServico 
} from "../repository/servicoRepository.js";

export function cadastroInstalacao(codigo, cliente, descricao, equipamento) {
    const servico = new Instalacao(codigo, cliente, descricao, equipamento);
    cadastrarServico(servico);
}

export function cadastroManutencao(codigo, cliente, descricao, defeito) {
    const servico = new Manutencao(codigo, cliente, descricao, defeito);
    cadastrarServico(servico);
}

export function cadastroVistoria(codigo, cliente, descricao, local) {
    const servico = new Vistoria(codigo, cliente, descricao, local);
    cadastrarServico(servico);
}

export function associarTecnico(indice, tecnico) {
    const servicos = retornarServico();
    if (servicos[indice]) {
        servicos[indice].definirTecnico(tecnico);
    }
}

export function iniciarServico(indice) {
    const servicos = retornarServico();
    if (servicos[indice]) {
        servicos[indice].iniciar();
    }
}

export function concluirServico(indice) {
    const servicos = retornarServico();
    if (servicos[indice]) {
        servicos[indice].concluir();
    }
}

export function atualizarInstalacao(indice, codigo, cliente, descricao, equipamento) {
    const servicos = retornarServico();
    const tecnicoAntigo = servicos[indice] ? servicos[indice].tecnico_responsavel : "nao definido";
    
    const novoServico = new Instalacao(codigo, cliente, descricao, equipamento);
    if (tecnicoAntigo !== "nao definido") {
        novoServico.definirTecnico(tecnicoAntigo);
    }
    atualizarServico(indice, novoServico);
}

export function atualizarManutencao(indice, codigo, cliente, descricao, defeito) {
    const servicos = retornarServico();
    const tecnicoAntigo = servicos[indice] ? servicos[indice].tecnico_responsavel : "nao definido";
    
    const novoServico = new Manutencao(codigo, cliente, descricao, defeito);
    if (tecnicoAntigo !== "nao definido") {
        novoServico.definirTecnico(tecnicoAntigo);
    }
    atualizarServico(indice, novoServico);
}

export function atualizarVistoria(indice, codigo, cliente, descricao, local) {
    const servicos = retornarServico();
    const tecnicoAntigo = servicos[indice] ? servicos[indice].tecnico_responsavel : "nao definido";
    
    const novoServico = new Vistoria(codigo, cliente, descricao, local);
    if (tecnicoAntigo !== "nao definido") {
        novoServico.definirTecnico(tecnicoAntigo);
    }
    atualizarServico(indice, novoServico);
}

export function excluirServico(indice) {
    deletarServico(indice);
}

export function listarServicos() {
    const servicos = retornarServico();
    console.log("\n--- LISTA DE SERVIÇOS ---");
    for (let i = 0; i < servicos.length; i++) {
        const s = servicos[i];
        
        let nomeTecnico = "não definido";
        if (s.tecnico_responsavel && s.tecnico_responsavel.nome) {
            nomeTecnico = s.tecnico_responsavel.nome;
        }

        console.log(`Índice: ${i}`);
        console.log(`Código: ${s.codigo}`);
        console.log(`Cliente: ${s.cliente}`);
        console.log(`Descrição: ${s.descricao}`);
        console.log(`Status: ${s.status}`);
        console.log(`Técnico: ${nomeTecnico}`);
        process.stdout.write("Resultado Executar: ");
        s.executar();
        console.log("------------------------");
    }
}
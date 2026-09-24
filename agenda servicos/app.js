import { Tecnico } from "./model/Tecnico.js";
import { 
    cadastroInstalacao, 
    cadastroManutencao, 
    cadastroVistoria, 
    associarTecnico, 
    iniciarServico, 
    concluirServico, 
    atualizarManutencao, 
    excluirServico, 
    listarServicos 
} from "./controller/servicoController.js";

const tecnico1 = new Tecnico("Carlos", "Elétrica");
const tecnico2 = new Tecnico("Ana", "Refrigeração");

cadastroInstalacao("001", "Empresa A", "Instalar Ar", "Ar Condicionado 12000 BTUs");
cadastroManutencao("002", "Empresa B", "Reparo de Vazamento", "Compressor sem ligar");
cadastroVistoria("003", "Empresa C", "Vistoria Anual", "Galpão Principal");

associarTecnico(0, tecnico1);
associarTecnico(2, tecnico1);

associarTecnico(1, tecnico2);

listarServicos();

iniciarServico(0);
concluirServico(1);

atualizarManutencao(1, "002-B", "Empresa B", "Reparo Urgente", "Troca de placa elétrica");

excluirServico(0);

cadastroVistoria("004", "Empresa D", "Vistoria Prévia", "Filial Centro");
associarTecnico(2, tecnico1);

listarServicos();
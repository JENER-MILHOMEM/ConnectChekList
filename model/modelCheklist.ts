import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()
interface CreateChecklistDTO {
    finalidade: string;
    pedido: string;
    acessorios?: string;
    obs?: string;
    servExec?: string;
    diagnostico?: string;
    liberacao: boolean;
    itensRelacionados?: string;
    data: Date;
    tecResponsavel: string;
    vistoGerencia: string;
}

interface CreateEquipamentoDTO {
    nome: string;
    descricao?: string;
    sn: string;
    sku: number;
    modelo: string;
    checklists?: CreateChecklistDTO[];
}

interface CreateClientDTO {
    nome: string;
    contato?: string;
    equipamentos?: CreateEquipamentoDTO[];
}
export const createClientWithEquipamentosAndChecklists = async (data: CreateClientDTO) => {
    const cliente = await prisma.$transaction(async (prisma) => {
        const createdClient = await prisma.cliente.create({
            data: {
                nome: data.nome,
                contato: data.contato,
                equipamentos: data.equipamentos
                    ? {
                        create: data.equipamentos.map((equipamento) => ({
                            nome: equipamento.nome,
                            descricao: equipamento.descricao,
                            sn: equipamento.sn,
                            sku: equipamento.sku,
                            modelo: equipamento.modelo,
                            checklists: equipamento.checklists
                                ? {
                                    create: equipamento.checklists.map((checklist) => ({
                                        finalidade: checklist.finalidade,
                                        pedido: checklist.pedido,
                                        acessorios: checklist.acessorios,
                                        obs: checklist.obs,
                                        servExec: checklist.servExec,
                                        diagnostico: checklist.diagnostico,
                                        liberacao: checklist.liberacao,
                                        itensRelacionados: checklist.itensRelacionados,
                                        data: checklist.data,
                                        tecResponsavel: checklist.tecResponsavel,
                                        vistoGerencia: checklist.vistoGerencia,
                                    })),
                                }
                                : undefined,
                        })),
                    }
                    : undefined,
            },
        });
        return createdClient;
    });

    return cliente;
};

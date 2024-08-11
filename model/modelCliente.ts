import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export const getAllClients = async (body: any) => {
    const clients = await prisma.cliente.findMany();
    return clients;
}
export const deleteClient = async (body: any) => {
    const client = await prisma.cliente.delete({
        where: {
            id: body.id
        }
    });
    return client;
}
export const updateClient = async (body: any) => {
    const client = await prisma.cliente.update({
        where: {
            id: body.id
        },
        data: {
            nome: body.nome,
            contato: body.contato
        }
    });
    return client;
}
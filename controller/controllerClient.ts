import {Request, Response} from "express";
import {getAllClients} from "../model/modelCliente";
import {deleteClient} from "../model/modelCliente";
import {updateClient} from "../model/modelCliente";
export const getallclients = async (req: Request, res: Response) => {
    try {
        const clients = await getAllClients(req.body)
        res.status(200).json(clients)
    } catch (error) {
        res.status(200).json(error)
    }
}
export const deleteclients = async (req: Request, res: Response) => {
    try {
        const clients = await deleteClient(req.body)
        res.status(200).json(clients)
    } catch (error) {
        res.status(200).json(error)
    }
}
export const updateclients = async (req: Request, res: Response) => {
    try {
        const clients = await updateClient(req.body)
        res.status(200).json(clients)
    } catch (error) {
        res.status(200).json(error)
    }
}
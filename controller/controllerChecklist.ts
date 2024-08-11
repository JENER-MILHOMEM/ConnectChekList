import {createClientWithEquipamentosAndChecklists} from '../model/modelCheklist'
import { Request, Response } from 'express';
/*import {getAllClients} from "../model/modelCheklist";
import {getEquipamentos} from "../model/modelCheklist";*/

export const createChecklist = async (req: Request, res: Response) => {
    try {
        const checklist = await createClientWithEquipamentosAndChecklists(req.body)
        res.status(200).json(checklist)
    } catch (error) {
        res.status(200).json(error)
    }
}
/*
export const getChecklist = async (req: Request, res: Response) => {
    try {
        const checklist = await getAllClients(req.body)
        res.status(200).json(checklist)
    } catch (error) {
        res.status(200).json(error)
    }
}
export const getALLequipamentos = async (req: Request, res: Response) => {
    try {
        const checklist = await getEquipamentos(req.body)
        res.status(200).json(checklist)
    } catch (error) {
        res.status(200).json(error)
    }
}*/

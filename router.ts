// @ts-ignore
import express from 'express';
export const router = express.Router();
import {createChecklist} from "./controller/controllerChecklist";
import {getallclients} from "./controller/controllerClient";
import {updateclients} from "./controller/controllerClient";
import {deleteclients} from "./controller/controllerClient";


router.put('/clientes/:id', updateclients)
router.delete('/clientes/:id', deleteclients)
router.get('/clientes', getallclients )
router.post('/', createChecklist )


